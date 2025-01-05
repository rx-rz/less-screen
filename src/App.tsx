import { AlarmClock, Home, Moon, Palette, Pause, Target } from "lucide-react";
import "./App.css";
import { FAQ } from "./components/faq";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { DownloadButtonOne } from "./components/download-btn-one";
import { MobileNav } from "./components/mobile-nav";
import { DownloadButtonTwo } from "./components/download-btn-two";
import { Features } from "./components/features";

function App() {
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
  const testimonials = [
    {
      quote:
        "I thought I'd tried everything, but nothing stuck—until now. The community made all the difference. Knowing I wasn't alone, seeing others succeed, and sharing my own journey gave me strength. This app is the reason I believe in myself again.",
      name: "Lucas P",
      imageUrl: "/api/placeholder/40/40",
    },
    {
      quote:
        "Using QUITTR has been a game-changer for me. What once felt impossible now feels manageable thanks to the app's practical tools and encouragement from the community. For the first time, I'm in control of my habits, and the difference in my mental and physical well-being is incredible.",
      name: "Jack M",
      imageUrl: "/api/placeholder/40/40",
    },
    {
      quote:
        "I didn't think I could ever break free. It felt like I was stuck in a loop with no way out. Using this app gave me the push I needed to start, and the progress tracking kept me going when I wanted to give up. Now, I feel like I'm finally in control of my life again.",
      name: "Leslie K",
      imageUrl: "/api/placeholder/40/40",
    },
  ];

  return (
    <main className=" mx-auto tracking-tight" ref={mainRef}>
      <nav
        className="hidden justify-between md:flex z-20 border-[#19191a] w-[95%] items-center p-2 max-w-7xl mx-auto sticky top-2 rounded-full"
        id="nav"
      >
        <div className="text-xl font-bold">LESSSCREEN</div>
        <div className="flex gap-8 text-lg">
          <a href="#features" className=" hover:text-white">
            Features
          </a>
          <a href="#product" className=" hover:text-white">
            Product
          </a>
          <a href="#android" className=" hover:text-white">
            Android
          </a>
        </div>
        <DownloadButtonOne />
      </nav>
      <MobileNav />
      <div
        className="max-w-4xl w-[95%] mx-auto text-center md:mt-16 mt-12  lg:mt-32 px-4"
        id="hero"
      >
        <h1 className="md:text-4xl text-3xl lg:text-6xl font-bold mb-6 sub-heading">
          The Ultimate App to Eliminate <br /> Phone Distractions
        </h1>
        <p className=" text-lg lg:text-xl md:mb-8 mb-4 max-w-96 mx-auto md:max-w-max">
          Join 50,000+ users on a journey to mindful technology use and improved
          wellbeing
        </p>
        <DownloadButtonTwo />
      </div>
      <div className="relative -z-20">
        <img
          src="/hero-image.png"
          className="  w-full h-full mb-14"
          alt=""
        />
      </div>
      <div className="text-center max-w-[95%] mx-auto" id="quit">
        <p className="font-bold text-2xl lg:text-3xl mb-3 sub-heading">
          Finally Focus.
        </p>
        <p className="max-w-lg text-lg mx-auto ">
          Backed by behavioral science and cognitive psychology, our
          comprehensive toolkit helps you build a healthier relationship with
          your smartphone, supported by research-proven methods for digital
          wellness.
        </p>
      </div>
      <div
        id="features"
        className="grid grid-cols-1  w-[95%] my-10 lg:my-24 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3 "
      >
        <div className="py-4 lg:p-6 border-[#78818d] features-card md:border-r-[0.5px] border-b">
          <Home className="w-6 h-6 text-[#78818d]" strokeWidth={1.3} />
          <h3 className="text-lg font-bold text-white my-3 sub-heading">
            Minimalist Homescreen
          </h3>
          <p className=" text-sm leading-relaxed">
            A clutter-free, search-focused interface reduces cognitive load by
            up to 20%, helping your brain stay focused and calm. Research shows
            minimal interfaces significantly decrease unconscious phone checking
            behavior.
          </p>
        </div>

        <div className="py-4 lg:p-6 border-[#78818d] features-card lg:border-r-[0.5px] border-b">
          <AlarmClock className="w-6 h-6 text-[#78818d]" strokeWidth={1.3} />
          <h3 className="text-lg font-bold text-white my-3 sub-heading">
            Intelligent Usage Limits
          </h3>
          <p className=" text-sm leading-relaxed">
            Leveraging behavioral psychology, our smart limits adapt to your
            patterns. Studies show implementing micro-boundaries reduces
            excessive screen time by 30% within 2 weeks, while maintaining
            productive usage.
          </p>
        </div>

        <div className="py-4 lg:p-6 border-[#78818d] features-card border-b md:border-r lg:border-r-0">
          <Pause className="w-6 h-6 text-[#78818d]" strokeWidth={1.3} />
          <h3 className="text-lg font-bold text-white my-3 sub-heading">
            Mindful Breaks
          </h3>
          <p className=" text-sm leading-relaxed">
            Real-time monitoring triggers scientifically-timed breaks during
            extended sessions. Research indicates 5-minute breaks every 30
            minutes of continuous use significantly reduce digital fatigue and
            improve attention span.
          </p>
        </div>

        <div className="py-4 lg:p-6 border-b  border-[#78818d] features-card lg:border-r md:border-b lg:border-b-0">
          <Palette className="w-6 h-6 text-[#78818d]" strokeWidth={1.3} />
          <h3 className="text-lg font-bold text-white my-3 sub-heading">
            Grayscale Mode
          </h3>
          <p className=" text-sm leading-relaxed">
            Automatically removes colorful distractions by enabling grayscale
            during high-risk periods. Studies show grayscale interfaces reduce
            impulsive app checking by 10% and decrease overall screen time by
            37%.
          </p>
        </div>

        <div className="py-4 lg:p-6 border-[#78818d] features-card md:border-r border-b md:border-b-0 lg:border-b-0">
          <Moon className="w-6 h-6 text-[#78818d]" strokeWidth={1.3} />
          <h3 className="text-lg font-bold text-white my-3 sub-heading">
            Night Guardian
          </h3>
          <p className=" text-sm leading-relaxed">
            Enforces healthy sleep hygiene by limiting late-night usage. Based
            on circadian rhythm research, this feature helps maintain natural
            melatonin production and improve sleep quality.
          </p>
        </div>

        <div className="py-4 lg:p-6 border-[#78818d] features-card">
          <Target className="w-6 h-6 text-[#78818d]" strokeWidth={1.3} />
          <h3 className="text-lg font-bold text-white my-3 sub-heading">
            Pre-Launch Awareness
          </h3>
          <p className=" text-sm leading-relaxed">
            Implements a mindful pause before app launches, reducing impulsive
            usage by 48%. Users set intentional time limits per session,
            promoting conscious consumption rather than mindless scrolling.
          </p>
        </div>
      </div>
      <Features />
      <div className="max-w-6xl w-[95%] mx-auto px-4">
        <div className="mb-4 client-testimonials">
          <div className=" backdrop-filter backdrop-blur-lg border border-[#161617]  w-fit shadow-inner shadow-white/20 rounded-full md:px-3 md:py-2 px-2 py-1 md:text-lg mb-4">
            Client testimonials
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 max-w-xl">
            <span className="text-white">
              Thousands of people vouch for us,{" "}
            </span>
            <span className="text-gray-500">and there's a good reason.</span>
          </h2>
          <p className=" text-lg md:text-xl mb-12 max-w-3xl">
            Peoples lives have been changed forever with the use of our app,
            leading to unspeakable amounts of gratitude.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mb-24 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              imageUrl={testimonial.imageUrl}
            />
          ))}
        </div>
      </div>

      <div
        className="grid md:grid-cols-2 w-[88%] mb-32 mt-10 max-w-6xl mx-auto"
        id="awkward"
      >
        <div className="max-w-lg">
          <img src="/img-2.avif" className="w-full object-cover" alt="" />
        </div>
        <div className="h-full flex flex-col justify-center max-w-lg mt-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 max-w-xl">
            <span className="text-white">It's an awkward topic,</span>
            <span className="text-gray-500">{" "} but not one to ignore.</span>
          </h2>
          <DownloadButtonTwo />
        </div>
      </div>
      <div className="max-w-xl mx-auto mt-24 mb-12 md:mb-20 w-[90%]" id="faq">
        <h2 className="text-2xl md:text-4xl font-bold font-dm_sans text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-center mt-3 mb-10 text-xl ">
          Get quick answers to the most common questions about our platform.
        </p>
        <div className="border-2 [&>details]:border-b [&>details:last]:border-none border-[#19191a] px-4 rounded-xl">
          <FAQ
            question="How is QUITTR different from other recovery apps?"
            answer="QUITTR focuses specifically on porn addiction, blending science-backed technologies with tailored features like streak tracing and community support."
          />
          <FAQ
            question="How is QUITTR different from other recovery apps?"
            answer="QUITTR focuses specifically on porn addiction, blending science-backed technologies with tailored features like streak tracing and community support."
          />
          <FAQ
            question="How is QUITTR different from other recovery apps?"
            answer="QUITTR focuses specifically on porn addiction, blending science-backed technologies with tailored features like streak tracing and community support."
          />
          <FAQ
            question="How is QUITTR different from other recovery apps?"
            answer="QUITTR focuses specifically on porn addiction, blending science-backed technologies with tailored features like streak tracing and community support."
          />
        </div>
      </div>
      <div
        id="download-now"
        className="max-w-6xl w-[95%] mx-auto md:mb-24 mb-12"
      >
        <div className="bg-[#242831] text-white h-96 rounded-2xl text-center p-4 ">
          <h2 className="text-2xl md:text-4xl font-bold font-dm_sans text-center pt-24">
            Ready to finally quit?
          </h2>
          <p className=" text-center mx-auto mt-3 mb-5 md:mb-10 md:text-xl  max-w-xl">
            Start your journey today and start becoming the best version of
            yourself. The benefits feel great, trust us - The QUITTR Team
          </p>
          <div className="w-fit mx-auto">
            <DownloadButtonOne />
          </div>
        </div>
      </div>
      <footer className="max-w-6xl mx-auto w-[95%]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-20  w-full border-b border-[#19191a] pb-4">
          <div>
            <p className="text-4xl">Logo</p>
            <p className="text-xs  mt-2">The Flagship App to Quit Gambling.</p>
          </div>
          <div>
            <h2 className="text-xl font-medium mb-2">About</h2>
            <div className="text-xs flex flex-col gap-2 ">
              <p>Features</p>
              <p>Product</p>
              <p>Blog</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-medium mb-2">Company</h2>
            <div className="text-xs flex flex-col gap-2 ">
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
        <p className="text-xs my-6">QUITTR LLC © All rights reserved</p>
      </footer>
    </main>
  );
}

const TestimonialCard = ({
  quote,
  name,
  imageUrl,
}: {
  quote: string;
  name: string;
  imageUrl: string;
}) => (
  <div className="bg-[#242831] testimonial-card rounded-lg lg:p-8 md:p-6 p-4 flex flex-col h-full backdrop-filter backdrop-blur-lg border border-[#161617]  w-fit shadow-white/20">
    <blockquote className=" text-lg leading-relaxed mb-8 flex-grow">
      "{quote}"
    </blockquote>
    <div className="flex items-center gap-3">
      <img
        src={imageUrl}
        alt={name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <div className="text-white font-medium">{name}</div>
        <div className="text-gray-500 text-sm">Member</div>
      </div>
    </div>
  </div>
);

export default App;
