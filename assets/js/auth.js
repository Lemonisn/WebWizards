document.addEventListener("DOMContentLoaded", function () {
    const user = sessionStorage.getItem("user");

    // Redirect to login if user isn't logged in
    if (window.location.pathname.includes("profile.html") && !user) {
        window.location.href = "login.html";
    }

    // Display welcome message if user is logged in
    if (user && document.getElementById("welcomeMessage")) {
        document.getElementById("welcomeMessage").innerText = `Welcome, ${user}`;
    }
});

// Signup form handling
document.getElementById("signupForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (username.length < 3 || password.length < 6) {
        alert("Username must be at least 3 characters and password at least 6 characters.");
        return;
    }

    // Store user session (For demo purposes, use actual database in production)
    sessionStorage.setItem("user", username);
    alert("Signup successful! Redirecting...");
    window.location.href = "profile.html";
});

// Login form handling
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    // Store login session
    sessionStorage.setItem("user", username);
    alert("Login successful!");
    window.location.href = "profile.html";
});

// Logout function
document.getElementById("logoutBtn")?.addEventListener("click", function () {
    sessionStorage.removeItem("user");
    alert("Logged out!");
    window.location.href = "index.html";
});
