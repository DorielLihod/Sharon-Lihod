import { useTranslation } from "react-i18next";
import "./FlagLanguage.css";

import israelFlag from "../../../public/icons/israelFlag.png";
import usaFlag from "../../../public/icons/usaFlag.png";

const FlagLanguage = () => {
  const { i18n } = useTranslation("global");

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);

    // const headerF = document.getElementById("p");

    if (lang === "en") {
      document.documentElement.style.setProperty("direction", "ltr");
    } else {
      document.documentElement.style.setProperty("direction", "rtl");
    }
  };

  return (
    <div className="flag-language">
      {i18n.language === "en" && (
        <img
          src={israelFlag}
          alt="Hebrew"
          width="45"
          height="45"
          onClick={() => handleChangeLanguage("he")}
        />
      )}
      {i18n.language === "he" && (
        <img
          src={usaFlag}
          alt="English"
          width="45"
          height="45"
          onClick={() => handleChangeLanguage("en")}
        />
      )}
    </div>
  );
};

export default FlagLanguage;
