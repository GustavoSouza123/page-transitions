import { useEffect, useRef } from 'react';

export default function SmoothScroll({ children }) {
  const scrollContainerRef = useRef(null);
  const scrollY = useRef(0);
  const targetY = useRef(0);

  useEffect(() => {
    const container = scrollContainerRef.current;

    // Set body's height to match scrollable content
    document.body.style.height = `${container.getBoundingClientRect().height}px`;

    const smoothScroll = () => {
      targetY.current = window.scrollY;
      scrollY.current += (targetY.current - scrollY.current) * 0.125; // damping factor

      container.style.transform = `translateY(-${scrollY.current}px)`;
      requestAnimationFrame(smoothScroll);
    };

    requestAnimationFrame(smoothScroll);

    const onResize = () => {
      document.body.style.height = `${container.getBoundingClientRect().height}px`;
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
}
