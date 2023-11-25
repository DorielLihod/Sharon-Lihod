import { useEffect } from "react";
import "./About.css";
import { useTranslation } from "react-i18next";

import sharonImage from "../../../public/imgSharon.jpeg";
import { Carousel } from "../Carousel/Carousel";

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
      <div className="container">
        <div className="row row1">
          <div className="col-sm divImage">
            <img
              src={sharonImage}
              className=" mx-auto d-block sharonImage"
              alt="Sharon Lihod"
              title="Sharon Lihod"
            />
          </div>
          <div className="col-sm textAbout-p1">
            <div className="text-p1">
              <p id="p-id">{t("about-page.p1")}</p>
              <p className="p-id">{t("about-page.p2")}</p>
            </div>
          </div>
        </div>
      </div>

      {/*line 2 */}
      <div className="container">
        <div className="row row1 div-gallery">
          <div className="col-sm textAbout-p1">
            <div className="text-p1">
              <p>{t("about-page.p3")}</p>
              <p>
                {t("about-page.p4")}
                <br />
                {t("about-page.p5")}
              </p>
              <p>{t("about-page.p6")}</p>
            </div>
          </div>
          <div className="col-sm divImage">
            <Carousel />
          </div>
        </div>
      </div>

      {/*line 3 */}
      <div className="container">
        <div className="row row1">
          <div className="col-sm divImage">
            <img
              src={sharonImage}
              className=" mx-auto d-block sharonImage"
              alt="Sharon Lihod"
              title="Sharon Lihod"
            />
          </div>
          <div className="col-sm textAbout-p1">
            <div className="text-p1">
              <p>{t("about-page.p7")}</p>
              <p>{t("about-page.p8")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Div of image*/}
        <div className="col-md-6 "></div>
        <div className="col-md-6 textAbout"></div>
      </div>
    </div>
  );
};

export default About;
