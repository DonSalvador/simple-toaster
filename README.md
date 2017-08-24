# Simple toaster

An elegant and simple notification for javascript, with no dependencies


Features
--------

+ Simple CSS-animated customizable toast pop-ups for any design;
+ No dependencies and `< 1kb` code; 
+ Toasts have different types and apply any style you need;
+ Toasts appear and disappear by specifying optional timeout.


Installation & Usage
--------------------

SimpleToaster is primarily ES6 module. See it in action:

```bash
npm i simple-toaster
```

```javascript
import SimpleToaster from "simple-toaster";

SimpleToaster('success', 'Hello Toaster!')
```

Parameters:
```javascript
window.toaster = SimpleToaster

window.toaster(
  'error',    // Toaster style type. Pre-defined: error, warning or success
  'message',  // Message
  false       // Timeout in ms (default: 5000)
)

```

Import the style

```javascript
@import ~simple-toaster/src/simple-toaster
```
