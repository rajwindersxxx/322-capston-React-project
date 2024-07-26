import {  useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
const api_url = import.meta.env.VITE_API_URL;
const api_key = import.meta.env.VITE_API_KEY;

function Header(props) {
  const [search, setSearch] = useState("");
  function handleChange() {
    const { value } = event.target;
    setSearch(value);
  }
  function handleSearch() {
    let promises = [];
    let pages = { startPage: 1, endPage: 2 };
    //cSpell: disable
    for (let i = pages.startPage; i <= pages.endPage; i++) {
      let promise = axios
        .get(`${api_url}/?apikey=${api_key}&s=${search}&page=${i}`)
        .then((response) => {
            return response.data.Search;
        })
        .catch((error) => {
          console.log(error);
          return [];
        });
      promises.push(promise);
    }
    Promise.all(promises)
      .then((results) => {
        props.FetchData([].concat(...results));
        props.handleState(true);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }
  function ViewHomePage() {
    props.handleState(true);
  }
  
  return (
    <>
      <nav>
        <ul className="rightNav">
          <li>
            <h1 className="font-serif cursor-pointer" onClick={ViewHomePage}>
              Movie<span className="text-4xl">/</span>Database
            </h1>
          </li>
          <li>
            <input
              className="bg-[#222630] px-4 py-1 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
              name="searchBox"
              placeholder="Search a Movie/series"
              type="text"
              onChange={handleChange}
              value={search}
            />
          </li>
          <li>
            <button className="searchButton" onClick={handleSearch}>
              <span className="text">Search</span>
            </button>
          </li>
        </ul>
        <ul>
          <li style={{ float: "right" }}>
            {/* <button>Login</button> */}
          </li>
        </ul>
      </nav>
      <div style={{ height: "60px" }}></div>
    </>
  );
}
Header.propTypes = {
  Switch: PropTypes.func,
  handleState: PropTypes.func,
  FetchData: PropTypes.func,
};
export default Header;
