import React from "react";
import "./Styles/index.scss";
import Card from "./components/Card/Card";
import {cardOptions} from "./ImportImages";


const Main = ({countItems, valueSearch}) => {
  return (
    <div className={"container main"}>
      <h1 className={"main-title"}>Картины эпохи Возрождения</h1>
      <div className={"card-content"}>
        {cardOptions.map((image, index) => {
          if (image.title.toLowerCase().indexOf(valueSearch) !== -1) {
            return (
              <Card sold={image.statusItem} key={index} ImageSrc={image.src} ImageAlt={image.alt} titleProduct={image.title} author={image.author} price={image.price} salePrice={image.salePrice} countItems={countItems} />
            )
          }
        })}
      </div>
    </div>
  )
}

export default Main;