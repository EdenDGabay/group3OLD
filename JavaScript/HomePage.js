document.addEventListener("DOMContentLoaded", function() {
    // Get references to the search box, search button, and search results container
    const searchBox = document.getElementById("search-box");
    const searchButton = document.getElementById("search-button");
    const searchResultsContainer = document.getElementById("search-suggestions");

    // Add event listener to the search button
    searchButton.addEventListener("click", function() {
        // Get the search query from the search box
        const searchQuery = searchBox.value;

        // Here will be the DB logic, when there's a DB.

        // Example just to show it works :)
        const searchResults = [
            { name: "User 1", profileUrl: "UserProfile.html" },
            { name: "User 2", profileUrl: "user2-profile-url" },
            { name: "User 3", profileUrl: "user3-profile-url" }
        ];

        // Clear previous search results
        searchResultsContainer.innerHTML = "";

        // Display search results in the search results container
        searchResults.forEach(result => {
            const resultLink = document.createElement("a");
            resultLink.textContent = result.name;
            resultLink.href = result.profileUrl;
            resultLink.classList.add("search-result-link");
            searchResultsContainer.appendChild(resultLink);
        });

        // Show the search results container
        searchResultsContainer.style.display = "block";
    });
});
