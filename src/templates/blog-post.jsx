import { graphql } from "gatsby";
import React from "react";
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

function BlogPost({data}){

    const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
  `

    const title = data.contentfulBlog.title
    const slug = data.contentfulBlog.slug
    const image = data.contentfulBlog.authorAvatarImage.gatsbyImageData.images.fallback.src;
    return(
        <div>
            <h1>{title}</h1>
            <p>{slug}</p>
            <Avatar src={image} alt="post" />
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
            slug
            authorAvatarImage{
                gatsbyImageData
            }
        }
    }
`