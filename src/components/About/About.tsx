import { useEffect } from "react";
import "./About.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    if (i18n.language === "en") {
      document.documentElement.style.setProperty("text-align", "left");
    } else {
      document.documentElement.style.setProperty("text-align", "right");
    }
  }, [i18n.language]);

  return (
    <div className="MainAbout">
      <div className="row">
        {/* Div of image*/}
        <div className="col-md-6 ">
          <div className="card cardAbout">
            <div className="card-body">
              <div className="divImage">
                <img
                  src="public\imgSharon.jpeg"
                  className=" mx-auto d-block sharonImage"
                  alt="Sharon Lihod"
                  title="Sharon Lihod"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 textAbout">
          <p id="p-id">{t("about-page.p1")}</p>
          <p className="p-id">{t("about-page.p2")}</p>
          <p>{t("about-page.p3")}</p>
          <p>
            {t("about-page.p4")}
            <br />
            {t("about-page.p5")}
          </p>
          <p>{t("about-page.p6")}</p>
          <p>{t("about-page.p7")}</p>
          <p>{t("about-page.p8")}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
