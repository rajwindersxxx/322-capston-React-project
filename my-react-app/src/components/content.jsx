import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import PropTypes from "prop-types";
function Content(props) {
  const { data } = props;
  const searchData = data;
  function handleState(value) {
    props.handleState(value);
  }
  return (
    <>
      <div className="main_Content">
        <div className="tiles">
          {searchData.map((item) => {
            return (
              <Card
                key={uuidv4()}
                serachItem={item}
                handleState={handleState}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

Content.propTypes = {
  data: PropTypes.array.isRequired,
  handleState: PropTypes.func.isRequired
};
export default Content;
