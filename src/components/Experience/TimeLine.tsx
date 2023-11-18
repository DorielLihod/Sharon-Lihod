import Card from "../Card/Card";
import "./TimeLine.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import imgSimple from "../../../public/experience/internalTest.jpg";
import isoImage from "../../../public/experience/iso9011-2015.png";

const TimeLine = () => {
  const [t] = useTranslation("global");

  return (
    <div className="MainExperience">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
      >
        <div className="textEperience">
          <p>{t("experience.p1")}</p>
          <p>{t("experience.p2")}</p>
          <p>{t("experience.p3")}</p>
          <p>{t("experience.p4")}</p>
          <p>{t("experience.p5")}</p>
          <p>{t("experience.p6")}</p>
        </div>
      </motion.div>

      <div className="container">
        {/*Row-One*/}

        <div className="row">
          <div className="col-sm">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
            >
              <Card
                title={t("cards.c1.header")}
                urlImage={isoImage}
                text={t("cards.c1.content")}
              />
            </motion.div>
          </div>

          <div className="col-sm">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
            >
              <Card
                title={t("cards.c2.header")}
                urlImage={imgSimple}
                text={t("cards.c2.content")}
              />
            </motion.div>
          </div>

          <div className="col-sm">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
            >
              <Card
                title={t("cards.c3.header")}
                urlImage={imgSimple}
                text={t("cards.c3.content")}
              />
            </motion.div>
          </div>

          <div className="col-sm">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
            >
              <Card
                title={t("cards.c4.header")}
                urlImage={imgSimple}
                text={t("cards.c4.content")}
              />
            </motion.div>
          </div>
        </div>

        {/*Row-Two*/}
        <div className="row">
          <div className="col-sm">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
            >
              <Card
                title={t("cards.c5.header")}
                urlImage={imgSimple}
                text={t("cards.c5.content")}
              />
            </motion.div>
          </div>
          <div className="col-sm">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
            >
              <Card
                title={t("cards.c6.header")}
                urlImage={imgSimple}
                text={t("cards.c6.content")}
              />
            </motion.div>
          </div>
          <div className="col-sm">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
            >
              <Card
                title={t("cards.c7.header")}
                urlImage={imgSimple}
                text={t("cards.c7.content")}
              />
            </motion.div>
          </div>
          <div className="col-sm">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
            >
              <Card
                title={t("cards.c8.header")}
                urlImage={imgSimple}
                text={t("cards.c8.content")}
              />
            </motion.div>
          </div>
          <div className="col-sm">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
            >
              <Card
                title={t("cards.c9.header")}
                urlImage={imgSimple}
                text={t("cards.c9.content")}
              />
            </motion.div>
          </div>
        </div>

        {/*Row-Three*/}
        <div className="row">
          <div className="col-sm">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
            >
              <Card
                title={t("cards.c10.header")}
                urlImage={imgSimple}
                text={t("cards.c10.content")}
              />
            </motion.div>
          </div>
          <div className="col-sm">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
            >
              <Card
                title={t("cards.c11.header")}
                urlImage={imgSimple}
                text={t("cards.c11.content")}
              />
            </motion.div>
          </div>
          <div className="col-sm">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
            >
              <Card
                title={t("cards.c12.header")}
                urlImage={imgSimple}
                text={t("cards.c12.content")}
              />
            </motion.div>
          </div>
          <div className="col-sm">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
            >
              <Card
                title={t("cards.c13.header")}
                urlImage={imgSimple}
                text={t("cards.c13.content")}
              />
            </motion.div>
          </div>
          <div className="col-sm">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
            >
              <Card
                title={t("cards.c14.header")}
                urlImage={imgSimple}
                text={t("cards.c14.content")}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
