const url = "http://grapixmo.com/kea/wp_silfen/wp-json/wp/v2/bag?_embed";

fetch(url)
  .then((response) => {
    if (!response.ok) {
    }
    return response.json();
  })
  .then((data) => {
    handleShop(data);
  });

function handleShop(data) {
  data.forEach(showBag);
}

const template = document.querySelector("#cartTemplate").content;

function showBag(bag) {
  console.log(bag);
  const copy = template.cloneNode(true);
  copy.querySelector(".bag-name").textContent = bag.title.rendered;
  copy.querySelector(".bag-price").textContent = bag.price;

  // copy.querySelector(".test").src = bag.thumb1.guid;

  copy.querySelector(".product-img-shop a").style.backgroundImage = `url(${bag.thumb1.guid})`;

  copy.querySelector(".product-img-shop a").setAttribute("href", `product.html?id=${bag.id}`);

  copy.querySelector(".price-add-to-card a").setAttribute("href", `product.html?id=${bag.id}`);

  const colors = bag._embedded["wp:term"][1]; //Define the variable colors
  if (colors.length) {
    //If colors is an array go through this
    copy.querySelector(".colors-exchange-container").textContent = ""; //In the template copy (document) select color value and add textContent
    const ulNew = document.createElement("ul"); //Define a variable ulNew and creates an element in the DOM - appended at the end
    colors.forEach((color) => {
      // Then for colors (argument of if) apllies forEach (because color is an Array) and gives a function (without name neither argument)
      const liNew = document.createElement("li"); //That function defines the variable liNew
      liNew.style.backgroundColor = color.name; // Then for that variable liNew style with background color
      ulNew.appendChild(liNew); //And here inserts the liNew variable in ulNew
    });
    copy.querySelector(".colors-exchange-container").appendChild(ulNew); //Then select the template and then the class where we want the ulNew be appends
    // that's all, easy?
  }

  const parent = document.querySelector("#shop-grid");
  parent.appendChild(copy);
}
