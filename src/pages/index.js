import * as React from "react"
import { graphql, Link } from "gatsby"
import "../styles/normalize.css"
import Header from '../components/Header'
import {ContainerStyle, AuthorBlogCardStyle, AvatarStyle, TitleBlogCardStyle, 
  ListBlogCardsStyle, BlogCardStyle, ImageBlogCardStyle, InformationBlogCardStyle} from "../styles/styles"

const BlogCard = ({node}) => {

  const title = node.title;
  const authorImage = node.authorAvatarImage.gatsbyImageData.images.fallback.src;
  const postImage = node.postImage.gatsbyImageData.images.fallback.src;
  const authorName = node.authorName;
  const creationDate = node.creationDate;

  return (
    <BlogCardStyle>
      <InformationBlogCardStyle>
        <AuthorBlogCardStyle>
          <AvatarStyle src={authorImage} alt="avatar"/>
          <p>{authorName}</p>
        </AuthorBlogCardStyle>
        <Link to={title}><TitleBlogCardStyle>{title}</TitleBlogCardStyle></Link>
        <p>{creationDate}</p>
      </InformationBlogCardStyle>
      <ImageBlogCardStyle src={postImage} alt="post"/>
    </BlogCardStyle>
  )
}

function IndexPage({data}) {
  return(
    <div>
      <Header/>
      <ContainerStyle>
        <ListBlogCardsStyle>
          {data.allContentfulBlog.edges.map((edge, index) => <BlogCard key={index}  node={edge.node}/>)}
        </ListBlogCardsStyle>
      </ContainerStyle>
    </div>
  );
}

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog{
      edges {
        node {
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
    }
  }
`