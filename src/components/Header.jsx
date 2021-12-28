import React from "react";
import {HeaderStyle, ContainerStyle} from "../styles/styles"
import { Link } from "gatsby"
import { Component } from "react";

class Header extends Component {
    render(){
        return(
            <HeaderStyle>
                <ContainerStyle>
                    <Link to={"/"}><h1>Blog</h1></Link>
                </ContainerStyle>
            </HeaderStyle>
        );
    }
    
}

export default Header;