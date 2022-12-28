import React from "react";
import {RandomNumber} from "../utils/NumberUtils";

function ProductItem({name, price, images}) {
    
    return(
    <>
        <div className="owl-item cloned product-item">
            <div className="single_product_item">
                <img src={images[RandomNumber(images.length)]} alt=""/>
                <div className="single_product_text">
                    <h4>{name}</h4>
                    <h3>{price}</h3>
                </div>
            </div>
        </div>
    </>
    );
}

export default ProductItem
