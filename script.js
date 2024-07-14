let navMobile = document.querySelector(".nav-ul");
let menu = document.querySelector(".menu-icon");
let productImg = document.querySelector(".productDetails-img");
let firstElementCart = document.querySelector(".first-element");
let firstElementRemove = document.querySelector(".first-element-remove");
let total = document.querySelector(".total");
let taxes = document.querySelector(".taxes");
let subtotal = document.querySelector(".subtotal");
let firstElementPrice = document.querySelector(".first-element-price");

menu.addEventListener("click",()=>{
    navMobile.classList.toggle("active");
})

function goToIndex(){
    window.location.href="./index.html";
}
function onChangeImg(event){
    productImg.src = `assets/gallery-${event.target.classList[0]}.jpg`;
}
function removeElement(){
    firstElementCart.remove();
    console.log(Number(subtotal.textContent.split('$')[1]));
    subtotal.textContent = `$${Number(parseFloat(subtotal.textContent.split('$')[1])) - parseFloat(firstElementPrice.textContent.split('$')[1])}.00`
    total.textContent  = `$${Number(parseFloat(total.textContent.split('$')[1])) - parseFloat(firstElementPrice.textContent.split('$')[1])}.00`
}
