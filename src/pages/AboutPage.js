import React from 'react';
import CompanyLayout from '../components/CompanyLayout/CompanyLayout';

import { motion } from 'framer-motion';

import { defaultPageFadeInVariants } from '../motionUtils';

const AboutPage = () => {
  return (
    <motion.div
      className="max-w-5xl w-full px-4 md:px-6 lg:px-8 mx-auto pt-24 pb-12"
      variants={defaultPageFadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="space-y-8">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-1">
            <img
              className="w-full rounded-tl-[30%] mb-6"
              src="/portrait.jpg"
              alt="That's Me"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-2 space-y-4 leading-9 text-base">
            <h5 className="text-xl font-monoBold text-white">Good day! It's a pleasure to meet you.</h5>
            <p>
              I'm Will Kung, a Computer Science student at The University of
              Texas at Austin, currently interning as a Software Engineer at
              Done Desk and Resia.
            </p>
            <p>
              From a young age, I’ve been captivated by the mechanics of
              programming and the transformative potential of technology. This
              passion began with creative ideas like, "What if you could see
              daily information through a smart mirror?" Sure enough, I built
              one. Now, my focus has evolved to building things that make a real
              impact on the world.
            </p>
            <p>
              Beyond academics, my passion extends to powerlifting, beatboxing,
              playing piano, and rock climbing, where I continue to challenge myself
              through rhythm, creativity, and problem-solving.
            </p>
          </div>
        </div>
        <div className="space-y-4 leading-9 text-base">
          <p>
            Throughout my career, I have embraced every opportunity to expand my
            skillset and apply my knowledge in practical settings, such as my
            impactful internships at KDANMOBILE in Taipei and ADONIT. These
            experiences have not only sharpened my technical abilities but have
            also enriched my approach to user-centric design and real-time data
            interaction, ensuring that every line of code I write enhances user
            engagement and operational efficiency.
          </p>
          <p>
            As I navigate through my academic and professional journey, I remain
            committed to leveraging my skills in both structured and creative
            ways. Whether it's optimizing software functionalities or exploring
            the robustness of machine learning algorithms, I aim to bridge the
            gap between user needs and technological advancements. Through this
            portfolio, I invite you to explore my projects and the distinct
            blend of passion I bring to the field of computer
            science.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold">WHAT I'M CURRENTLY UP TO</h2>
        </div>
        <CompanyLayout />
      </div>

      <div>
        <div className="snowflake left-[10%]">❅</div>
        <div className="snowflake left-[20%]">❄</div>
        <div className="snowflake left-[30%]">❅</div>
        <div className="snowflake left-[40%]">❄</div>
        <div className="snowflake left-[50%]">❅</div>
        <div className="snowflake left-[60%]">❄</div>
        <div className="snowflake left-[70%]">❅</div>
        <div className="snowflake left-[80%]">❅</div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
