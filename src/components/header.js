const Header = (title, date, temp) => {
//const
const header = document.createElement("div");
const dateObj = document.createElement("span");
const titleObj = document.createElement("h1");
const tempObj = document.createElement("span");

//class
header.classList.add("header");
dateObj.classList.add("date");
tempObj.classList.add("temp");

//hierarchy
header.appendChild(dateObj);
header.appendChild(titleObj);
header.appendChild(tempObj);

//Data
dateObj.textContent = date;
titleObj.textContent = title;
tempObj.textContent = temp;

return header

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  const headerAppendObj = document.querySelector(selector);
  const headerObj = Header();
  headerAppendObj.appendChild(headerObj);
  
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
