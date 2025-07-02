import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, CustomEase, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

export default function Contact() {
  useEffect(() => {
    /* section 1 */

    const split1 = SplitText.create('.section1 .paragraph.p1', {
      type: 'words, lines',
      linesClass: 'line',
      mask: 'lines',
    });

    const split2 = SplitText.create('.section1 .paragraph.p2', {
      type: 'words, lines',
      linesClass: 'line',
      mask: 'lines',
    });

    const tl1 = gsap.timeline({
      // child tweens will inherit these defaults
      defaults: {
        // ease: 'expo.out',
        // duration: 1,
      },
    });

    tl1
      .from(split1.lines, {
        delay: 0.5,
        y: 50,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
      })
      .from(
        split2.lines,
        {
          delay: 1,
          y: 25,
          // autoAlpha: 0,
          stagger: 0.1,
          duration: 0.8,
          // ease: 'power1.out',
					ease: CustomEase.create('custom', 'M0,0 C0.022,0.238 0.157,0.98 1,1.005 '),
        },
        '<-0.3'
      )
      .to(
        '.header nav a',
        {
          y: 0,
          stagger: 0.05,
          ease: 'power3.inOut',
        },
        '<'
      );

    /* section 2 */

    const split3 = SplitText.create('.section2 .paragraph.p1', {
      type: 'words, lines',
      mask: 'lines',
    });

    const tl2 = gsap.timeline({
      // child tweens will inherit these defaults
      defaults: {
        // ease: 'expo.out',
        // duration: 1,
      },
      scrollTrigger: {
        trigger: '.section2',
        start: 'top 70%',
        end: 'bottom 90%',
        toggleActions: 'play none none none',
      },
    });

    tl2.from(split3.lines, {
      y: 50,
      autoAlpha: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power2.out',
    });

    return () => {
      // cleanup when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="content contact">
      <div className="section section1">
        {/* <h1>Gustavo Souza</h1> */}
        <div className="body">
          <div className="paragraph p1">
            I’m a creative developer and digital designer from São Paulo, Brazil. I focus on building websites with
            seamless motion, interaction, and performance.
          </div>
          <div className="paragraph p2">
            It’s not just about colors or logos, but about how things move, respond, and feel. A well-timed transition,
            a tactile hover effect, a fluid scroll. These subtle interactions shape perception, build trust, and create
            an emotional connection with the user.
          </div>
        </div>
      </div>

      <div className="section section2">
        <div className="body">
          <div className="paragraph p1">
            I’m a creative developer and digital designer from São Paulo, Brazil. I focus on building websites with
            seamless motion, interaction, and performance.
          </div>
        </div>
      </div>

      <div className="section section3"></div>
    </div>
  );
}
