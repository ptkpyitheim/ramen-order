/* JSON Objects - JavaScript Object Notation
    The following is a Javascript array of objects
*/

const menuItems = [
  {
    id: "1",
    name: "Jigoku Ramen",
    description: "Exploding with flavor, broth of red miso and chili",
    image: "jigoku.jpg",
    price: "$13.5",
  },
  {
    id: "2",
    name: "Tonkotsu Ramen",
    description: "A 24-hour creamy pork broth seasoned with shio tare",
    image: "tonkotsu.jpg",
    price: "$15",
  },
  {
    id: "3",
    name: "Veggie Ramen",
    description:
      "Slow cooked sirloin in classic tonkotsu broth with a chili bomb",
    image: "veggie-ramen.jpg",
    price: "$15",
  },
  {
    id: "4",
    name: "Shrimp Volacano Ramen",
    description: "Lots of spicyyyness ramen topped with tempura shrimp",
    image: "shrimp-volcano.jpg",
    price: "$15",
  },
  {
    id: "5",
    name: "Fried Rice",
    description: "BEST BEST fried rice ever ever ever!",
    image: "fried-rice.jpg",
    price: "$10.5",
  },
  {
    id: "6",
    name: "Seafood Fried Rice",
    description: "Best fried rice with shrimp, octopus, and topped with caviar",
    image: "seafood-fried-rice.jpg",
    price: "$13",
  },
  {
    id: "7",
    name: "Miso-glazed Salmon Plate",
    description:
      "A sunny side up fried egg, mix green salad with house dressings, pickled veg, Nami sauce compliment white rice and your choice of protein",
    image: "miso-glazed.jpg",
    price: "$14",
  },
  {
    id: "8",
    name: "Togarashi Chicken Wings",
    description: "Toasty sticky wings coated in a sweet & spicy sauce",
    image: "wings.jpg",
    price: "$11",
  },
];

//Select the menu items container. We will be appending more HTML elements in here later
const menuItemsContainer = document.getElementById("menu-items-section");

//Loop through JSON object to dynamically create menu items
menuItems.forEach((menuItem) => {
  createMenuItem(menuItem);
});

function createMenuItem(menuItemContext) {
  const menuItemNode = document.createElement("section");
  menuItemNode.setAttribute("class", "menu-item");

  const item = document.createElement("section");
  item.setAttribute("class", "item");

  const itemImgContainer = document.createElement("div");
  itemImgContainer.setAttribute("class", "item-image-container");
  //Set background url of itemImgContainer to a path
  itemImgContainer.style.backgroundImage =
    "url(./assets/images/menu-items/" + menuItemContext.image;

  const itemInfoSection = document.createElement("section");
  itemInfoSection.setAttribute("class", "item-info-section");

  const itemName = document.createElement("p");
  itemName.setAttribute("class", "item-name");
  itemName.innerText = menuItemContext.name;

  const itemDesc = document.createElement("p");
  itemDesc.setAttribute("class", "item-description");
  itemDesc.innerText = menuItemContext.description;

  const itemPrice = document.createElement("p");
  itemPrice.setAttribute("class", "item-price");
  itemPrice.innerText = menuItemContext.price;

  const itemPriceCartContainer = document.createElement("div");
  itemPriceCartContainer.setAttribute("class", "item-price-cart-container");

  const addToCart = document.createElement("button");
  addToCart.setAttribute("type", "button");

  addToCart.addEventListener("click", addToCartHandler);

  const cartPlus = document.createElement("div");
  cartPlus.setAttribute("id", "cart-plus");

  const iconCartPlus = document.createElement("i");
  iconCartPlus.setAttribute("class", "fa-solid fa-cart-plus");

  const faCheck = document.createElement("div");
  faCheck.setAttribute("id", "fa-check");

  const iconFaCheck = document.createElement("i");
  iconFaCheck.setAttribute("class", "fa-solid fa-check");

  cartPlus.appendChild(iconCartPlus);
  faCheck.append(iconFaCheck);

  addToCart.appendChild(cartPlus);
  addToCart.appendChild(faCheck);

  itemPriceCartContainer.appendChild(itemPrice);
  itemPriceCartContainer.appendChild(addToCart);

  itemInfoSection.appendChild(itemName);
  itemInfoSection.appendChild(itemDesc);
  itemInfoSection.appendChild(itemPriceCartContainer);

  item.appendChild(itemImgContainer);
  item.appendChild(itemInfoSection);

  menuItemNode.appendChild(item);

  menuItemsContainer.appendChild(menuItemNode);
}

function addToCartHandler() {
  console.log("Added to cart");
  const orderItemsSection = document.getElementById("order-items-section");

  const orderItem = document.createElement("div");
  orderItem.setAttribute("class", "order-item");
  orderItem.setAttribute("id", "1");

  const orderItemDescContainer = document.createElement("div");
  orderItemDescContainer.setAttribute(
    "class",
    "order-item-description-container"
  );

  const orderItemImgContainer = document.createElement("div");
  orderItemImgContainer.setAttribute("class", "order-item-img-container");

  const orderItemDesc = document.createElement("div");
  orderItemDesc.setAttribute("class", "order-item-description");

  const orderItemImg = document.createElement("img");
  orderItemImg.setAttribute("class", "order-item-img");
  orderItemImg.setAttribute("alt", "Fried Rice");
  orderItemImg.setAttribute("src", "./assets/images/menu-items/fried-rice.jpg");

  const orderItemName = document.createElement("p");
  orderItemName.setAttribute("class", "order-item-name");
  orderItemName.innerText = "Fried Rice";

  const orderItemPrice = document.createElement("p");
  orderItemPrice.setAttribute("class", "order-item-price");
  orderItemPrice.innerText = "$10.50";

  const trashIconContainer = document.createElement("div");
  trashIconContainer.setAttribute("class", "trash-icon");
  const trashIcon = document.createElement("i");
  trashIcon.setAttribute("class", "fa-solid fa-trash");
  trashIconContainer.appendChild(trashIcon);

  orderItemImgContainer.appendChild(orderItemImg);
  orderItemDesc.appendChild(orderItemName);
  orderItemDesc.appendChild(orderItemPrice);

  orderItemDescContainer.appendChild(orderItemImgContainer);
  orderItemDescContainer.appendChild(orderItemDesc);

  orderItem.appendChild(orderItemDescContainer);
  orderItem.appendChild(trashIconContainer);

  orderItemsSection.appendChild(orderItem);
}
