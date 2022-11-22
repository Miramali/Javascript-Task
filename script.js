var allproducts=document.querySelectorAll(".card-body a")
var content= document.querySelector("#content")

var btn=document.querySelector("#addToCart")
var content2= document.querySelector("#content2")
var totalprice=0;
var count=0;


allproducts.forEach(function(item){
    item.onclick=function(){
        

      
        totalprice+=parseInt(item.getAttribute("price"))
        count++;
        content.innerHTML="Number of Products : " + " "+ count ;
        content.style.fontWeight = 'bold';
        
    }
})
btn.onclick=function(){
    
    content2.innerHTML+="Total Price is : "+ totalprice + " " + " $ " ;
    
    content2.style.fontWeight = 'bold';


} 
