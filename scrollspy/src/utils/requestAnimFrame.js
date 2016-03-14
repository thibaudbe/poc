// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel

// Detect request animation frame
export const requestAnimFrame = window.requestAnimationFrame ||
   window.webkitRequestAnimationFrame ||
   window.mozRequestAnimationFrame ||
   window.msRequestAnimationFrame ||
   window.oRequestAnimationFrame ||
   // IE Fallback, you can even fallback to onscroll
   function(callback){ window.setTimeout(callback, 1000/60) };


// Cancel animation frame
export const cancelAnimFrame = window.cancelAnimationFrame ||
   window.webkitCancelAnimationFrame ||
   window.mozCancelAnimationFrame ||
   window.msCancelAnimationFrame ||
   window.oCancelAnimationFrame ||
   // IE Fallback, you can even fallback to onscroll
   clearTimeout(callback)
