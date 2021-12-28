import React, {Component} from "react"
import { graphql, Link } from "gatsby"
import '../styles/normalize.css'
import Header from '../components/Header'
import {ContainerStyle, AuthorBlogCardStyle, AvatarStyle, TitleBlogCardStyle, 
  ListBlogCardsStyle, BlogCardStyle, ImageBlogCardStyle, InformationBlogCardStyle} from "../styles/styles"

export class BlogCard extends Component {

  constructor(props){
    super(props);
    this.node = props.data.node;
    this.title = this.node.title;
    this.authorImage = this.node.authorAvatarImage.gatsbyImageData.images.fallback.src;
    this.postImage = this.node.postImage.gatsbyImageData.images.fallback.src;
    this.authorName = this.node.authorName;
    this.creationDate = this.node.creationDate;
  }

  render(){
    return (
      <BlogCardStyle>
        <InformationBlogCardStyle>
          <AuthorBlogCardStyle>
            <AvatarStyle src={this.authorImage} alt="avatar"/>
            <p className="authorName">{this.authorName}</p>
          </AuthorBlogCardStyle>
          <Link to={this.title}><TitleBlogCardStyle>{this.title}</TitleBlogCardStyle></Link>
          <p>{this.creationDate}</p>
        </InformationBlogCardStyle>
        <Link to={this.title}>
          <ImageBlogCardStyle src={this.postImage} alt="post"/>
        </Link>
      </BlogCardStyle>
    )
  }
}


export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;   
  }

  render(){
    return(
      <div>
        <Header/>
        <ContainerStyle>
          <ListBlogCardsStyle>
            {this.data.allContentfulBlog.edges.map((edge, index) => <BlogCard key={index}  data={edge}/>)}
          </ListBlogCardsStyle>
        </ContainerStyle>
      </div>
    );
  }
}

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