import { graphql } from "gatsby";
import React from "react";
import PropTypes from 'prop-types'
import Header from '../components/Header'
import {AvatarStyle, ContainerStyle, PostInformationStyle, PostStyle, PostContentStyle} from "../styles/styles"

function BlogPost({data}){

    const title = data.contentfulBlog.title
    const content = data.contentfulBlog.content.content
    const image = data.contentfulBlog.authorAvatarImage.gatsbyImageData.images.fallback.src;
    const authorName = data.contentfulBlog.authorName;
    const creationDate = data.contentfulBlog.creationDate;

    return(
        <div>
            <Header/>
            <ContainerStyle>
                <PostStyle>
                    <h2>{title}</h2>
                    <PostInformationStyle>
                        <AvatarStyle src={image} alt="avatar"/>
                        <p>{authorName}</p>
                        <p>{creationDate}</p>
                    </PostInformationStyle>
                    <PostContentStyle>
                        <p>{content}</p>
                    </PostContentStyle>
                </PostStyle>
            </ContainerStyle>
        </div>
    );
}

BlogPost.propTypes = {
    data: PropTypes.object.isRequired
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
            authorName
            creationDate
        }
    }
`