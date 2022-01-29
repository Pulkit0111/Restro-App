var cart_items=JSON.parse(localStorage.getItem("cart"));
  console.log(cart_items);
  var total=document.getElementById("total");
  var cart_page=document.getElementById("cart");
  cart_items.forEach(element => {
    var parent=document.createElement("div");
    var img=document.createElement("img");
    var p=document.createElement("p");
    var price=document.createElement("p");
    var btn=document.createElement("button");
    img.src=element.image;
    p.textContent=element.meal;
    price.textContent=`Rs. ${element.price}`;
    btn.textContent="Remove";
    // btn.addEventListener("click",()=>{
    // })
    parent.append(img,p,price,btn)
    parent.setAttribute("class","parent");
    cart_page.append(parent);
  });
  var h2=document.createElement("h2");
  var sum=0;
  cart_items.forEach(ele=>{
    sum+=ele.price;
  })
  h2.innerHTML=`Cart Total: Rs. ${sum}`;
  total.append(h2);
  var checkout=document.createElement("button");
  checkout.textContent="Checkout";
  total.append(checkout);
  checkout.addEventListener("click",()=>{
    window.location.href="checkout.html";
  })