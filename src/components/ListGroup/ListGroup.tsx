import "./ListGroup.css";

interface Props {
  list: string[];
}

const ListGroup = (props: Props) => {
  return (
    <ul className="list-group list-group-flush">
      {props.list.map(function (item) {
        return (
          <li key={item} className="list-group-item">
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default ListGroup;
