import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_CONFIG, ALL_SKILLS } from '../../data/skillsConfig';

const Skills = ({ hoveredSkill, onSkillHover }) => {
  const handleSkillClick = (skillKey) => {
    // Toggle skill: if already selected, deselect it; otherwise select it
    if (hoveredSkill === skillKey) {
      onSkillHover(null);
    } else {
      onSkillHover(skillKey);
    }
  };

  return (
    <div>
      {/* Clear filter button - shown when a skill is selected */}
      {hoveredSkill && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="text-sm md:text-base text-white/60 font-mono">
            Filtering by: <span className="text-main font-semibold">{SKILLS_CONFIG[hoveredSkill]?.name}</span>
          </span>
          <button
            onClick={() => onSkillHover(null)}
            className="px-3 py-1 text-xs md:text-sm font-mono text-white/80 bg-white/5 hover:bg-white/10
                     border border-white/10 hover:border-main/40 rounded-lg transition-all duration-200
                     hover:text-main"
          >
            Clear Filter
          </button>
        </motion.div>
      )}

      {/* Skills grid */}
      <section className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-3 md:gap-6">
        {ALL_SKILLS.map(skillKey => {
          const skill = SKILLS_CONFIG[skillKey];
          if (!skill) return null;

          const Icon = skill.icon;
          const isSelected = hoveredSkill === skillKey;

          return (
            <motion.div
              key={skillKey}
              className="flex flex-col items-center gap-1 md:gap-2 cursor-pointer"
              onClick={() => handleSkillClick(skillKey)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`
                transition-all duration-300
                ${isSelected
                  ? 'text-main brightness-150 drop-shadow-[0_0_12px_rgba(148,174,247,0.8)]'
                  : 'text-main/80'
                }
              `}>
                <Icon size={28} className="md:w-9 md:h-9 lg:w-10 lg:h-10" />
              </div>
              <span className={`
                text-[0.65rem] md:text-xs lg:text-sm font-mono text-center transition-all duration-300 leading-tight
                ${isSelected ? 'text-main font-semibold' : 'text-white/70'}
              `}>
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </section>

      {/* Helper text */}
      {!hoveredSkill && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-center text-xs md:text-sm text-white/40 font-mono"
        >
          Click on a skill to filter internships & projects below
        </motion.p>
      )}
    </div>
  );
};

export default Skills;
