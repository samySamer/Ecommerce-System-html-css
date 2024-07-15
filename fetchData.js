let data= fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(json=>{
    localStorage.setItem("ApiData",JSON.stringify(json));
    console.log(json);
    let featuredDivs = document.querySelectorAll(".featured");
    featuredDivs.forEach((elem,i)=>{
        let image = json[i].image;
        let title = json[i].title;
        let price = json[i].price;
        let rating = json[i].rating.rate;
        elem.innerHTML= `
        <img src=${image} class="featured-img">
                <h4>${title}</h4>`
                let ratingElem = document.createElement("div")
                ratingElem.className="rating featured";
                elem.appendChild(ratingElem);
                for(let j=0;j<rating;j++){
                let iElem = document.createElement('i');
                iElem.className="fa-solid fa-star";
                ratingElem.appendChild(iElem);
            }
            for(let j=rating;j<4;j++){
                let iElem = document.createElement('i');
                iElem.className="fa-regular fa-star";
                ratingElem.appendChild(iElem);
            }
            elem.innerHTML+=`
            <p>$${price}</p>`
    })
    let latestDivs = document.querySelectorAll(".latest");
    latestDivs.forEach((elem,i)=>{
        let image = json[i].image;
        let title = json[i].title;
        let price = json[i].price;
        let rating = json[i].rating.rate;

        elem.innerHTML= `
        <img src=${image} class="latest-img">
                <h4>${title}</h4>`
                let ratingElem = document.createElement("div")
                ratingElem.className="latest-Rating rating";
                elem.appendChild(ratingElem);

                for(let j=0;j<rating;j++){
                let iElem = document.createElement('i');
                iElem.className="fa-solid fa-star";
                ratingElem.appendChild(iElem);
            }
            for(let j=rating;j<4;j++){
                let iElem = document.createElement('i');
                iElem.className="fa-regular fa-star";
                ratingElem.appendChild(iElem);
            }
            elem.innerHTML+=`
            <p>$${price}</p>`
        ;
    });
    let featuredImages = document.querySelectorAll(".featured-img");
    let latestImages = document.querySelectorAll(".latest-img")
    featuredImages.forEach((img,i)=>{
        img.addEventListener("click",()=>{
            setLocal(json[i].title,json[i].image,json[i].price);
            window.location.href = "./productDetails.html";
        })
    })
    latestImages.forEach((img,i)=>{
        img.addEventListener("click",()=>{
            setLocal(json[i].title,json[i].image,json[i].price);
            window.location.href = "./productDetails.html";
        })
    })

});
function setLocal(title,img,price){
    localStorage.setItem("title",title);
    localStorage.setItem("image",img);
    localStorage.setItem("price",price);
}