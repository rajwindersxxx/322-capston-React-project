//cSpell: disable
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
function Content(props) {
  const { data } = props;
  const searchData = data;
  const [response, setResponse] = useState(false);
  useEffect(() => {
    if (searchData[0]) {
      setResponse(true);
    } else {
      setResponse(false);
    }
  });
  if (response) {
    return (
      <>
        <div className="main_Content">
          <div className="tiles">
            {searchData.map((item) => {
              return (
                <Card
                  //cSpell: disable
                  key={uuidv4()}
                  searchItem={item}
                  handleState={(value) => props.handleState(value)}
                />
              );
            })}
          </div>
          
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="main_Content">
          <div className="tiles"></div>
        </div>
      </>
    );
  }
}

Content.propTypes = {
  data: PropTypes.array.isRequired,
  handleState: PropTypes.func.isRequired,
};
export default Content;
