import "./index.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";
import ViewDetails from "./components/ViewDetails";
import { useState } from "react";

function App() {
  const [searchData, setSearchData] = useState([]);
  const [display, setDisplay] = useState(true);

  function search(data) {
    setSearchData(data);
  }
  function handleState(value){
    setDisplay(value)
  }
  return (
    <>
      <Header FetchData={search}  />
      {display ? (
        <Content data={searchData}  handleState={handleState}/>
      ) : (
        <ViewDetails handleState={handleState}/>
      )}
      <Footer />
    </>
  );
}

export default App;
