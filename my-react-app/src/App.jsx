import "./index.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";
import { useState } from "react";

function App() {
  const [searchData, setSearchData] = useState([]);
  const [display, setDisplay] = useState(true);
  function search(data) {
    setSearchData(data);
  }
  return (
    <>
      <Header FetchData={search} />
      <Content data={searchData} display={display}/>
      <Footer />
    </>
  );
}

export default App;
