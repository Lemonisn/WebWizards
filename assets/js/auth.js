document.addEventListener("DOMContentLoaded", function () {
    const user = sessionStorage.getItem("user");
    const urlParams = new URLSearchParams(window.location.search);
    const friendName = urlParams.get("user"); // Get friend's profile from URL

    // Redirect to login if user isn't logged in
    if (!user && window.location.pathname.includes("profile.html")) {
        window.location.href = "login.html";
    }

    // Display profile dynamically
    if (document.getElementById("profileHeader")) {
        document.getElementById("profileHeader").innerText = friendName ? `${friendName}'s Profile` : `${user}'s Profile`;
    }

    // Restore saved profile data for self
    if (!friendName && document.getElementById("profileForm")) {
        document.getElementById("name").value = sessionStorage.getItem("name") || "";
        document.getElementById("department").value = sessionStorage.getItem("department") || "";
        document.getElementById("contact").value = sessionStorage.getItem("contact") || "";
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

    sessionStorage.setItem("user", username);
    alert("Signup successful! Redirecting...");
    window.location.href = "login.html";
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

    sessionStorage.setItem("user", username);
    alert("Login successful!");
    window.location.href = "profile.html";
});

// Profile form handling
document.getElementById("profileForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const department = document.getElementById("department").value.trim();
    const contact = document.getElementById("contact").value.trim();

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("department", department);
    sessionStorage.setItem("contact", contact);

    alert("Profile updated successfully!");
    window.location.href = "main.html";
});

// Messaging button handling
document.getElementById("messageBtn")?.addEventListener("click", function () {
    const friendName = new URLSearchParams(window.location.search).get("user");
    window.location.href = friendName ? `messaging.html?user=${friendName}` : "messaging.html";
});

// Logout function
document.getElementById("logoutBtn")?.addEventListener("click", function () {
    sessionStorage.clear(); // Clears all stored user data
    alert("Logged out!");
    window.location.href = "index.html";
});

document.getElementById("homeBtn")?.addEventListener("click", function () {
    window.location.href = "main.html";
});

document.addEventListener("DOMContentLoaded", function () {
    const homeBtn = document.getElementById("homeBtn");

    if (homeBtn) {
        homeBtn.addEventListener("click", function () {
            window.location.href = "main.html";
        });
    }
});