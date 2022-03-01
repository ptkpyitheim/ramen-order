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
        description:
            "Best fried rice with shrimp, octopus, and topped with caviar",
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

    itemInfoSection.appendChild(itemName);
    itemInfoSection.appendChild(itemDesc);
    itemInfoSection.appendChild(itemPrice);

    item.appendChild(itemImgContainer);
    item.appendChild(itemInfoSection);

    menuItemNode.appendChild(item);

    menuItemsContainer.appendChild(menuItemNode);
}
