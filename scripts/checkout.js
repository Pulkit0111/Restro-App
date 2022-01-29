var btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    alert("Your order has been accepted");
    setTimeout(()=>{
        alert("Your order is being cooked");
    },3000);
    setTimeout(()=>{
        alert("Your order is ready");
    },8000);
    setTimeout(()=>{
        alert("Your order is being cooked");
    },10000);
    setTimeout(()=>{
        alert("Your order is out for delivery");
    },12000);
})