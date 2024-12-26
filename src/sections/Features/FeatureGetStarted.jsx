import React from "react";
import { Link } from "react-router-dom";
import { beginner_poses } from "../../constants";
import { motion } from "framer-motion";
import { FaArrowLeft } from 'react-icons/fa';

const FeatureGetStarted = () => {

  return (
    <div className="container mx-auto px-4 py-5 max-[1360px]:px-24 max-sm:pr-4 max-sm:pl-10">
      <Link to="/" className="mt-10 inline-block">
        <button className="fixed left-3 max-sm:left-2 p-3 px-4 bg-s2 text-white rounded-xl max-[1360px]:rounded-full shadow-md hover:bg-s3 transition-all duration-500">
          <FaArrowLeft/>
        </button>
      </Link>
      <div className="flex items-start mb-10 max-[1200px]:justify-center">
        <img
          src="/images/feature-1.png"
          alt="Find Your Inner Peace"
          className="size-20 object-contain mb-6"
        />
      </div>

      <div className="flex mb-12">
        <div className="px-6">
          <p className="font-bold leading-[16px] tracking-[0.15em] body-1 mb-8 max-w-[800px] max-sm:h6">
            Imagine a moment where your body feels stronger, your mind is
            clearer, and stress fades into the background.
          </p>
          <p className="caption mb-5 max-md:mb-6 text-center">
            That moment starts here.
          </p>
          <p className="font-bold leading-[16px] tracking-[0.12em] body-1 mb-8 max-w-[750px] max-sm:h6" >
            Create enough space to stretch, use a non-slip yoga mat or a soft
            surface, wear comfortable and breathable clothing, keep water nearby
            and approach your practice with an open, kind mindset as you begin
            your journey.
          </p>
        </div>
        <div>
          <img className="size-330 max-[950px]:hidden" src="/images/feature-gif.gif" loading="lazy" alt="gif" />
        </div>
      </div>

      <div className="container">
        <iframe
          className="faq-glow_before rounded-20"
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/v7AYKMP6rOE"
          title="Yoga For Complete Beginners"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="mb-12">
        <ul className="my-22 text-center pl-5 body-1">
          <li className="mb-4">
            <strong>An open mind:</strong> Be kind to yourself and allow your
            body and mind to adapt at their own pace.
          </li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="h3 mb-6 text-p4 max-sm:h5">Beginner-Friendly Poses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {beginner_poses.map((pose, i) => (
            <div key={pose.id} className="flex flex-col items-start">
              <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1}} viewport={{once: true, amount: 0.15}}>
                <img
                  src={pose.imgSrc}
                  alt={pose.alt}
                  className="w-full rounded-lg mb-4"
                  loading="lazy"
                />
                <h3 className="h4 text-p3 mb-2 max-sm:h6">{pose.title}</h3>
                <p className="body-2 max-sm:body-3">{pose.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="h3 mb-6 text-p4 max-sm:h5">Tips for Staying Consistent</h2>
        <ul className="list-disc pl-5 body-1 max-sm:body-3">
          <li className="mb-4">
            Set a schedule and stick to it, even if it's just 10 minutes a day.
          </li>
          <li className="mb-4">
            Track your progress to see how far you've come, both physically and
            mentally.
          </li>
          <li className="mb-4">
            Join a class or practice with a friend to stay motivated and
            accountable.
          </li>
          <li className="mb-4">
            Remember that yoga is a journey, not a destination. Be patient with
            yourself.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeatureGetStarted;
