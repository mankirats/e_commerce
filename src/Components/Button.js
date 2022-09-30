import React from "react";
import { ButtonContainer } from "./CustomStyle";
import { useState } from "react";
function Button(props) {
    const [cartValue, updateCartValue] = useState(0);
    // const addToCart = (val) => {
    //     console.log(val)
    //     return val + 1;
    // };
    return (
        <ButtonContainer
            onClick={() => {
                console.log(cartValue);
                updateCartValue(cartValue + 1);
            }}
        >
            {props.title}
        </ButtonContainer>
    );
}

export default Button;
