import React from "react";
import "./Styles/index.scss";
import CustomButton from "../../../Buttons/CustomButton";


const Card = ({key, ImageSrc, ImageAlt, titleProduct, author, price, salePrice, sold, countItems}) => {


  return (
    <div className={"card"} key={key}>
      <img className={`card-image ${sold === "sold" ? "sold" : ""}`} src={ImageSrc} alt={ImageAlt} />
      <div className={"card-content"}>
        <p className={`content-title ${sold === "sold" ? "sold" : ""}`}>{titleProduct}</p>
        <p className={`content-author ${sold === "sold" ? "sold" : ""}`}>{author}</p>
        {sold === "no-sold" ? (
          <div className={"content-price-group"}>
          <span>
            <p className={`group-sale-price ${salePrice > 0 ? "show" : "hide"}`}><s>{salePrice} $</s></p>
            <p className={"group-price"}>{price} $</p>
          </span>
            <CustomButton item={titleProduct} type={"buy"} func={(e) => countItems(e)}>Купить</CustomButton>
          </div>
        ) : (
          <div className={"content-price-group sold"}>
            <p><b>Продана на аукционе</b></p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card;