import { graphql } from "gatsby";
import React from "react";
import PropTypes from 'prop-types'
import {Avatar, Container, PostInformation, Post, AuthorName} from "../styles/styles"

function BlogPost({data}){

    const title = data.contentfulBlog.title
    const slug = data.contentfulBlog.slug
    const image = data.contentfulBlog.authorAvatarImage.gatsbyImageData.images.fallback.src;
    const authorName = data.contentfulBlog.authorName;
    const creationDate = data.contentfulBlog.creationDate;
    return(
        <Container>
            <Post>
                <PostInformation>
                    <h1>{title}</h1>
                    <Avatar src={image} alt="avatar"/>
                    <AuthorName>{authorName}</AuthorName>
                    <p>{creationDate}</p>
                </PostInformation>
                <p>{slug}</p>
            </Post>
        </Container>
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
            slug
            authorAvatarImage{
                gatsbyImageData
            }
            authorName
            creationDate
        }
    }
`