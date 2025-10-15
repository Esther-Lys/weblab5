const product_price = {
  "v1":1000, 
  "v2":1700, 
  "v3":1200, 
  "v4":800, 
  "v5":600, 
  "v6":300, 
  "v7":750, 
  "v8":2000, 
  "v9":0, 
  "v10":0, 
  
}
function click1(event) {
  event.preventDefault();
  let f1 = document.getElementsByName("quantity");
  let f2 = document.getElementsByName("product");
  let r = document.getElementById("result");
  let quantity= f1[0].value;
  let product = f2[0].value;

  let price = product_price[product] * quantity;
  
  r.innerHTML = price;
  let s = document.getElementsByName("select1");
  console.log(s[0].value);
  return false;
}

window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("button1");
  b.addEventListener("click", click1);
});
