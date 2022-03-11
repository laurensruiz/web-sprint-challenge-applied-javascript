import { articles } from "../mocks/data";
import axios from "axios";

const Card = ({headline, authorPhoto, authorName}) => {

/*const headline = article.headline;
const authorPhoto = article.authorPhoto;
const authorName = article.authorName;*/

  //const
const card = document.createElement("div");
const headlineObj = document.createElement("div");
const author = document.createElement("div");
const imgContainer = document.createElement("div");
const authorPhotoObj = document.createElement("img");
const authorNameObj = document.createElement("span");

//class
card.classList.add("card");
headlineObj.classList.add("headline");
author.classList.add("author");
imgContainer.classList.add("img-container");


//hierarchy
card.appendChild(headlineObj);
card.appendChild(author);
author.appendChild(authorNameObj);
author.appendChild(imgContainer);
imgContainer.appendChild(authorPhotoObj);


//Data
headlineObj.textContent = headline;
authorPhotoObj.src = authorPhoto;
authorNameObj.textContent = `By ${authorName}`

// click
card.addEventListener("click", () => {
  console.log(headline);
})


return card
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  const cardsAppendObj = document.querySelector(selector);
  axios.get("http://localhost:5000/api/articles")
  .then( res => {
    res.data.articles.bootstrap.forEach(obj => {
      const cardsObj = Card(obj);
      cardsAppendObj.appendChild(cardsObj);
    })
    res.data.articles.javascript.forEach(obj => {
      const cardsObj = Card(obj);
      cardsAppendObj.appendChild(cardsObj);
    })
    res.data.articles.jquery.forEach(obj => {
      const cardsObj = Card(obj);
      cardsAppendObj.appendChild(cardsObj);
    })
    res.data.articles.node.forEach(obj => {
      const cardsObj = Card(obj);
      cardsAppendObj.appendChild(cardsObj);
    })
    res.data.articles.technology.forEach(obj => {
      const cardsObj = Card(obj);
      cardsAppendObj.appendChild(cardsObj);
    })
  })
  .catch(err => {
    console.error(err);
  })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
