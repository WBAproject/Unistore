const signupForm = document.getElementById('signupForm');

 const inputs = {
    name: document.getElementById('name'),
    phone: document.getElementById('phone'),
    email: document.getElementById('email'),
    password: document.getElementById('password')
};

 const errors = {
    name: document.getElementById('nameError'),
    phone: document.getElementById('phoneError'),
    email: document.getElementById('emailError'),
    password: document.getElementById('passwordError')
};

const resetStyle = (input, errorSpan) => {
    input.style.borderColor = "#ccc";
    input.style.backgroundColor = "white";
    if (errorSpan) {
        errorSpan.textContent = "";
        errorSpan.style.display = "none";
    }
};

Object.keys(inputs).forEach(key => {
    inputs[key].addEventListener('input', () => {
        resetStyle(inputs[key], errors[key]);
    });
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let hasError = false;

    Object.keys(inputs).forEach(key => {
        if (inputs[key].value.trim() === "") {
            inputs[key].style.borderColor = "#e74c3c";
            inputs[key].style.backgroundColor = "#fdf2f2";
            errors[key].textContent = "This field is required";
            errors[key].style.display = "block";
            hasError = true;
        }
    });

    const emailValue = inputs.email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue !== "" && !emailRegex.test(emailValue)) {
        inputs.email.style.borderColor = "#e74c3c";
        inputs.email.style.backgroundColor = "#fdf2f2";
        errors.email.textContent = "Please enter a valid email (e.g., name@hotmail.com)";
        errors.email.style.display = "block";
        hasError = true;
    }

    const phoneValue = inputs.phone.value.trim();
    if (phoneValue !== "" && !/^\d{10}$/.test(phoneValue)) {
        inputs.phone.style.borderColor = "#e74c3c";
        inputs.phone.style.backgroundColor = "#fdf2f2";
        errors.phone.textContent = "Phone must be exactly 10 digits";
        errors.phone.style.display = "block";
        hasError = true;
    }

    const passValue = inputs.password.value;
    const passRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (passValue !== "" && !passRegex.test(passValue)) {
        inputs.password.style.borderColor = "#e74c3c";
        inputs.password.style.backgroundColor = "#fdf2f2";
        errors.password.innerHTML = "*Use 8+ chars. *One uppercase at least. *One number at least";
        errors.password.style.display = "block";
        hasError = true;
    }

    if (hasError) {
        console.warn("Signup blocked: fix errors first.");
        return;
    }

    const selectedRole = document.querySelector('input[name="userRole"]:checked').value;
    localStorage.setItem('userEmail', emailValue);
    localStorage.setItem('userPassword', passValue);
    localStorage.setItem('userRole', selectedRole);
 
    localStorage.setItem("isLoggedIn", "true");

    if (selectedRole === 'seller') {
        window.location.href = "add new item-page.html";
    } else {
        window.location.href = "Browse Items.html";
    }
});
const menuIcon = document.querySelector(".menu-icon");
const sideMenu = document.querySelector(".menu-side");
const overlay = document.querySelector(".overlay");

if (menuIcon && sideMenu && overlay) {

    menuIcon.addEventListener("click", function() {
        if (sideMenu.style.right === "0px") {
            closeMenu();
        } else {
            openMenu();
        }
    });
}
