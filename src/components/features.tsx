import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export const Features = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [currentVideo, setCurrentVideo] = useState("/vid-1.mp4");
  const videoRef = useRef<HTMLVideoElement>(null);
  const videos = ["/vid-1.mp4", "/vid-2.mp4", "/vid-3.mp4", "/vid-4.mp4"];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = currentVideo;
      videoRef.current.load(); // Reload video to reflect the new source
    }
  }, [currentVideo]);

useEffect(() => {
  let currentIndex = -1;

  videos.forEach((video, index) => {
    ScrollTrigger.create({
      trigger: `#scroll-side-${index + 1}`,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        if (currentIndex !== index) {
          currentIndex = index;
          setCurrentVideo(video);
          gsap.fromTo(
            videoRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1 }
          );
        }
      },
      onEnterBack: () => {
        if (currentIndex !== index) {
          currentIndex = index;
          setCurrentVideo(video);
          gsap.fromTo(
            videoRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1 }
          );
        }
      },
    });
  });
}, [videos]);

  return (
    <>
      <div className="max-w-6xl mx-auto my-24 lg:block hidden" id="product">
        <div className="flex relative w-full justify-between">
          <div className="h-[650px] sticky top-24" id="sticky-side">
            <div className="relative h-[630px] w-[298px] flex items-center justify-center">
              <img
                src="/iphone-frame.png"
                className="h-full w-full absolute inset-0 z-20"
                alt=""
              />
              <video
                className="w-full h-[600px] -z-10 object-contain"
                playsInline
                ref={videoRef}
                loop
                muted
                autoPlay
              >
                <source
                  src={currentVideo}
                  type="video/mp4"
                  className="w-full"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="w-fit">
            <div className="h-screen" id="scroll-side-1">
              <p className="font-bold text-2xl lg:text-3xl mb-3 sub-heading">
                Stay Focused with a Minimalist Homescreen
              </p>
              <p className="max-w-lg text-lg  opacity-80">
                Our minimalist homescreen replaces endless rows of colorful,
                attention-grabbing apps with a clean, search-focused interface
                that helps you stay mindful and intentional with your device
                usage.
              </p>
              <ul className="list-disc list-outside ml-5 mt-4 text-lg opacity-80">
                <li>Instant access to apps through intelligent search</li>
                <li>
                  Reduced visual clutter proven to decrease unconscious phone
                  checking
                </li>
              </ul>
            </div>
            <div className="h-screen" id="scroll-side-2">
              <p className="font-bold text-2xl lg:text-3xl mb-3 sub-heading">
                Master Your Time with Smart Limits
              </p>
              <p className="max-w-lg text-lg  opacity-80">
                Get unprecedented control over your digital habits with
                LessScreen's intelligent usage limits. Our adaptive system
                learns from your patterns to create personalized boundaries that
                help you maintain a healthy relationship with your apps without
                compromising productivity.
              </p>
              <ul className="list-disc list-outside ml-5 mt-4 text-lg opacity-80">
                <li>Personalized daily app time limits</li>
                <li>Dynamic adjustments based on usage patterns</li>
                <li>Gentle interventions during peak usage times</li>
              </ul>
            </div>
            <div className="h-screen" id="scroll-side-3">
              <p className="font-bold text-2xl lg:text-3xl mb-3 sub-heading">
                Minimize Distractions With Grayscale
              </p>
              <p className="max-w-lg text-lg  opacity-80">
                Transform your device's visual appeal with LessScreen's
                intelligent Grayscale Mode. By removing the psychologically
                engineered colors that make apps irresistible, we help you see
                your phone for what it is - a tool, not a temptation.
              </p>
              <ul className="list-disc list-outside ml-5 mt-4 text-lg opacity-80">
                <li>Automatically dims vibrant, attention-grabbing colors</li>
                <li>Reduces dopamine triggers from visual stimuli</li>
                <li>Transforms addictive interfaces into neutral tools</li>
                <li>Smart scheduling for high-risk periods</li>
              </ul>
            </div>
            <div className="h-screen" id="scroll-side-4">
              <p className="font-bold text-2xl lg:text-3xl mb-3 sub-heading">
                Unlock your understanding
              </p>
              <p className="max-w-lg text-lg  opacity-80">
                Transform your relationship with technology through LessScreen's
                comprehensive insights dashboard. Our data-driven approach turns
                your usage patterns into actionable insights, helping you make
                informed decisions about your digital wellness journey.
              </p>
              <ul className="list-disc list-outside ml-5 mt-4 text-lg opacity-80">
                <li>Real-time usage tracking and pattern recognition</li>
                <li>Weekly and monthly trend analysis</li>
                <li>Peak usage time identification</li>
                <li>App category breakdown and impact scoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto w-[95%] lg:hidden mb-16" id="product">
        <div className="mb-10">
          <p className="font-bold text-xl lg:text-3xl mb-3 sub-heading">
            Stay Focused with a Minimalist Homescreen
          </p>
          <p className="max-w-lg  md:text-lg  opacity-80">
            Our minimalist homescreen replaces endless rows of colorful,
            attention-grabbing apps with a clean, search-focused interface that
            helps you stay mindful and intentional with your device usage.
          </p>
          <ul className="list-disc list-outside ml-5 mt-4 md:text-lg opacity-80">
            <li>Instant access to apps through intelligent search</li>
            <li>
              Reduced visual clutter proven to decrease unconscious phone
              checking
            </li>
          </ul>
          <div className="relative mx-auto mt-8 h-[520px] w-[260px] flex items-center justify-center">
            <img
              src="/iphone-frame.png"
              className="h-full w-full absolute inset-0 z-20"
              alt=""
            />
            <video
              className="w-full h-[500px] -z-10 object-contain"
              playsInline
              loop
              muted
              autoPlay
            >
              <source src="/vid-1.mp4" type="video/mp4" className="w-full" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="mb-10">
          <p className="font-bold text-xl lg:text-3xl mb-3 sub-heading">
            Master Your Time with Smart Limits
          </p>
          <p className="max-w-lg  md:text-lg  opacity-80">
            Get unprecedented control over your digital habits with
            LessScreen's intelligent usage limits. Our adaptive system learns
            from your patterns to create personalized boundaries that help you
            maintain a healthy relationship with your apps without compromising
            productivity.
          </p>
          <ul className="list-disc list-outside ml-5 mt-4 md:text-lg opacity-80">
            <li>Personalized daily app time limits</li>
            <li>Dynamic adjustments based on usage patterns</li>
            <li>Gentle interventions during peak usage times</li>
          </ul>
          <div className="relative mx-auto mt-8 h-[520px] w-[260px] flex items-center justify-center">
            <img
              src="/iphone-frame.png"
              className="h-full w-full absolute inset-0 z-20"
              alt=""
            />
            <video
              className="w-full h-[500px] -z-10 object-contain"
              playsInline
              loop
              muted
              autoPlay
            >
              <source src="/vid-2.mp4" type="video/mp4" className="w-full" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="mb-10">
          <p className="font-bold text-xl lg:text-3xl mb-3 sub-heading">
            Minimize Distractions With Grayscale
          </p>
          <p className="max-w-lg  md:text-lg  opacity-80">
            Transform your device's visual appeal with LessScreen's intelligent
            Grayscale Mode. By removing the psychologically engineered colors
            that make apps irresistible, we help you see your phone for what it
            is - a tool, not a temptation.
          </p>
          <ul className="list-disc list-outside ml-5 mt-4 md:text-lg opacity-80">
            <li>Automatically dims vibrant, attention-grabbing colors</li>
            <li>Reduces dopamine triggers from visual stimuli</li>
            <li>Transforms addictive interfaces into neutral tools</li>
            <li>Smart scheduling for high-risk periods</li>
          </ul>
          <div className="relative mx-auto mt-8 h-[520px] w-[260px] flex items-center justify-center">
            <img
              src="/iphone-frame.png"
              className="h-full w-full absolute inset-0 z-20"
              alt=""
            />
            <video
              className="w-full h-[500px] -z-10 object-contain"
              playsInline
              loop
              muted
              autoPlay
            >
              <source src="/vid-3.mp4" type="video/mp4" className="w-full" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="mb-10">
          <p className="font-bold text-xl lg:text-3xl mb-3 sub-heading">
            Take Control with Actionable Insights
          </p>
          <p className="max-w-lg  md:text-lg  opacity-80">
            Transform your relationship with technology through LessScreen's
            comprehensive insights dashboard. Our data-driven approach turns
            your usage patterns into actionable insights, helping you make
            informed decisions about your digital wellness journey.
          </p>
          <ul className="list-disc list-outside ml-5 mt-4 md:text-lg opacity-80">
            <li>Real-time usage tracking and pattern recognition</li>
            <li>Weekly and monthly trend analysis</li>
            <li>Peak usage time identification</li>
            <li>App category breakdown and impact scoring</li>
          </ul>
          <div className="relative mx-auto mt-8 h-[520px] w-[260px] flex items-center justify-center">
            <img
              src="/iphone-frame.png"
              className="h-full w-full absolute inset-0 z-20"
              alt=""
            />
            <video
              className="w-full h-[500px] -z-10 object-contain"
              playsInline
              loop
              muted
              autoPlay
            >
              <source src="/vid-4.mp4" type="video/mp4" className="w-full" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
};
