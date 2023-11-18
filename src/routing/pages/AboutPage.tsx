import About from "../../components/About/About";
import "../../components/About/About.css";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="sectionDetails">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0 }}
      >
        <About />
      </motion.div>
    </div>
  );
};

export default AboutPage;
