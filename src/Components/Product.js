import React from "react";
import Button from "./Button";
import { ProductWrapper, ProductContainer } from "./CustomStyle";
function Product(props) {
    return (
        <>
            <ProductWrapper column>
                <ProductContainer column>
                    <img src={props.image} width="100%" height="100%"></img>
                    <span>{props.product}</span>
                    <span>{props.price}</span>
                </ProductContainer>
                <ProductContainer>
                    <Button title="Add to Cart"></Button>
                </ProductContainer>
            </ProductWrapper>
        </>
    );
}

export default Product;
