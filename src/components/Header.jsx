import React from "react";
import {HeaderStyle, ContainerStyle} from "../styles/styles"
import { Link } from "gatsby"

function Header() {
    return(
        <HeaderStyle>
            <ContainerStyle>
                <Link to={"/"}><h1>Blog</h1></Link>
            </ContainerStyle>
        </HeaderStyle>
    );
}

export default Header;