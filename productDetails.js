
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