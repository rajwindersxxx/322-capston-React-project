import PropTypes from "prop-types";
import ViewDetails from "./ViewDetails";
function Card(props) {
  const item = props.serachItem;
  return (
    <>
      <button
        className="card"
        onClick={() => {
          ViewDetails(item.imdbID);
          props.handleState(true);
        }}
      >
        <div className="poster">
          <img src={item.Poster} />
        </div>
        <div className="poster-details">
          <h2>{item.Title}</h2>
          <p>Year: {item.Year}</p>
          <p>Type: {item.Type}</p>
        </div>
      </button>
    </>
  );
}
Card.propTypes = {
  serachItem: PropTypes.object.isRequired,
  ViewDetails: PropTypes.func,
  Switch: PropTypes.func,
  handleState: PropTypes.func.isRequired
};
export default Card;
