import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Contact() {
  useEffect(() => {
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
        //duration: 1,
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
          delay: 0.5,
          y: 50,
          autoAlpha: 0,
          stagger: 0.1,
          duration: 1,
          ease: 'power1.out',
        },
        '<'
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

      {/* <div className="section section2"></div> */}
    </div>
  );
}
