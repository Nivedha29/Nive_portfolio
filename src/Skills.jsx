import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiWebpack,
  SiMysql,
} from "react-icons/si";

import { MdDesignServices } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


const skills = [
  { name: "HTML5", icon: <FaHtml5 />, className: "html" },
  { name: "CSS3", icon: <FaCss3Alt />, className: "css" },
  { name: "JavaScript", icon: <FaJs />, className: "js" },
  { name: "TypeScript", icon: <SiTypescript />, className: "ts" },
  { name: "React", icon: <FaReact />, className: "react" },
  { name: "Vite", icon: <SiVite />, className: "vite" },
  { name: "Git", icon: <FaGitAlt />, className: "git" },
  { name: "GitHub", icon: <FaGithub />, className: "github" },
  { name: "Bootstrap", icon: <FaBootstrap />, className: "bootstrap" },
  { name: "Tailwind", icon: <SiTailwindcss />, className: "tailwind" },
  { name: "Node.js", icon: <FaNodeJs />, className: "node" },
  { name: "Webpack", icon: <SiWebpack />, className: "webpack" },
  { name: "MySQL", icon: <SiMysql />, className: "mysql" },
  { name: "UI/UX Design", icon: <MdDesignServices />, className: "design" },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <h2>Skills</h2>

      <Swiper
  className="skills-swiper"
  modules={[Autoplay]}
  loop={true}
  speed={3000}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}
  slidesPerView={5}
  spaceBetween={22}
  breakpoints={{
    320: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  }}
>
        {skills.map((skill) => (
          <SwiperSlide key={skill.name}>
            <div className={`skill-card ${skill.className}`}>
              <div className="skill-icon">{skill.icon}</div>
              <span>{skill.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}