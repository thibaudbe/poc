import { requestAnimFrame } from './requestAnimFrame';


let currentY;

export const getCurrentY = (() => {
  return (callback) => {
    const scrollTop = window.pageYOffset;

    if (currentY !== scrollTop) {
      currentY = scrollTop;
      if (typeof callback == 'function')
        callback(currentY);
      requestAnimFrame(getCurrentY);
    }
  };
})();
