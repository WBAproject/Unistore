
const categoryCards = document.querySelectorAll(".category-card");
const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-btn");

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

window.addEventListener('DOMContentLoaded', () => {
const isLoggedIn = localStorage.getItem("isLoggedIn");
const loginBtn = document.getElementById("login-btn");
const userIcon = document.getElementById("user-profile");
if (isLoggedIn === "true") {
if (loginBtn) loginBtn.style.display = "none";
if (userIcon) userIcon.style.display = "flex";}
else {
if (loginBtn) loginBtn.style.display = "block";
if (userIcon) userIcon.style.display = "none";}
});

const logoutBtn = document.getElementById('logout-btn');

if (logoutBtn) {
logoutBtn.addEventListener('click', function() {
localStorage.removeItem('isLoggedIn');
window.location.reload();
});
}
