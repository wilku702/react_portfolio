import React from 'react';
import './styles/AboutPage.css';
import CompanyLayout from '../components/CompanyLayout/CompanyLayout';

import { motion } from 'framer-motion';

import { defaultPageFadeInVariants } from '../motionUtils';

const AboutPage = () => {
  return (
    <motion.div
      className="about-page"
      variants={defaultPageFadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit">
      <div className="about-top-content">
        <div className="about-top-row">
          <div className="about-portrait">
            <img id="colchuck" src="/portrait.jpg" alt="Thats Me" />
          </div>
          <div className="about-top-text">
            <h5>Good day! It's a pleasure to meet you.</h5>
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
              Beyond academics, my passion extends to powerlifting and
              beatboxing, where discipline, rhythm, and precision play crucial
              roles.
            </p>
          </div>
        </div>
        <div className="about-bottom">
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
            blend of passion and precision I bring to the field of computer
            science.
          </p>
        </div>
        <br />
        <div className="center_box">
          <h2>WHAT I'M CURRENTLY UP TO</h2>
        </div>
        <CompanyLayout />
      </div>

      <div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❄</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❄</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❄</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
