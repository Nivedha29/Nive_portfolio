import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <p className="section-subtitle">Let’s build something beautiful together</p>

      <div className="contact-wrapper">
        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </motion.form>

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <div className="contact-info">

  <div className="contact-item">
    <MdEmail className="contact-icon" />
    <div>
      <h3>Email</h3>
      <a href="mailto:nilanivetha29@gmail.com" target="_blank" rel="noreferrer">
      nilanivetha29@gmail.com
    </a>
    </div>
  </div>

  <div className="contact-item">
    <FaGithub className="contact-icon" />
    <div>
      <h3>GitHub</h3>
      <a href="https://github.com/Nivedha29" target="_blank">
      github.com/Nivedha29
    </a>
    </div>
  </div>

  <div className="contact-item">
    <FaLinkedinIn className="contact-icon" />
    <div>
      <h3>LinkedIn</h3>
      <a href="https://www.linkedin.com/in/nivedha-kulothungan-2630bb216/"
       target="_blank">
      linkedin.com/in/nivedha-kulothungan-2630bb216
    </a>
    </div>
  </div>

</div>
        </motion.div>
      </div>
    </section>
  );
}