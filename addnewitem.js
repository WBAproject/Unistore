document.addEventListener("DOMContentLoaded", function () {

    const userEmail = localStorage.getItem("userEmail");
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!userEmail || isLoggedIn !== "true") {
        alert("You must log in first to access Support page");
        window.location.replace("login.html");
        return;
    }

});
}
function publishItem() {

    let itemName = document.getElementById("itemName").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;
    let category = document.getElementById("category").value;
    let phone = document.getElementById("phone").value;
    let type = document.querySelector('input[name="type"]:checked').value;
    let saveInfo = document.getElementById("saveInfo").checked;
    let isValid = true;
    

    let e1 = validateItemName(itemName);
    if (e1) { showError("itemName", e1); isValid = false; }
    else clearError("itemName");
    let e2 = validatedescription(description);
    if (e2) { showError("description", e2); isValid = false; }
    else clearError("description");
    let e3 = validatePrice(price);
    if (e3) { showError("price", e3); isValid = false; }
    else clearError("price");
    let e4 = validatecategory(category);
    if (e4) { showError("category", e4); isValid = false; }
    else clearError("category");
    let e5 = validatePhone(phone);
    if (e5) { showError("phone", e5); isValid = false; }
    else clearError("phone");

    if (!isValid) {
        alert("Fix errors");
        return;
    }

    const item = {
        name: itemName,
        description: description,
        price: Number(price),
        category: category,
        phone: phone,
        type: type
    };
    

    let items = JSON.parse(localStorage.getItem("items")) || [];
    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));
    alert("Saved successfully");
    console.log(items);
    document.getElementById("itemform").reset();
}

function validateItemName(name) {
    if (!name) return "Required";
    return"" ;

}
function validatedescription(desc) {
    if (!desc) return "Required";
    return"" ;
}
 


function validatePrice(price) {
    if (!price || isNaN(price)) return "Enter price in SAR (numbers only:123)";
    return"" ;
}

function validatecategory(cat) {
    if (!cat) return "Select category";
    return"" ;
}
 

function validatePhone(phone) {
    if (!phone) return "Enter phone number (5XXXXXXXX)";
    if (phone.length !== 9) return "Phone must be 9 digits (5XXXXXXXX)";
    return"" ;
}

function showError(id, message) {
    document.getElementById(id).classList.add("input-error");
    document.getElementById(id).classList.remove("input-valid");
    document.getElementById(id + "error").textContent = message;
}
function clearError(id) {
    document.getElementById(id).classList.remove("input-error");
    document.getElementById(id).classList.add("input-valid");
    document.getElementById(id + "error").textContent = "";
}
