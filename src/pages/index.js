import * as React from "react"
import { graphql, Link } from "gatsby"
import {Container} from "../styles/styles"

const BlogPost = ({node}) => {
  return (
    <li> 
      <Link to={node.title}>{node.title}</Link>
    </li>
  )
}

function IndexPage({data}) {
  return(
    <Container>
      <ul>
        {data.allContentfulBlog.edges.map((edge, index) => <BlogPost key={index}  node={edge.node}/>)}
      </ul>
    </Container>
  );
}

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog{
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`