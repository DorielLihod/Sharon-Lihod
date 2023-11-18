import { useEffect } from "react";
import Accordion from "../Accordion/Accordion";
import "./Services.css";
import { useTranslation } from "react-i18next";

const Services = () => {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    if (i18n.language === "en") {
      document.documentElement.style.setProperty("text-align", "left");
    } else {
      document.documentElement.style.setProperty("text-align", "right");
    }
  }, [i18n.language]);

  return (
    <div className="MainServices">
      <div>
        <p className="textAcc">{t("our-services.ourservices")}</p>
      </div>
      <Accordion />
    </div>
  );
};

export default Services;
