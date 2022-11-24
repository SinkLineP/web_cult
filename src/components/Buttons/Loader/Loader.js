import React from "react";


const Loader = ({isLoading}) => {
  return (
    <div className={`${isLoading ? "show" : "hide"}`}>
      Loading...
    </div>
  )
}

export default Loader;