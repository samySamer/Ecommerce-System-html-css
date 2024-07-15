let navMobile = document.querySelector(".nav-ul");
let menu = document.querySelector(".menu-icon");
let productImg = document.querySelector(".productDetails-img");
let firstElementCart = document.querySelector(".first-element");
let firstElementRemove = document.querySelector(".first-element-remove");

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
