import propTypes from "prop-types";
import { id } from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import GoBack from "./GoBack";
const api_url = import.meta.env.VITE_API_URL;
const api_key = import.meta.env.VITE_API_KEY;
let isResponse = false;
function ViewDetails(props) {
  const [movieInfo, setMOvieInfo] = useState({});
  useEffect(() => {
    axios
      .get(`${api_url}/?apikey=${api_key}&i=${id}&plot=full`)
      .then((response) => {
        if (response.data.Response) {
          let movieInfo = response.data;
          setMOvieInfo(movieInfo);
        } else {
          return { message: "No Result found" };
        }
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
  }, []);
  isResponse = movieInfo.Response;
  if (isResponse) {
    return (
      <>
        <div className="viewDetails">
          <div className="image">
            <img src={movieInfo.Poster} style={{ height: "400px" }} />
          </div>
          <div className="information">
            <h1 className="text-4xl ">
              {movieInfo.Title} ({movieInfo.Year})
            </h1>
            <p className="text-xl capitalize mt-2">
              <span className="material-symbols-outlined align-bottom">
                genres
              </span>{" "}
              {movieInfo.Genre} , {movieInfo.Language} {movieInfo.Type}
            </p>
            <p className="text-xl">
              <span className="material-symbols-outlined align-bottom">
                release_alert
              </span>{" "}
              {movieInfo.Released} {"by " + movieInfo.Country}
            </p>
            <p className="text-xl text-yellow-300">
              <span className="material-symbols-outlined align-bottom">
                hotel_class
              </span>{" "}
              {movieInfo.imdbRating}
            </p>{" "}
            <p className="text-xl">Director: {movieInfo.Director}</p>
            <p className="text-xl">Writer: {movieInfo.Writer}</p>
            <p className="text-xl"></p>
            <p className="text-xl">IMDB ID: {movieInfo.imdbID}</p>
          </div>
          <div className="col-span-2">
            <div className="pt-4">
              <h1 className="text-3xl" style={{ margin: "0" }}>
                Overview
              </h1>
              <p className="text-xl m-0">{movieInfo.Plot}</p>
            </div>
            <div className="prev-button">
              <GoBack handleState={(value) => props.handleState(value)}/>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="loading-icon ">
        <div className="loader"></div>
      </div>
    );
  }
}
ViewDetails.propTypes = {
  handleState: propTypes.func,
};
export default ViewDetails;
