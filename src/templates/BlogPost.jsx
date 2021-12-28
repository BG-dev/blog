import { graphql } from "gatsby";
import React from "react";
import PropTypes from 'prop-types'
import Header from '../components/Header'
import {AvatarStyle, ContainerStyle, PostInformationStyle, PostStyle, PostContentStyle} from "../styles/styles"
import { Component } from "react";

class BlogPost extends Component{

    constructor(props){
        super(props)

        this.data = props.data;
        this.contentful = this.data.contentfulBlog;
        this.title = this.contentful.title
        this.content = this.contentful.content.content
        this.image = this.contentful.authorAvatarImage.gatsbyImageData.images.fallback.src;
        this.authorName = this.contentful.authorName;
        this.creationDate = this.contentful.creationDate;
    }

    render(){
        return(
            <div>
                <Header/>
                <ContainerStyle>
                    <PostStyle>
                        <h2>{this.title}</h2>
                        <PostInformationStyle>
                            <AvatarStyle src={this.image} alt="avatar"/>
                            <p className="authorName">{this.authorName}</p>
                            <p>{this.creationDate}</p>
                        </PostInformationStyle>
                        <PostContentStyle>
                            <p>{this.content}</p>
                        </PostContentStyle>
                    </PostStyle>
                </ContainerStyle>
            </div>
        );
    }
}

export default BlogPost

export const pageQuery = graphql`
    query blogPostQuery($title: String!){
        contentfulBlog(title: {eq: $title}) {
            title
            content {
                content
            }
            authorAvatarImage{
                gatsbyImageData
            }
            postImage{
                gatsbyImageData
            }
            authorName
            creationDate
        }
    }
`