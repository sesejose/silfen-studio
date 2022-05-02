const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url =
  "http://sesejose.com/kea/wp_silfen/wp-json/wp/v2/bag/" + id + "?_embed";

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
  //Bag is an array, so here I am looping through the array that comes back from the API. Extracting all the objects from the array - one by one !
  // data.forEach(showBag);
}

function showBag(bag) {
  console.log(bag);
  console.log("bag");

  document.querySelector(".name").textContent = bag.title.rendered;
  document.querySelector(".price").textContent = bag.price;
  document.querySelector(".bag-image img").src = bag.thumb1.guid;
  document.querySelector(".excerpt-product p").textContent =
    bag.excerpt.rendered;
  document.querySelector(".material").textContent = bag.material;
  document.querySelector(".dimensions").textContent = bag.dimensions;

  document.querySelector(
    "ul.thumbs li:first-child"
  ).style.backgroundImage = `url(${bag.thumb1.guid})`;

  document.querySelector(
    "ul.thumbs li:nth-child(2)"
  ).style.backgroundImage = `url(${bag.thumb2.guid})`;

  document.querySelector(
    "ul.thumbs li:nth-child(3)"
  ).style.backgroundImage = `url(${bag.thumb3.guid})`;

  document.querySelector(
    "ul.thumbs li:last-child"
  ).style.backgroundImage = `url(${bag.thumb4.guid})`;
}
