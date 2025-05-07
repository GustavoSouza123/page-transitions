import Lenis from 'lenis';

let lenis;

export function getLenis() {
  if (!lenis) {
    lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }

  return lenis;
}
