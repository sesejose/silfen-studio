const url = "http://sesejose.com/kea/wp_silfen/wp-json/wp/v2/bag?_embed";

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
  document.querySelector("a").style.backgroundImage = "url('bag.thumb1.guid')";

  copy
    .querySelector(".price-add-to-card a")
    .setAttribute("href", `product.html?id=${bag.id}`);
  const parent = document.querySelector("#shop-grid");
  parent.appendChild(copy);
}
