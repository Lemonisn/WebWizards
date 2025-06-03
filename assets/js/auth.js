document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (username.length < 3 || password.length < 6) {
        alert("Ensure username is at least 3 characters and password is 6 characters.");
        return;
    }

    // Storing user session (For demo purposes, use actual database in production)
    sessionStorage.setItem("user", JSON.stringify({ username, email }));

    alert("Signup successful! Redirecting...");
    window.location.href = "login.html";
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form reload

    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    // Simulated login (Replace with real authentication logic)
    sessionStorage.setItem("user", username);

    alert("Login successful! Redirecting...");
    window.location.href = "profile.html"; // Redirect after login
});
