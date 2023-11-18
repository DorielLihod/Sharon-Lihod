import ContactComponent from "../../components/Contact/ContactComponent";
import "../../components/Contact/ContactComponent.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="sectionDetails">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
      >
        <ContactComponent />
      </motion.div>
    </div>
  );
};

export default Contact;
