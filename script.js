const navToggler = document.querySelector(".nav-toggler");
 navToggler.addEventListener("click", navToggle);

 function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
    	nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
    	nav.removeAttribute("style");
    }
 } 

 var num=document.querySelector(".num");
 var plus=document.querySelector(".plus");
 var minus=document.querySelector(".minus");
 var n=1;
 plus.addEventListener("click",()=>{
    n++;
    document.querySelector(".num").value=n;
 })
 minus.addEventListener("click",()=>{
    n--;
    if(n<0){
        n=1;
    }else{
    document.querySelector(".num").value=n;
    }
 })



 var num2=document.querySelector(".num2");
 var k=1;
function inc(){
    k++;
    console.log(k);
    document.querySelector(".num2").value=k;
}

function dec(){
    k--;
    console.log(k);
    if(k<0){
        k=1;
    }else{
    document.querySelector(".num2").value=k;
    }
}


 function addToCart(){
    document.querySelector(".addc").innerHTML="Added to cart";
    document.querySelector("#number").innerHTML=n;

}

window.addEventListener('scroll',()=>{
   var curscroll=window.pageYOffset;
   var stk=document.querySelector(".sticky");
   if(curscroll<420 || curscroll==0){
      stk.classList.add("hidd");

   }
   if(curscroll>420){
      stk.classList.remove("hidd");

   }

})