import TimeLine from "../../components/Experience/TimeLine";
import "../../components/Experience/TimeLine.css";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="sectionDetails">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
      >
        <TimeLine />
      </motion.div>
    </div>
  );
};

export default Experience;
