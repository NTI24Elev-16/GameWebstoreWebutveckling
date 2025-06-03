window.onload = function () {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const accountLink = document.getElementById("account");
    if (loggedInUser) {
        accountLink.textContent = "Account";
        accountLink.href = "";
    }
};
function updateFeedback(message, color = "red") {
    const feedback = document.getElementById("p33");
    feedback.textContent = message;
    feedback.style.color = color;
}
function validateEmail(email) {
    const pattern = /^[A-Za-z0-9._\-]+@[A-Za-z0-9\-]+\.[a-z]{2,4}$/;
    return pattern.test(email);
}
function registrationCheck() {
    const email = document.getElementById("Email").value.trim();
    const password = document.getElementById("Password").value;
    const confirmPassword = document.getElementById("Confirm Password").value;
    const tosChecked = document.getElementById("Tos").checked;
    if (!email || !password || !confirmPassword) {
        updateFeedback("Please fill in all fields.");
        return false;
    }
    if (!validateEmail(email)) {
        updateFeedback("Invalid email format.");
        return false;
    } else {
        updateFeedback("Valid email format", "green");
    }
    if (password !== confirmPassword) {
        updateFeedback("Passwords do not match.");
        return false;
    }
    if (!tosChecked) {
        updateFeedback("You must agree to the terms of service.");
        return false;
    }
    let users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[email]) {
        updateFeedback("This email is already registered.");
        return false;
    }
    users[email] = password;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", email);
    updateFeedback("Registration successful!", "green");
    setTimeout(() => {
        window.location.href = "Shop.html";
    }, 1000);
    return true;
}
function loginCheck() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const tosChecked = document.getElementById("Tos").checked;
    if (!email || !password) {
        updateFeedback("Please enter email and password.");
        return false;
    }
    if (!tosChecked) {
        updateFeedback("You must agree to the terms of service.");
        return false;
    }
    if (!validateEmail(email)) {
        updateFeedback("Invalid email format.");
        return false;
    }
    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (!users[email]) {
        updateFeedback("No account found with this email.");
        return false;
    }
    if (users[email] !== password) {
        updateFeedback("Incorrect password.");
        return false;
    }
    localStorage.setItem("loggedInUser", email);
    updateFeedback("Login successful!", "green");
    setTimeout(() => {
        window.location.href = "Shop.html";
    }, 1000);
    return true;
}