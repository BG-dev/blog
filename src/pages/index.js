import * as React from "react"
import { graphql, Link } from "gatsby"
import "../styles/normalize.css"
import {ContainerStyle} from "../styles/styles"

const BlogPost = ({node}) => {
  return (
    <li> 
      <Link to={node.title}>{node.title}</Link>
    </li>
  )
}

function IndexPage({data}) {
  return(
    <ContainerStyle>
      <ul>
        {data.allContentfulBlog.edges.map((edge, index) => <BlogPost key={index}  node={edge.node}/>)}
      </ul>
    </ContainerStyle>
  );
}

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog{
      edges {
        node {
          title
        }
      }
    }
  }
`