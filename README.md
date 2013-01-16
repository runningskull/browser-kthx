# browserkthx

Encourage your users to update their browser via a simple middleware.

It looks like this:

![screenshot](http://f.cl.ly/items/3R0i351x0Z3R342D401y/browser-kthx.png)

## use

To show the screen to anyone using IE <= 8 and Opera < 10

```javascript
app.use(browserkthx({
    ie: '<= 8',
    opera: '< 10'
}));
```

## why?

Because if you aren't going to support a browser, the least you can do is tell your users.

### Isn't this bad practice?

No. Forcing a proprietary, closed source, old, unsupported, single platform browser on people is a bad idea. Saying your site needs Chrome or Firefox to run is fine; especially if you are using new web tech not found in other browsers.

### What if my users can't install a new browser?

This is highly unlikely. If they are in a corporate setting, then why are you supporting this nonsense? If they are a home user, you are doing them a favor by introducing them to a better web. If they really can't install a new browser then I guess you need to spend the countless man hours making sure your site really does work in IE 6.
