let cartInfo = document.querySelectorAll(".cart-element")
let data =JSON.parse(localStorage.getItem("ApiData"));
let taxes = document.querySelector(".taxes");
let subtotal = document.querySelector(".subtotal");
let total = document.querySelector(".total");
cartInfo.forEach((elem,i)=>{
    elem.innerHTML=`
    <td>
    <div class="cart-info">
    <img src="${data[i].image}" alt="">
    <div>
    <p>${data[i].title}</p>
    <small >Price: $${data[i].price}</small>
    <br>
    <a href="#" class="element-remove" >Remove</a>
    </div>
    </div></td>
    <td><input type="number" value="1" class="quantity"></td>
    <td class="element-price">$${data[i].price}</td>
    </tr>
    `
})
let quantities = document.querySelectorAll(".quantity");


let elementsRemove = document.querySelectorAll(".element-remove");
console.log(elementsRemove)
elementsRemove.forEach((elem,i)=>{
    elem.addEventListener("click",()=>{
        cartInfo[i].remove();
        subtotal.textContent = `$${Number(parseFloat(subtotal.textContent.split('$')[1])) - parseFloat(cartInfo[i].textContent.split('$')[1])}`
        total.textContent  = `$${Number(parseFloat(total.textContent.split('$')[1])) - parseFloat(cartInfo[i].textContent.split('$')[1])}`
    });
})
let smallPrice = document.querySelectorAll('small');
let prices = document.querySelectorAll(".element-price");
let sum=0;
prices.forEach((elem)=>{
    sum+= parseFloat(elem.textContent.split('$')[1]);
})
console.log(parseFloat(taxes.textContent.split('$')[1]));
subtotal.textContent = `$${sum}`;
sum = sum + parseFloat(taxes.textContent.split('$')[1]);
total.textContent = `$${sum}`;
quantities.forEach((elem,i)=>{
    elem.addEventListener("input", function(event) {
    const newQuantity = parseFloat(event.target.value);
    const unitPrice = parseFloat(smallPrice[i].textContent.split('$')[1]);
    const newPrice = unitPrice * newQuantity;
        const oldPrice = parseFloat(prices[i].textContent.split('$')[1]) || 0;
    const priceDifference = newPrice - oldPrice;
    
    prices[i].textContent = `$${newPrice.toFixed(2)}`;
    
    const currentSubtotal = parseFloat(subtotal.textContent.split('$')[1]);
    subtotal.textContent = `$${(currentSubtotal + priceDifference).toFixed(2)}`;
    total.textContent = `$${(currentSubtotal+priceDifference+parseFloat(taxes.textContent.split('$')[1])).toFixed(2)}`
})});
