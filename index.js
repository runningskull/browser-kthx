
// builtin
var fs = require('fs');

// vendor
var useragent = require('useragent');
require('useragent/features');

// load base html file
var html = fs.readFileSync(__dirname + '/assets/index.html', 'utf8');

function b64(name) {
    return 'base64,' + fs.readFileSync(__dirname + '/assets/' + name).toString('base64');
};

var replace = {
    'style.css': 'data:text/css;' + b64('style.css'),
    'windows.css': 'data:text/css;' + b64('windows.css'),
    'ie.png': 'data:image/png;' + b64('img/ie.png'),
    'firefox.png': 'data:image/png;' + b64('img/firefox.png'),
    'chrome.png': 'data:image/png;' + b64('img/chrome.png'),
};

module.exports = function(opt) {
    opt = opt || {}

    return function(req, res, next) {
        var agent = req.headers['user-agent'];
        // if no agent sent, allow request
        if (!agent) {
            return next();
        }

        var ua = useragent.parse(agent);
        var family = ua.family.toLowerCase();

        var blacklist = opt[family];
        if (!blacklist || !ua.satisfies(blacklist)) {
            return next();
        }

        // depending on os, we will show or hide windows specific stuff
        var os = ua.os.family.toLowerCase();

        var page = html.replace(/{{(.*)}}/g, function(_, item) {
            if (item === 'footer') {
                if (!opt.footer) {
                    return '';
                }
                return '<small class="footer">' + opt.footer + '</small>';
            }

            if (item === 'windows.css' && os.indexOf('windows') < 0) {
                return '#';
            }
            return replace[item];
        });

        res.send(page);
    };
};
