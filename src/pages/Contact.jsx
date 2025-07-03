import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, CustomEase, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

export default function Contact() {
  useEffect(() => {
    // split texts after font loading to avoid bugs
    document.fonts.ready.then(() => {
      /* section 1 */

      const tl1 = gsap.timeline({
        // child tweens will inherit these defaults
        defaults: {
          // ease: 'expo.out',
          // duration: 1,
        },
      });

      const split1 = SplitText.create('.section1 .paragraph.p1', {
        type: 'words, lines',
        linesClass: 'line',
        mask: 'lines',
        onSplit: (self) => {
          // 1
          tl1.from(
            self.lines,
            {
              // delay: 0.5,
              y: 50,
              // autoAlpha: 0,
              stagger: 0.1,
              duration: 0.8,
              ease: 'power2.out',
            },
            '0.5'
          );
        },
      });

      const split2 = SplitText.create('.section1 .paragraph.p2', {
        type: 'words, lines',
        linesClass: 'line',
        mask: 'lines',
        onSplit: (self) => {
          // 2
          tl1.from(
            self.lines,
            {
              y: 25,
              // autoAlpha: 0,
              stagger: 0.1,
              duration: 0.8,
              // ease: 'power1.out',
              ease: CustomEase.create('custom', 'M0,0 C0.022,0.238 0.157,0.98 1,1.005 '),
            },
            '>-0.5'
          );
        },
      });

      // 3
      tl1.to(
        '.header nav a',
        {
          y: 0,
          stagger: 0.05,
          ease: 'power3.inOut',
        },
        '>-1'
      );

      /* section 2 */

      const split3 = SplitText.create('.section2 .paragraph.p1', {
        type: 'words, lines',
        mask: 'lines',
      });

      const split4 = SplitText.create('.section2 .paragraph.p2', {
        type: 'words, lines',
        mask: 'lines',
      });
      const split5 = SplitText.create('.section2 .paragraph.p3', {
        type: 'chars, words, lines',
        // mask: 'lines',
      });

      const tl2 = gsap.timeline({
        // child tweens will inherit these defaults
        defaults: {
          // ease: 'expo.out',
          // duration: 1,
        },
        scrollTrigger: {
          trigger: '.section2',
          start: 'top 90%',
          end: 'bottom 90%',
          toggleActions: 'play none none none',
        },
      });

      tl2
        .from(split3.lines, {
          // delay: 0.5,
          y: 50,
          autoAlpha: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power2.out',
        })
        .from(
          split4.lines,
          {
            // delay: 0.5,
            y: 50,
            autoAlpha: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power2.out',
          },
          '<0.5'
        )
        .from(
          split5.chars,
          {
            yPercent: 'random([-100, 100])',
            rotation: 'random(-30, 30)',
            ease: 'back.out',
            autoAlpha: 0,
            stagger: {
              amount: 0.5,
              from: 'random',
            },
          },
          '>-0.5'
          // '>'
        );

      /* section 3 */

      const tl3 = gsap.timeline({
        // child tweens will inherit these defaults
        defaults: {
          // ease: 'expo.out',
          // duration: 1,
        },
        scrollTrigger: {
          trigger: '.section3',
          start: 'top 90%',
          end: 'bottom 90%',
          toggleActions: 'play none none none',
        },
      });

      const split6 = SplitText.create('.section3', {
        type: 'chars, words, lines',
        wordsClass: 'word',
        mask: 'lines',
        onSplit: (self) => {
          // 1
          tl3.from(
            self.chars,
            {
              // delay: 0.5,
              y: 120,
              stagger: 0.1,
              duration: 1.5,
              ease: CustomEase.create("custom", "M0,0 C0.657,0.127 0.088,0.847 1,1 "),
            },
            '0.5'
          );
        },
      });
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
          <div className="paragraph p2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia quam id consequat mollis. In nec
            suscipit augue. Mauris volutpat ullamcorper vulputate. Cras eu pellentesque purus, vel accumsan velit.
            Nullam in lacus et elit blandit porta non ut turpis. Vivamus tempor mauris est, nec congue urna placerat in.
            Aenean ultricies turpis at ex pharetra vulputate.
          </div>
          <div className="paragraph p3">
            Break apart HTML text into characters, words, and/or lines for easy animation.
          </div>
        </div>
      </div>

      <div className="section section3">I am Gustavo Souza</div>
    </div>
  );
}
