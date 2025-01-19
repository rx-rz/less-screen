import { AlarmClock, Home, Moon, Palette, Pause, Target } from "lucide-react";
import "./App.css";
import { DownloadButtonOne } from "./components/download-btn-one";
import { DownloadButtonTwo } from "./components/download-btn-two";
import { Features } from "./components/features";

export const HomePage = () => {
  const testimonials = [
    {
      quote:
        "As a busy mom of two, LessScreen helped me set better boundaries with my phone. I love how I can customize limits for work hours and family time. My screen time is down 40% and I feel more present with my kids.",
      name: "Sarah K.",
      imageUrl: "https://randomuser.me/api/portraits/women/31.jpg",
      job: "Working Mom",
    },
    {
      quote:
        "The app usage tracking was eye-opening. I had no idea I was spending 4 hours daily on social media. LessScreen's reminders helped me focus better on my studies, and my grades improved this semester!",
      name: "Tom R.",
      imageUrl: "https://randomuser.me/api/portraits/men/33.jpg",
      job: "College Student",
    },
    {
      quote:
        "Finally, a launcher that respects privacy! All data stays on my device, and the clean interface helps me stay productive. The search feature is incredibly fast and efficient.",
      name: "Mike L.",
      imageUrl: "https://randomuser.me/api/portraits/men/23.jpg",
      job: "Tech Professional",
    },
    {
      quote:
        "I need my phone for work, but was struggling with endless scrolling. LessScreen lets me set different limits for work apps vs social apps. It's the perfect balance of productivity and wellbeing.",
      name: "Ava P.",
      imageUrl: "https://randomuser.me/api/portraits/women/13.jpg",
      job: "Digital Artist",
    },
    {
      quote:
        "The simple, clear interface makes it easy to find what I need. The reminders are gentle but effective, and I'm spending more time in my garden instead of on my phone. It's exactly what I needed.",
      name: "James W.",
      imageUrl: "https://randomuser.me/api/portraits/men/13.jpg",
      job: "Retired Teacher",
    },
  ];

  return (
    <main className=" mx-auto tracking-tight">
      <div
        className="max-w-4xl w-[95%] mx-auto text-center md:mt-16 mt-12  lg:mt-20 px-4"
        id="hero"
      >
        <h1 className="md:text-4xl text-3xl lg:text-6xl font-bold mb-6 sub-heading">
          The Ultimate App to Eliminate <br /> Phone Distractions
        </h1>
        <p className="  lg:text-xl md:mb-8 mb-4 max-w-96 mx-auto md:max-w-max">
          Join 50,000+ users on a journey to mindful technology use and improved
          wellbeing
        </p>
        <div className="w-fit  mx-auto mb-8 lg:mb-0 ">
          <DownloadButtonTwo />
        </div>
      </div>
      <div className="relative -z-20">
        <img src="/hero-image.png" className="  w-full h-full mb-14" alt="" />
      </div>
      <div className="text-center max-w-[95%] mx-auto" id="quit">
        <p className="font-bold text-2xl lg:text-3xl mb-3 sub-heading">
          Finally Focus.
        </p>
        <p className="max-w-lg lg:text-lg mx-auto opacity-80">
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
        <div className="py-4 md:p-6 border-[#78818d] features-card md:border-r-[0.5px] border-b">
          <Home className="w-6 h-6 text-[#78818d]" strokeWidth={1.3} />
          <h3 className="text-lg font-bold text-white my-3 sub-heading">
            Minimalist Homescreen
          </h3>
          <p className=" text-sm leading-relaxed opacity-80">
            A clutter-free, search-focused interface reduces cognitive load by
            up to 20%, helping your brain stay focused and calm. Research shows
            minimal interfaces significantly decrease unconscious phone checking
            behavior.
          </p>
        </div>

        <div className="py-4 md:p-6 border-[#78818d] features-card lg:border-r-[0.5px] border-b">
          <AlarmClock className="w-6 h-6 text-[#78818d]" strokeWidth={1.3} />
          <h3 className="text-lg font-bold text-white my-3 sub-heading">
            Intelligent Usage Limits
          </h3>
          <p className=" text-sm leading-relaxed opacity-80">
            Leveraging behavioral psychology, our smart limits adapt to your
            patterns. Studies show implementing micro-boundaries reduces
            excessive screen time by 30% within 2 weeks, while maintaining
            productive usage.
          </p>
        </div>

        <div className="py-4 md:p-6 border-[#78818d] features-card border-b md:border-r lg:border-r-0">
          <Pause className="w-6 h-6 text-[#78818d]" strokeWidth={1.3} />
          <h3 className="text-lg font-bold text-white my-3 sub-heading">
            Mindful Breaks
          </h3>
          <p className=" text-sm leading-relaxed opacity-80">
            Real-time monitoring triggers scientifically-timed breaks during
            extended sessions. Research indicates 5-minute breaks every 30
            minutes of continuous use significantly reduce digital fatigue and
            improve attention span.
          </p>
        </div>

        <div className="py-4 md:p-6 border-b  border-[#78818d] features-card lg:border-r md:border-b lg:border-b-0">
          <Palette className="w-6 h-6 text-[#78818d]" strokeWidth={1.3} />
          <h3 className="text-lg font-bold text-white my-3 sub-heading">
            Grayscale Mode
          </h3>
          <p className=" text-sm leading-relaxed opacity-80">
            Automatically removes colorful distractions by enabling grayscale
            during high-risk periods. Studies show grayscale interfaces reduce
            impulsive app checking by 10% and decrease overall screen time by
            37%.
          </p>
        </div>

        <div className="py-4 md:p-6 border-[#78818d] features-card md:border-r border-b md:border-b-0 lg:border-b-0">
          <Moon className="w-6 h-6 text-[#78818d]" strokeWidth={1.3} />
          <h3 className="text-lg font-bold text-white my-3 sub-heading">
            Night Guardian
          </h3>
          <p className=" text-sm leading-relaxed opacity-80">
            Enforces healthy sleep hygiene by limiting late-night usage. Based
            on circadian rhythm research, this feature helps maintain natural
            melatonin production and improve sleep quality.
          </p>
        </div>

        <div className="py-4 md:p-6 border-[#78818d] features-card">
          <Target className="w-6 h-6 text-[#78818d]" strokeWidth={1.3} />
          <h3 className="text-lg font-bold text-white my-3 sub-heading">
            Pre-Launch Awareness
          </h3>
          <p className=" text-sm leading-relaxed opacity-80">
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
            <span className="text-white">Our users vouch for us, </span>
            <span className="text-gray-500">and there's a good reason.</span>
          </h2>
          <p className="opacity-80 lg:text-xl mb-12 max-w-3xl">
            Peoples lives have been changed forever with the use of our app,
            leading to unspeakable amounts of gratitude.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mb-24 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              job={testimonial.job}
              name={testimonial.name}
              imageUrl={testimonial.imageUrl}
            />
          ))}
        </div>
      </div>

      {/* <div
        className="grid md:grid-cols-2 w-[88%] mb-32 mt-10 max-w-6xl mx-auto"
        id="awkward"
      >
        <div className="max-w-lg">
          <img src="/img-2.avif" className="w-full object-cover" alt="" />
        </div>
        <div className="h-full flex flex-col justify-center max-w-lg mt-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 max-w-xl">
            <span className="text-white">It's an awkward topic,</span>
            <span className="text-gray-500"> but not one to ignore.</span>
          </h2>
          <DownloadButtonTwo />
        </div>
      </div> */}
      {/* <div className="max-w-xl mx-auto mt-24 mb-12 md:mb-20 w-[90%]" id="faq">
        <h2 className="text-2xl md:text-4xl font-bold font-dm_sans text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-center mt-3 mb-10 md:text-xl opacity-80">
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
      </div> */}
      <div
        id="download-now"
        className="max-w-6xl w-[95%] mx-auto md:mb-24 mb-12"
      >
        <div className="bg-[#242831] text-white min-h-96 rounded-2xl text-center p-4 py-12">
          <h2 className="text-2xl md:text-4xl font-bold font-dm_sans text-center mt-10">
            Ready to take control of your screen time?
          </h2>
          <p className=" text-center mx-auto mt-3 mb-5 md:mb-10 md:text-xl  max-w-xl">
            Start your journey to mindful phone usage today and discover a more
            balanced digital life. Thousands of users are already experiencing
            the benefits of better screen habits with LessScreen.
          </p>
          {/* <ul>
            <li>Less scrolling, more living</li>
            <li>Stay productive without going online</li>
            <li>Keep what matters, limit what doesn't</li>
          </ul> */}
          {/* <p>Download LessScreen today and transform your relationship with your phone</p> */}
          <div className="w-fit mx-auto">
            <DownloadButtonOne />
          </div>
        </div>
      </div>

    </main>
  );
};

const TestimonialCard = ({
  quote,
  name,
  job,
  imageUrl,
}: {
  quote: string;
  name: string;
  job: string;
  imageUrl: string;
}) => (
  <div className="bg-[#242831] testimonial-card rounded-lg lg:p-8 md:p-6 p-4 flex flex-col h-full backdrop-filter backdrop-blur-lg border border-[#161617]  w-fit shadow-white/20">
    <blockquote className=" md:text-lg leading-relaxed mb-8 flex-grow">
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
        <div className="text-gray-500 text-sm">{job}</div>
      </div>
    </div>
  </div>
);
