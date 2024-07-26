import PropTypes from "prop-types";
let id = 0;
function Card(props) {
  const item = props.searchItem;
  if(item){
    return (
    <>
      <button
        className="card"
        onClick={() => {
          props.handleState(false);
          id = item.imdbID;
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
}
Card.propTypes = {
  searchItem: PropTypes.object.isRequired,
  Switch: PropTypes.func,
  handleState: PropTypes.func.isRequired
};
export default Card;
export {id as id };
