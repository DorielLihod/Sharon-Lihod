import { useNavigate } from "react-router-dom";
import "./MainImage.css";
import { useTranslation } from "react-i18next";

const MainImage = () => {
  const navigate = useNavigate();
  const [t] = useTranslation("global");

  const clickButton = () => {
    navigate("/About");
  };

  return (
    <div className="mainImg">
      <img className="imgMain" src="public\imgMain.jpg" />
      {/* Div of content over the image in the middle */}
      <div className="content">
        <h1 className="headerMain">Quality Solutions</h1>
        <p className="p-content">{t("home-page.sentence")}</p>
        <button onClick={clickButton} className="btnMainPage">
          {t("home-page.btn-about")}
        </button>
      </div>
    </div>
  );
};

export default MainImage;
