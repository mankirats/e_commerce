import React from "react";
import { ButtonContainer } from "./CustomStyle";
function Button(props) {
    return <ButtonContainer>{props.title}</ButtonContainer>;
}

export default Button;
