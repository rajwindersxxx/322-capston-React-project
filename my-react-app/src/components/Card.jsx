function Card(props) {
  const item = props.serachItem;
  return (
    <>
      <button className="card">
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
export default Card;
