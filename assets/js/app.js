document.addEventListener("DOMContentLoaded", function () {
    // Check if user is logged in
    const user = sessionStorage.getItem("user");

    if (user) {
        document.getElementById("welcomeMessage").innerHTML = `Welcome, ${user}`;
    }

    // Form submission handling
    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Form submitted!");
        });
    });

    // Logout function
    if (document.getElementById("logoutBtn")) {
        document.getElementById("logoutBtn").addEventListener("click", function () {
            sessionStorage.removeItem("user");
            alert("Logged out!");
            window.location.href = "index.html";
        });
    }
});

