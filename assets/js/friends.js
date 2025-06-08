document.addEventListener("DOMContentLoaded", function () {
    const user = sessionStorage.getItem("user");

    if (!user) {
        window.location.href = "login.html";
    }

    const friendList = document.getElementById("friendList");
    const searchBox = document.getElementById("searchFriends");

    // Example list of friends (to be replaced with real data)
    let friends = ["Alice", "Bob", "Charlie", "David"];

    function displayFriends() {
    friendList.innerHTML = "";
    friends.forEach(friend => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="profile.html?user=${encodeURIComponent(friend)}" class="friend-link">${friend}</a>`;
        friendList.appendChild(li);
    });
}


    searchBox.addEventListener("input", function () {
        const searchTerm = searchBox.value.toLowerCase();
        const filteredFriends = friends.filter(friend => friend.toLowerCase().includes(searchTerm));
        
        friendList.innerHTML = "";
        filteredFriends.forEach(friend => {
            const li = document.createElement("li");
            li.innerText = friend;
            friendList.appendChild(li);
        });
    });

    window.addFriend = function () {
        const newFriend = prompt("Enter friend’s name:");
        if (newFriend && !friends.includes(newFriend)) {
            friends.push(newFriend);
            displayFriends();
        } else {
            alert("Friend already added or invalid name!");
        }
    };

    displayFriends();
});

// Logout function
document.getElementById("logoutBtn")?.addEventListener("click", function () {
    sessionStorage.removeItem("user");
    alert("Logged out!");
    window.location.href = "index.html";
});

document.addEventListener("DOMContentLoaded", function () {
    const homeBtn = document.getElementById("homeBtn");

    if (homeBtn) {
        console.log("Home button found in friends.js!");
        homeBtn.addEventListener("click", function () {
            console.log("Home button clicked!");
            window.location.href = "main.html";
        });
    } else {
        console.log("Home button not found in friends.js!");
    }
});