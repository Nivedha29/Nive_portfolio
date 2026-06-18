import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "Morago Translator",
    description:
      "Mobile translation application with onboarding, authentication and language translation features.",
    image: "/morago.png",
    github: "https://github.com/Nivedha29/morago_frontend_dec3",
    live: "https://morago-frontend-dec3-a9es.vercel.app/",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    title: "Movie Application",
    description:
      "Movie discovery application displaying ratings, genres and detailed movie information.",
    image: "/movie-app.png",
    github: "https://github.com/Nivedha29/movie-application",
    live: "https://movie-application-delta.vercel.app/",
    tech: ["TypeScript", "API", "CSS"],
  },
  {
    title: "Todo Application",
    description:
      "Task management application with create, edit, delete and completion tracking.",
    image: "/todo-app.png",
    github: "https://github.com/Nivedha29/todo-app-",
    live: "https://react-project1-blue.vercel.app/",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Blog Authentication",
    description:
      "Full blog platform with user authentication, article publishing and tag management.",
    image: "/blog-auth.png",
    github: "https://github.com/Nivedha29/Blog-Authentication",
    live: "https://blog-authentication.vercel.app/",
    tech: ["React", "Authentication", "CSS"],
  },
  {
    title: "Adding Functionality",
    description:
      "Interactive blog application with dynamic article rendering and user interaction features.",
    image: "/adding-functionality.png",
    github: "https://github.com/Nivedha29/Adding-Functionality",
    live: "https://adding-functionality-8b7p.vercel.app/",
    tech: ["JavaScript", "DOM", "CSS"],
  },
  {
    title: "Layout Design",
    description:
      "Responsive registration page demonstrating modern UI layout implementation.",
    image: "/layout-design.png",
    github: "https://github.com/Nivedha29/Layout-Design-web-core-4.7",
    live: "https://layout-design-web-core-4-7.vercel.app/",
    tech: ["HTML", "CSS", "Responsive Design"],
  },
];

export default function GitHubProjects() {
  return (
    <section className="projects-section">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Major Projects
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        A selection of my frontend development projects
      </motion.p>

      <Swiper
  modules={[Navigation, Pagination]}
  navigation={true}
  pagination={{ clickable: true }}
  spaceBetween={30}
  slidesPerView={3}
  breakpoints={{
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  }}
>
  {projects.map((project, index) => (
    <SwiperSlide key={project.title}>
      <motion.div
        className="project-card"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
        }}
        whileHover={{ y: -10 }}
      >
        <div className="project-image-box">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-content">
          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <div className="tech-list">
            {project.tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="project-links">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </SwiperSlide>
  ))}
</Swiper>
    </section>
  );
}