const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

const resetStyle = (input, errorSpan) => {
    input.style.borderColor = "#ccc";
    input.style.backgroundColor = "white";
    if (errorSpan) {
        errorSpan.textContent = "";
        errorSpan.style.display = "none";
    }
};

emailInput.addEventListener('input', () => resetStyle(emailInput, emailError));
passwordInput.addEventListener('input', () => resetStyle(passwordInput, passwordError));

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const registeredEmail = localStorage.getItem('userEmail');
    const registeredPassword = localStorage.getItem('userPassword');
    const userRole = localStorage.getItem('userRole');

    let hasError = false;

    if (email === "") {
        emailInput.style.borderColor = "#e74c3c";
        emailInput.style.backgroundColor = "#fdf2f2";
        emailError.textContent = "Email is required";
        emailError.style.display = "block";
        hasError = true;
    }

    if (password === "") {
        passwordInput.style.borderColor = "#e74c3c";
        passwordInput.style.backgroundColor = "#fdf2f2";
        passwordError.textContent = "Password is required";
        passwordError.style.display = "block";
        hasError = true;
    }

    if (hasError) return;

    if (email !== registeredEmail) {
        emailInput.style.borderColor = "#e74c3c";
        emailInput.style.backgroundColor = "#fdf2f2";
        emailError.textContent = "This email is not registered";
        emailError.style.display = "block";
        hasError = true;
    }
    else if (password !== registeredPassword) {
          passwordInput.style.borderColor = "#e74c3c";
          passwordInput.style.backgroundColor = "#fdf2f2";
          passwordError.textContent = "Incorrect password";
          passwordError.style.display = "block";
          hasError = true;
    }

    if (hasError) return;

    console.log("Login Success! Redirecting user role:", userRole);

    if (userRole === 'seller') {
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

    // Close Menu when clicking the Overlay
    overlay.addEventListener("click", closeMenu);

} else {
    console.warn("Navigation Menu elements are missing from this page.");
}

function openMenu() {
    sideMenu.style.right = "0px";
    overlay.style.display = "block";
}

function closeMenu() {
    sideMenu.style.right = "-250px";
    overlay.style.display = "none";
}
