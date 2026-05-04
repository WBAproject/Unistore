
const menuIcon = document.querySelector(".menu-icon");
const sideMenu = document.querySelector(".menu-side");
const overlay = document.querySelector(".overlay");
const categoryCards = document.querySelectorAll(".category-card");
const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-btn");

menuIcon.addEventListener("click",function(){
if (sideMenu.style.right ==="0px"){
sideMenu.style.right = "-250px";
overlay.style.display= "none";}
else {
sideMenu.style.right ="0px";
overlay.style.display= "block";}
});


overlay.addEventListener("click",function(){
sideMenu.style.right ="-250px";
overlay.style.display= "none";});

categoryCards.forEach(function(card){
card.addEventListener("click",function(){
const categoryName = card.querySelector("h3").textContent.trim();
if (categoryName === "Books"){
window.location.href = "Browse Items.html#books";}

else if (categoryName === "Study Tools"){
window.location.href = "Browse Items.html#tools";}

else if (categoryName === "Electronics"){
window.location.href = "Browse Items.html#electronics";}
});
});

function searchProducts(){
const searchText = searchInput.value.trim();

if (searchText === "") {
alert("Please enter item name");
return;}

window.location.href = "Browse Items.html?search=" + searchText;}

searchButton.addEventListener("click",searchProducts);
searchInput.addEventListener("keyup",function(event){
if(event.key === "Enter"){
searchProducts();}
});
