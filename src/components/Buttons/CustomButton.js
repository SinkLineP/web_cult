import React, {useState} from "react";
import "./Styles/index.scss";
import axios from "axios";
import Loader from "./Loader/Loader";


const CustomButton = ({children, type, func, className, item}) => {
  const [loading, setLoading] = useState(false);
  const [statusResponse, setStatusResponse] = useState("BAD");
  const [isDisable, setDisable] = useState(false);

  return (
    <>
      <button
        disabled={isDisable === false ? JSON.parse(localStorage.getItem("count-items")).indexOf(item) !== -1 : isDisable}
        className={`${!className ? "default-styles default-button" : `default-styles ${className}`}`}
        onClick={type === "buy" ? () => {
          if (isDisable !== true) {
            setLoading(true);
            axios.get("https://jsonplaceholder.typicode.com/posts/1")
              .then(res => {
                if (res.status === 200) {
                  setStatusResponse("OK")
                } else {
                  setStatusResponse("BAD")
                }
              })
              .finally(() => {
                setLoading(false);
                setDisable(true);
                func(item);
              });
          }
        } : func ? "" : func}
      >
        {loading === true ? <Loader isLoading={loading} /> : statusResponse === "OK" ? "В корзине" : JSON.parse(localStorage.getItem("count-items")).indexOf(item) !== -1 ? "В корзине" : children }
      </button>
    </>
  )
}

export default CustomButton;