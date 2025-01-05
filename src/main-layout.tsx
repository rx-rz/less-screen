import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navigation } from "./components/nav";
import { MobileNav } from "./components/mobile-nav";
import { Footer } from "./components/footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const MainLayout = () => {
  const mainRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      gsap.from("#quit", {
        scrollTrigger: {
          trigger: ".home-vid",
          start: "top 80%",
        },
        opacity: 0.6,
      });

      gsap.from(".features-card", {
        scrollTrigger: {
          trigger: ".features-card",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.25,
        duration: 1,
        ease: "power2.out",
      });
      gsap.from(".testimonial-card", {
        scrollTrigger: {
          trigger: ".testimonial-card",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.25,
        duration: 1,
        ease: "power2.out",
      });
      gsap.from("#download-now", {
        scrollTrigger: {
          trigger: "#download-now",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.25,
        duration: 1,
        ease: "power2.out",
      });
      gsap.from("#hero", {
        scrollTrigger: {
          trigger: "#hero",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.25,
        duration: 1,
        ease: "power2.out",
      });
      gsap.from("#faq", {
        scrollTrigger: {
          trigger: "#faq",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.25,
        duration: 1,
        ease: "power2.out",
      });
      gsap.from("footer", {
        scrollTrigger: {
          trigger: "footer",
          start: "top 100%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.25,
        duration: 1,
        ease: "power2.out",
      });
      gsap.from("#awkward", {
        scrollTrigger: {
          trigger: "#awkward",
          start: "top 100%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.25,
        duration: 1,
        ease: "power2.out",
      });
      gsap.from(".client-testimonials", {
        scrollTrigger: {
          trigger: ".client-testimonials",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.25,
        duration: 1,
        ease: "power2.out",
      });

      mm.add("(min-width: 900px)", () => {
        gsap.to("#nav", {
          width: "50%",
          ease: "circ.inOut",
          border: "1px solid #19191a",
          backgroundClip: "padding-box",
          backdropFilter: "blur(50px)",
          backgroundColor: "#060508",
          opacity: 0.8,
          scrollTrigger: {
            trigger: "#nav",
            start: "top top",
            end: "+=100",
            scrub: true,
          },
        });
      });

      mm.add("(max-width: 899px)", () => {
        gsap.to("#nav", {
          width: "80%",
          ease: "circ.inOut",
          border: "1px solid #19191a",
          backgroundClip: "padding-box",
          backdropFilter: "blur(30px)",
          backgroundColor: "#060508",
          opacity: 0.9,
          scrollTrigger: {
            trigger: "#nav",
            start: "top top",
            end: "+=50",
            scrub: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: mainRef }
  );
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <main ref={mainRef}>
        <Navigation />
        <MobileNav />
        <div className="mb-4"></div>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};
