const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://sesejose.com/kea/wp_silfen/wp-json/wp/v2/bag/" + id + "?_embed";

console.log("url");

fetch(url)
  .then((response) => {
    if (!response.ok) {
    }
    return response.json();
  })
  .then((data) => {
    showBag(data);
  });

function handleBag(data) {
  //Lasse says that is not neccesary when is a single object - by ID
  //Lucas / Bag is an array, so here I am looping through the array that comes back from the API. Extracting all the objects from the array - one by one !
  // data.forEach(showBag);
}

function showBag(bag) {
  console.log(bag);
  console.log("bag");

  document.querySelector(".name").textContent = bag.title.rendered;
  document.querySelector(".price").textContent = bag.price;
  document.querySelector(".bag-image img").src = bag.thumb1.guid;
  document.querySelector(".excerpt-product p").textContent = bag.excerpt.rendered;
  document.querySelector(".material").textContent = bag.material;
  document.querySelector(".dimensions").textContent = bag.dimensions;

  document.querySelector("ul.thumbs li:first-child").style.backgroundImage = `url(${bag.thumb1.guid})`;

  document.querySelector("ul.thumbs li:nth-child(2)").style.backgroundImage = `url(${bag.thumb2.guid})`;

  document.querySelector("ul.thumbs li:nth-child(3)").style.backgroundImage = `url(${bag.thumb3.guid})`;

  document.querySelector("ul.thumbs li:last-child").style.backgroundImage = `url(${bag.thumb4.guid})`;

  const colors = bag._embedded["wp:term"][1]; //Define the variable colors
  if (colors.length) {
    //If colors is an array go through this
    document.querySelector(".colors-exchange-container").textContent = ""; //In document select color-exchange-container class and add textContent
    const ulNew = document.createElement("ul"); //Define a variable ulNew and creates an element in the DOM - appended at the end
    colors.forEach((color) => {
      // Then for colors (argument of if) apllies forEach (because color is an Array) and gives a function (without name neither argument)
      const liNew = document.createElement("li"); //That function defines the variable liNew
      liNew.style.backgroundColor = color.name; // Then for that variable liNew style with background color
      ulNew.appendChild(liNew); //And here inserts the liNew variable in ulNew
    });
    document.querySelector(".colors-exchange-container").appendChild(ulNew); //Then select the template and then the class where we want the ulNew be appends
    // that's all, easy?
  }
}
