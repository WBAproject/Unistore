function sendSupport() {
    let isValid=true;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let issue = document.getElementById("issue").value;
    let orderId = document.getElementById("orderId").value;
    let desc = document.getElementById("desc").value;
    let typeElement = document.querySelector('input[name="type"]:checked');
    let type = typeElement ? typeElement.value : "";

    
 
    let e1 = validateName(name);
    if (e1) { showError("name", e1); isValid = false; }
    else clearError("name");
    let e2 = validateEmail(email);
    if (e2) { showError("email", e2); isValid = false; }
    else clearError("email");
    let e3 = validateIssue(issue);
    if (e3) { showError("issue", e3); isValid = false; }
    else clearError("issue");
    let e4 = validateOrder(orderId);
    if (e4) { showError("orderId", e4); isValid = false; }
    else clearError("orderId");
    let e5 = validateDesc(desc);
    if (e5) { showError("desc", e5); isValid = false; }
    else clearError("desc");

    if (!isValid) {
        alert("Fix errors");
        return;
    }
    
    if (!type) {
    alert("Select type (buyer/seller)");
    return;
    }


    const ticket = {
        name: name,
        email: email,
        issue: issue,
        orderId: orderId,
        description: desc,
        type: type
    };

    let tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    tickets.push(ticket);
    localStorage.setItem("tickets", JSON.stringify(tickets));

    alert("Saved successfully");
    console.log(tickets);

    document.getElementById("supportForm").reset();
}


function validateName(name) {
    if (!name) return "Name is required";
    return "";

}
function validateEmail(email) {
    if (!email) return "Email is required";
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)) return "Enter valid email (example: user@gmail.com)";
    return "";
}
function validateIssue(issue) {
    if (!issue) return "Select one issue";
    return "";
}

function validateOrder(order) {
    if (!order) return "Enter order ID: only numbers 12*******";
    return "";
}

function validateDesc(desc) {
    if (!desc) return "Enter problem description";
    if (desc.length < 10) return "Write at least 10 characters";
    return "";
}
function showError(id, message) {
    document.getElementById(id).classList.add("input-error");
    document.getElementById(id).classList.remove("input-valid");
    document.getElementById(id + "Error").textContent = message;
}
function clearError(id) {
    document.getElementById(id).classList.remove("input-error");
    document.getElementById(id).classList.add("input-valid");
    document.getElementById(id + "Error").textContent = "";
}

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
