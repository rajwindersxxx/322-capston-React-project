import { v4 as uuidv4 } from "uuid";
import Card from "./Card";

function Content(props) {
    // eslint-disable-next-line react/prop-types
    const searchData = props.data;
    // eslint-disable-next-line react/prop-types
    const display = props.display;
  return (
    <>
      <div
        className="main_Content"
        style={{ display: display ? "block" : "none" }}
      >
        <div className="tiles">
          {searchData.map((item) => {
            return <Card key={uuidv4()} serachItem={item} />;
          })}
        </div>
      </div>
      <div
        className="main_Content"
        style={{ display: display ? "none" : "block" }}
      >
        <h1>display information</h1>
      </div>
    </>
  );
}
export default Content;
