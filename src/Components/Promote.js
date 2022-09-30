import React from "react";
import { Wrapper } from "./CustomStyle";
import Product from "./Product";
import Data from "./raw.json";

function Promote(props) {
    return (
        <Wrapper>
            {Data.slice(0, 8).map((pd, idx) => {
                return (
                    <Product
                        key={idx}
                        product={
                            pd.title.length > 20
                                ? pd.title.slice(0, 20) + "..."
                                : pd.title
                        }
                        price={"\u20A8" + " " + pd.price}
                        image={pd["images"]["medium"]["url"]}
                    ></Product>
                );
            })}
        </Wrapper>
    );
}

export default Promote;
