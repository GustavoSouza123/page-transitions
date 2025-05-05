import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Picture1 from '../../public/landscape1.jpg';
import Picture2 from '../../public/landscape2.jpg';
import Picture3 from '../../public/landscape3.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const images = [Picture1, Picture2, Picture3];
  const word = 'with gsap';
  const section2Ref = useRef(null);
  const title1Ref = useRef(null);
  const lettersRef = useRef([]);
  const imagesRef = useRef([]);

  useEffect(() => {
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

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: section2Ref.current,
				start: 'top 70%',
        end: 'bottom 50%',
        scrub: true,
      },
    })
    .from(title1Ref.current, { y: -50 }, 0)
		.to(imagesRef.current[1], { y: -150, ease: 'none' }, 0)
		.to(imagesRef.current[2], { y: -255, ease: 'none' }, 0);

    lettersRef.current.forEach((letter, i) => {
      tl2.from(
        letter,
        {
          top: Math.floor(Math.random() * -75) - 25,
        },
        0
      );
    });

    return () => {
      // cleanup when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="content about">
      <div className="section section1">
        <h1>About Page</h1>
        <div className="body">
          <p>
            Fusce molestie, tellus ut molestie molestie, nisl lacus fringilla nulla, eget auctor libero lorem eu nulla.
            Donec blandit purus ut est commodo dignissim. Morbi eu justo ut arcu luctus commodo. Phasellus at urna ut
            nisi ullamcorper aliquet eget ac turpis. Fusce ut leo vitae lacus imperdiet aliquam. Quisque pretium
            vulputate malesuada. Mauris vehicula est at ex condimentum imperdiet. Curabitur vitae lorem consectetur,
            laoreet nulla ultricies, rutrum quam. Maecenas varius arcu dui, in vestibulum ante faucibus in. Integer
            faucibus ullamcorper tellus vitae tincidunt. Nunc interdum justo in mi commodo, vel bibendum risus
            venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue lorem id lacus
            efficitur tempus. Proin bibendum vitae mi nec fermentum.
          </p>
        </div>
      </div>

      <div className="section section2" ref={section2Ref}>
        <div className="body">
          <h1 ref={title1Ref}>Parallax</h1>
          <h1>Scroll</h1>
          <div className="word">
            <p>
              {word.split('').map((letter, i) => {
                return (
                  <span key={`l_${i}`} ref={(el) => (lettersRef.current[i] = el)}>
                    {letter}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
        <div className="images">
          {images.map((image, i) => {
            return (
              <div key={`i_${i}`} ref={(el) => (imagesRef.current[i] = el)} className="image-container">
                <img src={image} alt="Image" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="section section3"></div>
    </div>
  );
}
