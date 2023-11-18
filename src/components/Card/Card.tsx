import "./Card.css";

interface Props {
  title: string;
  urlImage: string;
  text: string;
}

const Card = (props: Props) => {
  return (
    <div className="card cardExp">
      <img className="imageCard" src={props.urlImage} />
      <div className="container">
        <h6>
          <b>{props.title}</b>
        </h6>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
