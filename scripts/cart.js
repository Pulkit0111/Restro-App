var cart_items=JSON.parse(localStorage.getItem("cart"));
  console.log(cart_items);
  var total=document.getElementById("total");
  var cart_page=document.getElementById("cart");
  const cart_data=(x)=>{
    x=JSON.parse(localStorage.getItem("cart"));
    x.forEach(element => {
      var parent=document.createElement("div");
      var img=document.createElement("img");
      var p=document.createElement("p");
      var price=document.createElement("p");
      var btn=document.createElement("button");
      img.src=element.image;
      p.textContent=element.meal;
      price.textContent=`Rs. ${element.price}`;
      btn.textContent="Remove";
      btn.addEventListener("click",()=>{
        cart_page.innerHTML="";
        var arr=x.filter(i=>i.meal!==element.meal);
        window.localStorage.clear();
        localStorage.setItem("cart",JSON.stringify(arr));
        sum_total(arr);
        cart_data(arr);
        // window.location.href="../cart.html";
      })
      parent.append(img,p,price,btn)
      parent.setAttribute("class","parent");
      cart_page.append(parent);
    });
  }
  cart_data(cart_items);
  var h2=document.createElement("h2");
  const sum_total=(y)=>{
    var sum=0;
    y.forEach(ele=>{
    sum+=ele.price;
    h2.innerHTML=`Cart Total: Rs. ${sum}`;
  });
}
  total.append(h2);
  sum_total(cart_items);
  var checkout=document.createElement("button");
  checkout.textContent="Checkout";
  total.append(checkout);
  checkout.addEventListener("click",()=>{
    window.location.href="checkout.html";
  })