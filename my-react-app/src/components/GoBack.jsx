import propsType from "prop-types";
function GoBack(props) {
  return (
    <>
      <button onClick={() => props.handleState(true)}
        type="button"
        className=" text-center w-48 rounded-2xl h-13 relative font-sans text-black text-xl font-semibold group backButton"
      >
        <div className="bg-blue-400 rounded-xl h-8 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#000000"
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            ></path>
            <path
              fill="#000000"
              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            ></path>
          </svg>
        </div>
        <p className="translate-x-2 text-center pt-1">Go Back</p>
      </button>
    </>
  );
}
GoBack.propsType ={
    handleState: propsType.func
}
export default GoBack;
