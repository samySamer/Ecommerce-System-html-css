let col4 = document.querySelectorAll(".col-4");
console.log(col4)
let data = JSON.parse(localStorage.getItem("ApiData"));
filterElements(data,col4);
let select = document.querySelector("select");
select.addEventListener("change",function(event){
    if(event.target.value=="priceSort"){
        data = data.sort((a,b)=>a.price - b.price);
        filterElements(data,col4);
        }
    else  if(event.target.value="ratingSort")
    {
        data = data.sort((a,b)=>b.rating.rate - a.rating.rate);
        filterElements(data,col4);
    }
    }
);
function filterElements(data,element){
    element.forEach((elem,i)=>{
        elem.innerHTML=`
        <img src="${data[i].image}" alt="" class="products-imgs">
                   <h4>${data[i].title}</h4>`
            let ratingElem = document.createElement("div")
                ratingElem.className="rating featured";
                elem.appendChild(ratingElem);
                for(let j=0;j<data[i].rating.rate;j++){
                let iElem = document.createElement('i');
                iElem.className="fa-solid fa-star";
                ratingElem.appendChild(iElem);
            }
            for(let j=data[i].rating.rate;j<4;j++){
                let iElem = document.createElement('i');
                iElem.className="fa-regular fa-star";
                ratingElem.appendChild(iElem);
            }
            elem.innerHTML+=`
                   <p>$${data[i].price}</p>
       `
    });
}

let images = document.querySelectorAll('.products-imgs');
console.log(images)
images.forEach((elem,i)=>{
    elem.addEventListener("click",()=>{
        console.log(i);
        setLocal(data[i].title,data[i].image,data[i].price);
        window.location.href = "./productDetails.html";
    })});

function setLocal(title,img,price){
    localStorage.setItem("title",title);
    localStorage.setItem("image",img);
    localStorage.setItem("price",price);
}