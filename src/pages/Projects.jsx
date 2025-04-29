import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function Projects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl1 = gsap.timeline({
      defaults: {
        ease: 'expo.out',
        duration: 1,
      },
    });

    tl1.to(
      '.header nav a',
      {
        y: 0,
        stagger: 0.05,
        duration: 0.7,
        ease: 'power3.inOut',
      },
      '>'
    );

    return () => {
      // cleanup when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="content">
      <div className="section section1">
        <h1>Projects Page</h1>
        <div className="body">
          Curabitur porttitor nisi ipsum, et tincidunt ex molestie non. Maecenas suscipit, est at dignissim accumsan,
          leo lorem imperdiet neque, quis facilisis dui erat eu velit. Maecenas dictum eu velit eu porttitor.
          Pellentesque convallis nunc quis neque pretium, sed vehicula massa faucibus. Donec accumsan tortor et aliquam
          consequat. Fusce imperdiet ac nisi a consectetur. Etiam sed odio lorem. Pellentesque et tortor accumsan,
          ornare enim quis, cursus nisl. Aenean ac justo ex. Sed mattis cursus arcu ut feugiat. Morbi lobortis, sem non
          porta viverra, magna massa condimentum enim, tempor tempor velit odio in metus. Sed cursus egestas magna eu
          dapibus. In hac habitasse platea dictumst. Integer sed orci eget erat feugiat facilisis sit amet nec ligula.
          Ut vitae porttitor nunc, vitae tempor eros. Nullam bibendum, est vel iaculis dapibus, erat lorem pharetra
          nulla, eu bibendum sapien dolor a neque.
        </div>
      </div>

      <div className="section section2"></div>
    </div>
  );
}
