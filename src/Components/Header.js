import React from "react";
import {
    HeaderWrapper,
    Container,
    ShoppingOptions,
    UserProfile,
    LogoHome,
} from "./CustomStyle";
function Header() {
    return (
        <HeaderWrapper>
            <LogoHome>E-Commerce</LogoHome>
            <Container>
                <ShoppingOptions>Cart</ShoppingOptions>
                <UserProfile>Profile</UserProfile>
            </Container>
        </HeaderWrapper>
    );
}

export default Header;
