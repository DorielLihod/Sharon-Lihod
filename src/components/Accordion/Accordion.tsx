import ListGroup from "../ListGroup/ListGroup";
import "./Accordion.css";
import { useTranslation } from "react-i18next";

const Accordion = () => {
  const [t] = useTranslation("global");

  const headers = [
    t("our-services.option1.header"),
    t("our-services.option2.header"),
    t("our-services.option3.header"),
    t("our-services.option4.header"),
    t("our-services.option5.header"),
  ];

  const iso = [
    t("our-services.option1.line1"),
    t("our-services.option1.line2"),
    t("our-services.option1.line3"),
  ];

  const regulations = [
    t("our-services.option2.line1"),
    t("our-services.option2.line2"),
    t("our-services.option2.line3"),
    t("our-services.option2.line4"),
    t("our-services.option2.line5"),
    t("our-services.option2.line6"),
  ];

  const qualityOp = [
    t("our-services.option3.line1"),
    t("our-services.option3.line2"),
    t("our-services.option3.line3"),
    t("our-services.option3.line4"),
    t("our-services.option3.line5"),
    t("our-services.option3.line6"),
    t("our-services.option3.line7"),
  ];

  const QualityMan = [
    t("our-services.option4.line1"),
    t("our-services.option4.line2"),
    t("our-services.option4.line3"),
    t("our-services.option4.line4"),
  ];

  const proTraining = [
    t("our-services.option5.line1"),
    t("our-services.option5.line2"),
    t("our-services.option5.line3"),
  ];

  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            {headers[0]}
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <ListGroup list={iso} />
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            {headers[1]}
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <ListGroup list={regulations} />
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            {headers[2]}
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <ListGroup list={qualityOp} />
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingFour">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            {headers[3]}
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFour"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <ListGroup list={QualityMan} />
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingFive">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFive"
            aria-expanded="false"
            aria-controls="flush-collapseFive"
          >
            {headers[4]}
          </button>
        </h2>
        <div
          id="flush-collapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFive"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <ListGroup list={proTraining} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
