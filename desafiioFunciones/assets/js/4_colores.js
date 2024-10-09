const body=document.querySelector('body');
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");
body.style.display="flex";
div1.style.width = "200px";
div1.style.height = "200px";
div1.style.backgroundColor = "blue";
div2.style.width = "200px";
div2.style.height = "200px";
div2.style.backgroundColor = "red";
div3.style.width = "200px";
div3.style.height = "200px";
div3.style.backgroundColor = "green";
div4.style.width = "200px";
div4.style.height = "200px";
div4.style.backgroundColor = "yellow";

div1.addEventListener("click", function(){
    div1.style.backgroundColor="black";
});
div2.addEventListener("click", function(){
    div2.style.backgroundColor="black";
});
div3.addEventListener("click", function(){
    div3.style.backgroundColor="black";
});
div4.addEventListener("click", function(){
    div4.style.backgroundColor="black";
});