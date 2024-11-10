import React from "react";

function About() {
  return (
    <div className="bg-gray-900 text-white w-full min-h-screen p-10 flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
        What is{" "}
        <span className="text-green-500 font-extrabold animate-pulse">Educatsy </span>?
      </h1>

      <div className="text-lg md:text-2xl leading-relaxed text-center space-y-6 border-2 px-50">
        <p>
          Are you ready to take your programming skills to the next level? Look no
          further than <span className="text-green-400 font-bold">Educatsy</span>, the
          premier programming community dedicated to helping new programmers achieve their goals
          and reach their full potential.
        </p>

        <p>
          As the founder and CEO of Educatsy, I know firsthand the challenges that come with
          learning and growing in the programming industry. That&apos;s why I created{" "}
          <span className="text-green-400 font-bold">Educatsy</span> – to provide new programmers with
          the resources and support they need to succeed.
        </p>

        <p>
          Our YouTube channel is a treasure trove of informative videos on everything from programming
          basics to advanced techniques. But that&apos;s just the beginning. Our affordable courses are designed
          to give you the high-quality education you need to succeed in the industry, without breaking the bank.
        </p>

        <p>
          At <span className="text-green-400 font-bold">Educatsy</span>, we believe that price should never be
          a barrier to achieving your dreams. That&apos;s why our courses are priced low – so that anyone,
          regardless of their financial situation, can access the tools and knowledge they need to succeed.
        </p>

        <p>
          But Educatsy is more than just a community – we&apos;re a family. Our supportive community of like-minded
          individuals is here to help you every step of the way, whether you&apos;re just starting out or looking
          to take your skills to the next level.
        </p>

        <p>
          With <span className="text-green-400 font-bold">Educatsy</span> by your side, there&apos;s nothing standing
          between you and your dream job. Our courses and community will provide you with the guidance, support,
          and motivation you need to unleash your full potential and become a skilled programmer.
        </p>

        <p>
          So what are you waiting for? Join the <span className="text-green-400 font-bold">Educatsy</span> family today
          and let&apos;s conquer the programming industry together! With our affordable courses, informative
          videos, and supportive community, the sky&apos;s the limit.
        </p>
      </div>

      {/* Call to action button */}
      <div className="mt-12">
        <button className="bg-green-500 text-white py-3 px-6 rounded-lg text-2xl hover:bg-green-400 transition-all duration-300">
          Join the Educatsy Family Now
        </button>
      </div>
    </div>
  );
}

export default About;
