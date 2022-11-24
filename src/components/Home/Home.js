import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./Styles/index.scss";


const Home = () => {
  const [array, setArray] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const countItems = (title) => {
    setArray(prevArray => [...prevArray, title])
  }

  if (JSON.parse(localStorage.getItem("count-items")) === null) {
    localStorage.setItem("count-items", JSON.stringify([]));
  }

  if (array.length !== 0) {
    localStorage.setItem("count-items", JSON.stringify(array));
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("count-items")).length === 0) {
      localStorage.setItem("count-items", JSON.stringify([]));
    }
  }, [])

  const getValueSearch = (value) => {
    setSearchValue(value.toLowerCase());
  }


  return (
    <div className={"wrapper"}>
      <Header countItems={array} func={getValueSearch}/>
      <Main countItems={countItems} valueSearch={searchValue}/>
      <Footer />
    </div>
  )
}

export default Home;