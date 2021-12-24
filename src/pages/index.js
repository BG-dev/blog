import * as React from "react"
import { graphql, Link } from "gatsby"
import "../styles/normalize.css"
import Header from '../components/Header'
import {ContainerStyle, AuthorBlogCardStyle, AvatarStyle, TitleBlogCardStyle, ListBlogCardsStyle, BlogCardsStyle} from "../styles/styles"

const BlogCard = ({node}) => {

  const title = node.title;
  const image = node.authorAvatarImage.gatsbyImageData.images.fallback.src;
  const authorName = node.authorName;

  return (
    <BlogCardsStyle>
      <AuthorBlogCardStyle>
        <AvatarStyle src={image} alt="avatar"/>
        <p>{authorName}</p>
      </AuthorBlogCardStyle>
      <Link to={title}><TitleBlogCardStyle>{title}</TitleBlogCardStyle></Link>
    </BlogCardsStyle>
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
            authorName
            creationDate
        }
      }
    }
  }
`