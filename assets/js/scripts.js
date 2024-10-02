const ele= document.getElementById("ele1");

/* ele.addEventListener("click", function(){
    ele.style.backgroundColor='yellow';
});
 */
ele.addEventListener("click",pintar);

function pintar(color = "green"){
    ele.style.backgroundColor=color;
}