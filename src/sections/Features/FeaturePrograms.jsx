import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { advancedPrograms, advancedYogaPoses } from "../../constants";

const FeaturePrograms = () => {
  return (
    <div className="container mx-auto px-4 py-5 max-[1360px]:px-24 max-sm:pr-4 max-sm:pl-10">
      <Link to="/" className="mt-10 inline-block">
        <button className="fixed left-3 max-sm:left-2 p-3 px-4 bg-s2 text-white rounded-xl max-[1360px]:rounded-full shadow-md hover:bg-s3 transition-all duration-500">
          <FaArrowLeft />
        </button>
      </Link>

      <div className="flex items-start justify-center mb-10 max-[1200px]:justify-center">
        <img
          src="/images/feature-2.png"
          alt="Unlock New Potential"
          className="size-20 object-contain mb-6"
        />
      </div>

      <div className="mb-12">
        <h1 className="h2 text-center text-p4 max-sm:h4">
          Unlock New Potential
        </h1>
        <p className="text-center body-1 max-w-[800px] mx-auto mt-6 max-sm:body-3">
          Dive into advanced classes designed to push your boundaries. Whether
          you're perfecting a challenging pose or exploring deeper mindfulness
          practices, our curated programs and expert instructors will help you
          reach your full potential.
        </p>
      </div>

      {/* Секция с видео */}
      <div className="container mb-12">
        <h2 className="h3 mb-6 text-p4 max-sm:h5">
          Explore Advanced Yoga Programs
        </h2>
        <p className="body-1 mb-8 max-w-[800px] mx-auto">
          Discover unique benefits and guaranteed outcomes with each of our
          advanced yoga programs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {advancedPrograms.map((program) => (
            <div
              key={program.id}
              className="flex flex-col justify-between h-full"
            >
              <div>
                <iframe
                  className="rounded-20 mb-4 w-full"
                  width="100%"
                  height="250"
                  src={program.videoUrl}
                  title={program.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                <h3 className="h4 mb-2 text-p4">{program.title}</h3>
                <p className="body-2 mb-4">{program.description}</p>
              </div>
              <div className="mt-8">
                <p className="uppercase text-xl">
                  <strong>Guaranteed Results:</strong>
                </p>
                <p className="font-poppins text-p1">
                  {program.guaranteedResults}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Продвинутые позы */}
      <div className="relative z-2 my-40">
        <h2 className="h3 mb-6 text-p4 max-sm:h5">Advanced Yoga Poses</h2>
        <p className="body-2 max-w-[750px] mb-8">
          Challenge yourself with poses that require focus, strength, and
          flexibility. Mastery of these asanas not only enhances your physical
          abilities but also brings deeper awareness and control of your body
          and mind.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {advancedYogaPoses.map((pose, i) => (
            <div key={pose.id} className="flex flex-col items-start">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.15 }}
              >
                <img
                  src={pose.imgSrc}
                  alt={pose.alt}
                  className="w-full max-h-72 rounded-lg mb-4"
                  loading="lazy"
                />
                <h3 className="h4 text-p3 mb-2 max-sm:h6">{pose.title}</h3>
                <p className="body-2 max-sm:body-3">{pose.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Интерактивная таблица */}
      <div className="mb-12">
        <h2 className="h3 mb-6 text-p4 max-sm:h5">Choose your focus</h2>
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-s2">
              <th className="p-4 text-left">Program</th>
              <th className="p-4 text-left">Focus</th>
              <th className="p-4 text-left">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border-t">Strength and Flexibility</td>
              <td className="p-4 border-t">Advanced poses</td>
              <td className="p-4 border-t">4 weeks</td>
            </tr>
            <tr>
              <td className="p-4 border-t">Mindfulness and Relaxation</td>
              <td className="p-4 border-t">Meditation, breathing</td>
              <td className="p-4 border-t">6 weeks</td>
            </tr>
            <tr>
              <td className="p-4 border-t">One-on-One Training</td>
              <td className="p-4 border-t">Personalized guidance</td>
              <td className="p-4 border-t">Custom</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Полезные советы */}
      <div className="mb-12">
        <h2 className="h3 mb-6 text-p4 max-sm:h5">
          Expert tips for advanced practitioners
        </h2>
        <ul className="list-disc pl-5 body-1 max-sm:body-3">
          <li className="mb-4">
            Warm up thoroughly before attempting advanced poses to prevent
            injuries.
          </li>
          <li className="mb-4">
            Focus on your breath; it’s the key to balance and endurance in
            challenging asanas.
          </li>
          <li className="mb-4">
            Practice consistently, but listen to your body. Rest when needed.
          </li>
          <li className="mb-4">
            Work with a qualified instructor to refine your alignment and avoid
            bad habits.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeaturePrograms;
