import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'; 
import BlogPost from '../templates/BlogPost';
 
describe('BlogPost Component', () => {

    const postData = {
        contentfulBlog: {
          authorAvatarImage: {
            gatsbyImageData: {
              images: {
                fallback: {
                  src: "https://images.ctfassets.net/qaewhz92nurf/7ITV96IbYOyroFdtTQNxlK/ba144cf418eaf777c6b48ae7de750443/Mikita.Azizau.png?w=1550&h=1465&fl=progressive&q=50&fm=jpg"
                }
              }
            }
          },
          content: {
            content: "Всю сознательную жизнь мой уровень английского колебался вокруг отметки Intermediate, а представления о Нью-Йорке ограничивались нарезкой сцен из фильма «Манхэттен» Вуди Аллена и сериала «Секс в большом городе». Но однажды я за компанию с друзьями приняла участие в лотерее Green Card. 31 октября 2018 года я буду отмечать двухлетие своего переезда в Нью-Йорк. Всю сознательную жизнь мой уровень английского колебался вокруг отметки Intermediate, а представления о Нью-Йорке ограничивались нарезкой сцен из фильма «Манхэттен» Вуди Аллена и сериала «Секс в большом городе». Но однажды я за компанию с друзьями приняла участие в лотерее Green Card. 31 октября 2018 года я буду отмечать двухлетие своего переезда в Нью-Йорк. Всю сознательную жизнь мой уровень английского колебался вокруг отметки Intermediate, а представления о Нью-Йорке ограничивались нарезкой сцен из фильма «Манхэттен» Вуди Аллена и сериала «Секс в большом городе». Но однажды я за компанию с друзьями приняла участие в лотерее Green Card. 31 октября 2018 года я буду отмечать двухлетие своего переезда в Нью-Йорк. Всю сознательную жизнь мой уровень английского колебался вокруг отметки Intermediate, а представления о Нью-Йорке ограничивались нарезкой сцен из фильма «Манхэттен» Вуди Аллена и сериала «Секс в большом городе». Но однажды я за компанию с друзьями приняла участие в лотерее Green Card. 31 октября 2018 года я буду отмечать двухлетие своего переезда в Нью-Йорк. Всю сознательную жизнь мой уровень английского колебался вокруг отметки Intermediate, а представления о Нью-Йорке ограничивались нарезкой сцен из фильма «Манхэттен» Вуди Аллена и сериала «Секс в большом городе». Но однажды я за компанию с друзьями приняла участие в лотерее Green Card. 31 октября 2018 года я буду отмечать двухлетие своего переезда в Нью-Йорк. Всю сознательную жизнь мой уровень английского колебался вокруг отметки Intermediate, а представления о Нью-Йорке ограничивались нарезкой сцен из фильма «Манхэттен» Вуди Аллена и сериала «Секс в большом городе». Но однажды я за компанию с друзьями приняла участие в лотерее Green Card. 31 октября 2018 года я буду отмечать двухлетие своего переезда в Нью-Йорк."
          },
          postImage: {
            gatsbyImageData: {
              images: {
                fallback: {
                  src: "https://images.ctfassets.net/qaewhz92nurf/41RWKhKy3mLqDKugWydnlR/018054cd5e01df4b8a9d2d0627657ae5/pedestrian-road-street-car-new-york-manhattan-taxi-vehicle-nyc-america-contrast-yellow-sports-car-yellow-cab-supercar-street.jpg?w=1152&h=864&fl=progressive&q=50&fm=jpg"
                }
              }
            }
          },
          authorName: "Nikita Azizov",
          creationDate: "2021-12-23",
          title: "Жизнь в Минске"
      }
    }
 
    it('has an "h2" tag and title equel text content', () => {
        const component = ReactTestUtils.renderIntoDocument(<BlogPost data={postData}/>);    
        let h2 = ReactTestUtils.findRenderedDOMComponentWithTag(
         component, 'h2'
        );
        expect(h2.textContent).toEqual(postData.contentfulBlog.title);
    });

    it('has an "a" tags', () => {
        const component = ReactTestUtils.renderIntoDocument(<BlogPost data={postData}/>);    
        let a = ReactTestUtils.scryRenderedDOMComponentsWithTag(
         component, 'a'
        );
    });

    it('has an "p" tags', () => {
        const component = ReactTestUtils.renderIntoDocument(<BlogPost data={postData}/>);    
        let p = ReactTestUtils.scryRenderedDOMComponentsWithTag(
         component, 'p'
        );
    });

    it('author Name equel text content', () => {
        const component = ReactTestUtils.renderIntoDocument(<BlogPost data={postData}/>);    
        let p = ReactTestUtils.findRenderedDOMComponentWithClass(
         component, 'authorName'
        );
        expect(p.textContent).toEqual(postData.contentfulBlog.authorName);
    });

    it('has an "img" tags', () => {
        const component = ReactTestUtils.renderIntoDocument(<BlogPost data={postData}/>);    
        let img = ReactTestUtils.scryRenderedDOMComponentsWithTag(
         component, 'img'
        );
    });
  })