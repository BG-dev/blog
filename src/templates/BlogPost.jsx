import { graphql } from "gatsby";
import React from "react";
import PropTypes from 'prop-types'
import Header from '../components/Header'
import {AvatarStyle, ContainerStyle, PostInformationStyle, PostStyle, PostContentStyle} from "../styles/styles"

function BlogPost({data}){
    const contentful = data.contentfulBlog;

    const title = contentful.title
    const content = contentful.content.content
    const image = contentful.authorAvatarImage.gatsbyImageData.images.fallback.src;
    const authorName = contentful.authorName;
    const creationDate = contentful.creationDate;

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