import Services from "../../components/Services/Services";
import "../../components/Services/Services.css";
import { motion } from "framer-motion";

const OurServices = () => {
  return (
    <div className="sectionDetails">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
      >
        <Services />
      </motion.div>
    </div>
  );
};

export default OurServices;
