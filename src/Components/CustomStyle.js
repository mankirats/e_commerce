import styled from "styled-components";
const Wrapper = styled.div`
    /* position: relative; */
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    flex-direction: ${(props) => (props.column ? "column" : "row")};
    flex-wrap: wrap;
`;
const Container = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.column ? "column" : "row")};
    padding: 0 1rem;
`;
const HeaderWrapper = styled(Wrapper)`
    /* border-bottom: 1px solid #badfd7; */
    box-shadow: 0px 2px 4px #badfd7;
`;
const LogoHome = styled(Container)`
    color: #60bfc1;
    font-weight: 600;
    font-size: 18.333px;
`;
const ShoppingOptions = styled(Container)`
    font-weight: 500;
    text-align: right;
    opacity: 0.7;
`;
const UserProfile = styled(Container)`
    text-align: right;
    opacity: 0.7;
`;

const ProductWrapper = styled(Container)`
    height: 25vh;
    min-width: 29vw;
    justify-content: flex-end;
`;

const ProductContainer = styled(Container)`
    justify-content: space-between;
    color: darkgrey;
`;

const ButtonContainer = styled.button`
    width: 100%;
    padding: 0.5rem;
    border: none;
    color: darkgray;
    background: white;
    outline: 0;
    font-size: 0.9rem;
    border: 1.7px solid #badfd7;
    border-radius: 5px;
    font-weight: 600;
`;

export {
    ButtonContainer,
    ProductContainer,
    ProductWrapper,
    HeaderWrapper,
    LogoHome,
    Wrapper,
    Container,
    ShoppingOptions,
    UserProfile,
};