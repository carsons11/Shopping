shop = [
    { name: "6 Infinity Stones", origin: "MCU", cost: Math.floor(Math.random() * 9999), image: `InfinityStones.png` },
    { name: "Stack of Command Blocks", origin: "Minecraft", cost: Math.floor(Math.random() * 9999), image: `Command-Block.gif` },
    { name: "Omnitrix", origin: "BEN 10", cost: Math.floor(Math.random() * 9999), image: `Omnitrix.webp` },
    { name: "Master Ball", origin: "Pokémon", cost: Math.floor(Math.random() * 9999), image: `Master-Ball.png` },
    { name: "7 DragonBalls", origin: "DragonBall", cost: Math.floor(Math.random() * 9999), image: `7-Dragonballs.png` },
    { name: "Chaos Emerald", origin: "Sonic", cost: Math.floor(Math.random() * 9999), image: `Chaos-Emeralds.png` },
    { name: "Kryptonite", origin: "DCU", cost: Math.floor(Math.random() * 1000), image: `Kryptonite.png` },
    { name: "5 pieces of Exodia", origin: "Yu-Gi-Oh", cost: Math.floor(Math.random() * 9999), image: `Exodia.png` },
    { name: "Sun Wukong's Staff", origin: "Chinese mythology", cost: Math.floor(Math.random() * 9999), image: `Sun-Wukong-Staff.png` },
    { name: "Gold Scar", origin: "Fortnite", cost: Math.floor(Math.random() * 9999), image: `Gold-Scar.jpg` },
    { name: "Death Note", origin: "Death Note", cost: Math.floor(Math.random() * 9999), image: `Death_Note.webp` },
    { name: "Roblox Banhammer", origin: "Roblox", cost: Math.floor(Math.random() * 9999), image: `Banhammer.png` },
    { name: "Krabby Patty Secret Formula", origin: "SpongeBob Squarepants", cost: 9999, image: `Krabby_Patty_secret_formula.webp` },
    { name: "Lego Death Star II", origin: "Star Wars", cost: 3449, image: `Death-Star.png` },
    { name: "Master Sword", origin: "The Legend of Zelda", cost: Math.floor(Math.random() * 9999), image: `Master_Sword.png` },
    { name: "Energy Sword", origin: "Halo", cost: Math.floor(Math.random() * 9999), image: `Halo.webp` },
    { name: "Gravity Gun", origin: "Half Life 2", cost: Math.floor(Math.random() * 9999), image: `Gravity-Gun.png` },
    { name: "Megatron", origin: "Transformer", cost: Math.floor(Math.random() * 9999), image: `Megatron.png` },
    { name: "The Real Knife", origin: "Undertale", cost: Math.floor(Math.random() * 9999), image: `Real_Knife_item.webp` },
    { name: "The Ruby Slippers", origin: "The Wizard Of Oz", cost: 28000000, image: `Ruby-slippers.png` },
    { name: "Compound V", origin: "The Boys", cost: Math.floor(Math.random() * 9999), image: `Compound-V.png` },
]

cart = { items: [], price: 0 }

/* function ShoppingCart(){
    shop.forEach(shop => {i=1; console.log(`${shop.name}: ${shop.cost} lego studs`)})
}

function Add(x){
    shop.forEach(function(shop){
        if (x===shop.name){
            cart.x = cart
        }
    })
}
Add("Megatron")
Add("Gravity Gun")

function Remove(y){
    cart.forEach(function(cart){
        if (y===cart){
            delete cart[y]
        }
    })
}
Remove("Megatron")
console.log(cart)

function Filter(){}

function Total(){}  */


/* console.log("test");
 */
/* let x = document.querySelector(".box");
console.log(x.parentElement);
x.style.backgroundColor = "rgb(255,255,0)";

const y = document.getElementById("color");
y.style.backgroundColor = "rgb(0,255,0)";

y.textContent="Hello World"; */

/* function getRGB(){
    let r = Math.floor(Math.random()* 256);
    let g = Math.floor(Math.random()* 256);
    let b = Math.floor(Math.random()* 256);
    const box = document.querySelector(".box");
    box.style.backgroundColor = `rgb(${r},${g},${b})`
    header.textContent = `rgb(${r},${g},${b})`;
} */


function inject() {
    const cardmenu = document.querySelector(".cardsmenu");
    shop.forEach(shop => {
        cardmenu.insertAdjacentHTML("beforeend", ` <div class="card" data-item="${shop.name}" data-cost="${shop.cost}">
        <h2 class="title">${shop.name}</h2>
        <p class="desc">${shop.origin}</p>
        <p class="price">$: ${shop.cost}</p>        
        <img class="img" src="img/${shop.image}" alt="Doesn't work">
        <button class="btn">Add to Cart</button>
        </div>`)

    });
    const subtotal = document.querySelector(".total");
    subtotal.insertAdjacentHTML("beforeend", `<p class="total-title">Subtotal: $${cart.price}</p>`)
}
inject();

/* const buttons = document.querySelectorAll(".btn"); */
//make sure to use a class instead
/* console.log(buttons); */
/* buttons.forEach((button) =>
    button.addEventListener("click", function (event) {
        const nextitem = (event.target.closest(".card").getAttribute("data-item"));
        const nextprice = (event.target.closest(".card").getAttribute("data-cost"));
        cart.items += ` ${nextitem}`
        cart.price += parseInt(nextprice)
        const x = document.querySelector(".cart");
        x.insertAdjacentHTML("beforeend",
            `<p class="item">${nextitem} $${nextprice}
        <button id="remove">x</button> </p>`)
        const newTotal = document.querySelector('.total-title');
        newTotal.textContent = `Subtotal: $${cart.price}`;

    })
); */
const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>
  button.addEventListener("click",function(event){
    const nextItem = (event.target.closest(".card").getAttribute("data-item"));
    const nextPrice = (event.target.closest(".card").getAttribute("data-cost"));
    cart.price += parseInt(nextPrice)
    listItems = cart.items
    console.log(listItems)
    dupeItems = false
    listItems.forEach(cart =>{
        if(nextItem === cart){
            console.log('dupe')
            const change = document.querySelector(`#${nextItem}`)
            change.dataset.amount ++
            change.textContent= `${nextItem} $${nextPrice} x${change.dataset.amount}`  
            change.insertAdjacentHTML("beforeend", `<button id="remove">x</button> `)
            dupeItems = true
            const newTotal = document.querySelector('.total-title');
            newTotal.textContent = `Subtotal: $${cart.price}`;
        } else{
            console.log('not dupe')
    }})
  if(dupeItems === false){
    const x = document.querySelector(".cart");
    x.insertAdjacentHTML("beforeend",
        `<p id="${nextItem}" data-buy="${nextItem}" data-amount=1> ${nextItem} $${nextPrice}
        <button id="remove">x</button> </p>`)
    const newTotal = document.querySelector('.total-title');
    newTotal.textContent = `Subtotal: $${cart.price}`;
    cart.items.push(`${nextItem}`)
    }}));


couponchecker = 0
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let y = document.querySelector("#coupon");
    let z = document.querySelector(".discount-box");
    console.log(y.value);
    if (y.value !== "typicalgamer" & y.value !== "lebron") {
        z.insertAdjacentHTML("beforeend",
        `<p class="Discount-applied">Invalid discount</p>`)
        y.value = "";
    } 
    else if (y.value === "typicalgamer" || y.value === "lebron") {   
        if (couponchecker >= 1){
            z.insertAdjacentHTML("beforeend",
            `<p class="Discount-applied">You can only apply one discount</p>`)
            y.value = "";
        }
        else {      
            z.insertAdjacentHTML("beforeend",
            `<p class="Discount-applied">Discount has been applied</p>`)
            couponchecker += 1
            y.value = "";
        }       
    }
}
)

    





  








//Select the container
//Create inject function that takes argument for items
//Inject 1 full HTML card into the container