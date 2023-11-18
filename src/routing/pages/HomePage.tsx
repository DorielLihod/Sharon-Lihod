import MainImage from "../../components/MainImage/MainImage";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
      >
        <MainImage />
      </motion.div>
    </div>
  );
};

export default HomePage;
