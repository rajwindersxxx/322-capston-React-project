import { useEffect } from "react";

import propTypes from "prop-types";
function ViewDetails(id, props) {
  useEffect(() => {
    props.handleState(true);
  }, []);
  console.log(id);
  return (
    <>
      <div className="viewDetails"></div>
    </>
  );
}
ViewDetails.propTypes = {
  handleState: propTypes.func,
};
export default ViewDetails;
