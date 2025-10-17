const product_price = {
  "v1":1500, 
  "v2":1000, 
  "v3":800, 
  "v4":300, 
  "v5":2500, 
  "v6":1200, 
  "v7":1000, 
  "v8":1300, 
  "v9":2000, 
  "v10":1800, 
  
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

