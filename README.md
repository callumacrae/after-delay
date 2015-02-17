# after-delay [![Build Status](https://travis-ci.org/callumacrae/after-delay.svg?branch=master)](https://travis-ci.org/callumacrae/after-delay)

after-delay runs some code once a period of time has passed with after-delay
not being called again in that time.

Do you recognise this code?

```js
var timeout;

on('someEvent', function () {
	clearTimeout(timeout);

	timeout = setTimeout(function () {
		console.log('Event not fired for a second!');
	}, 1000);
});
```

Using this library, you can write just this:

```js
var afterDelay = require('after-delay');

on('someEvent', function () {
	afterDelay('someEvent', function () {
		console.log('Event not fired for a second!');
	}, 1000);
});
```

It's an entire two lines shorter!

The event name should be unique to each event, and when `afterDelay()` is
called with the same name, the old timeout will be cancelled.

Calling `afterDelay()` without a function will cause the delay to be cancelled.
This behaviour is also aliased to `afterDelay.cancel()`.

## Install

```
$ npm install --save after-delay
```

## Usage

```js
afterDelay(eventName, callbackFunction, timeoutInMs);
afterDelay.cancel(eventName);
```

## License

Released under the MIT license.