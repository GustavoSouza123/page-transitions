import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
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

    return () => {
      // cleanup when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="content">
      <div className="section section1">
        <h1>Contact Page</h1>
        <div className="body">
          <p>
            Suspendisse convallis risus sed urna imperdiet, eget commodo enim venenatis. In neque leo, consequat vitae
            turpis at, cursus malesuada velit. Suspendisse a ante non enim finibus pretium quis eu mauris. Morbi
            volutpat pellentesque massa, non ornare purus ultricies a. Etiam quis vehicula sapien. Vestibulum tempus
            purus sit amet arcu feugiat, vitae scelerisque augue vulputate. Nulla facilisis quis risus sit amet gravida.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </p>

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

      <div className="section section2"></div>
    </div>
  );
}
