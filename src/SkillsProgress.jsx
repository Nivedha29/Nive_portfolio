import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 82 },
  { name: "Vite", level: 80 },
  { name: "Git & GitHub", level: 95 },
  { name: "Tailwind", level: 88 },
  { name: "Node.js", level: 90 },
  { name: "Bootstrap", level: 75 },
  { name: "Vue.js", level: 75 },
  { name: "Spring Boot", level: 45 },
  { name: "Gulp & Webpack", level: 65 },
  { name: "MySQL", level: 75 },
  { name: "UI/UX Design", level: 75 },
  { name: "Typescript", level: 80},
];

export default function SkillsProgress() {
  return (
    <section className="skills-progress-section">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technology & Capabilities
      </motion.h2>

      <p className="section-subtitle">Technologies I use to build modern websites</p>

      <div className="progress-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="progress-card"
            key={skill.name}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="progress-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.08 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}