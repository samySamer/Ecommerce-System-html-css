
let productDetails = document.querySelector(".product-Details");
let title = localStorage.getItem("title");
let price = localStorage.getItem("price");
let img = localStorage.getItem("image");
console.log(title);
productDetails.innerHTML = `
        <div class="col-2">
                <img class="productDetails-img" src="${img}">
        </div>
        <div class="col-2">
        <p>Home / ${title}</p>
                <h1>${title}</h1>
                <h4>$${price}</h4>
                <select name="" id="">
                    <option value="">Select Size</option>
                    <option value="">XXL</option>
                    <option value="">XL</option>
                    <option value="">Large</option>
                    <option value="">Medium</option>
                    <option value="">Small</option>
                </select>
                <input type="number" value="1">
                <a href="./cart.html" class="btn">Add to Cart</a>
                <h3>Product Details <i class="fa fa-indent "></i>
                </h3>
                <br>
                <p>Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys.</p>
        </div>

`
let newProds = document.querySelector(".products");
console.log(newProds);
let data = JSON.parse(localStorage.getItem("ApiData"));
for(let i=0;i<4;i++){
        newProds.innerHTML+=`
        <div class="col-4 new-data  item">
          <img src="${data[i].image}" alt="">
                <h4>${data[i].title}</h4>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <p>$${data[i].price}</p>
        </div>
        `
}
let rightArrow = document.querySelector(".right-arrow");
let leftArrow = document.querySelector(".left-arrow");
let intervalId = setInterval(nextSlide,5000);
console.log(data)

rightArrow.addEventListener("click", nextSlide);
leftArrow.addEventListener("click",prevSlide)
let i =0;
let firstClickNext=false;
let firstClickBack=false;
function prevSlide(){
        if(!firstClickBack)
        {
                firstClickBack=true;
                firstClickNext=false;
                i-=5;
        }
        let items = document.querySelectorAll(".item");
        let products = document.querySelector(".products");
        if(i>=0){
                items[3].remove();
                makeProductBefore(i,products);
                i--;
        }
        else{
                i=data.length-1;
                makeProductBefore(i,products);
                i--;
        }

}
function nextSlide(){

        if(!firstClickNext){
                firstClickBack=false;
                firstClickNext=true;
                i+=5;


        }
        
        let items = document.querySelectorAll(".item");
        let products = document.querySelector(".products");
        if(i<data.length){
                items[0].remove();
                makeProductFront(i,products);
                i++;
        }
        else if(i>=data.length){
                i=0;
                makeProductFront(i,products);
                i++;
        }

}

    function makeProductFront(index,element){
        let newElement = document.createElement("div");
        newElement.className="col-4 item"
        newElement.innerHTML=` 
        <img src="${data[index].image}" alt="">
              <h4>${data[index].title}</h4>
              <div class="rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star"></i>
              </div>
              <p>$${data[index].price}</p>
      `
      element.appendChild(newElement);
    }
    function makeProductBefore(index,element){
        let newElement = document.createElement("div");
        newElement.className="col-4 item"
        newElement.innerHTML=`  
        <img src="${data[index].image}" alt="">
              <h4>${data[index].title}</h4>
              <div class="rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star"></i>
              </div>
              <p>$${data[index].price}</p>
      `
      element.insertBefore(newElement,element.firstChild);
    }