const getData=async()=>{
    var res=await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=p");
    var {meals}=await res.json();
    return meals;
  }
  const ran=()=>{
    var x=Math.floor(Math.random()*10*50);
    if(x<100){
      x=x+100;
    } else if(x>500){
      x=x-100;
    }
    return x;
  }
  var menu=document.getElementById("menu");
  var cart_tag=document.createElement("button");
  var count=document.getElementById("count");
  getData().then(data=>data.forEach(element => {
    var parent=document.createElement("div");
    var img=document.createElement("img");
    var p=document.createElement("p");
    var price=document.createElement("p");
    var btn=document.createElement("button");
    img.src=element.strMealThumb;
    p.textContent=element.strMeal;
    var z=ran();
    price.textContent=`Rs. ${z}`;
    btn.textContent="Add to Cart";
    btn.addEventListener("click",()=>{
      var cart_data={
        image: img.src,
        meal:p.textContent,
        price:z,
      }
      var arr= JSON.parse(localStorage.getItem("cart")) || [];
      arr.push(cart_data);
      localStorage.setItem("cart",JSON.stringify(arr));
      set_cart();
    })
    parent.append(img,p,price,btn)
    parent.setAttribute("class","parent");
    menu.append(parent);
  }));
  const cart_num=()=>{
    var cart_item=JSON.parse(localStorage.getItem("cart"));
    if(cart_item==null){
      return 0;
    } else {
      return cart_item.length;
    }
  }
  const set_cart=()=>{
    count.innerHTML="";
    cart_tag.textContent=`CART(${cart_num()})`
    count.append(cart_tag);
  }
  set_cart();
  cart_tag.addEventListener("click",()=>{
    window.location.href="cart.html";
  })