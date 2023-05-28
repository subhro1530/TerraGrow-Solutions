var banner = document.getElementById("banner");
var images = [
  "https://africaupclose.wilsoncenter.org/files/2017/08/5380620069_effe9ab7d7_z.jpg",
  "https://blogs.worldbank.org/sites/default/files/nasikiliza/images/nasikiliza-climate-smart-agriculture-lessons-from-africa-for-the-world-780x439.jpg",
  "https://worldbank.scene7.com/is/image/worldbankprod/afr-food-2-780?wid=780&hei=439&qlt=85,0&resMode=sharp",
]; // Replace with your image URLs
var index = 0;

function changeImage() {
  banner.innerHTML = '<img src="' + images[index] + '">';
  index = (index + 1) % images.length;
}

setInterval(changeImage, 5000);

// Add functionality to the search button (e.g., search functionality using JavaScript)
var searchButton = document.getElementById("search-button");
var searchResultsList = document.getElementById("search-results-list");

searchButton.addEventListener("click", function () {
  var searchQuery = document.getElementById("search-bar").value;
  var results = performSearch(searchQuery);
  displaySearchResults(results);
});

function performSearch(query) {
  // Placeholder function for search logic
  var dummyResults = [
  ];
  // Implement your actual search logic here
  // Return an array of search results based on the query
  return dummyResults;
}

function displaySearchResults(results) {
  searchResultsList.innerHTML = ""; // Clear previous results

  if (results.length === 0) {
    searchResultsList.innerHTML = "<li>No results found.</li>";
  } else {
    results.forEach(function (result) {
      var listItem = document.createElement("li");
      listItem.textContent = result;
      searchResultsList.appendChild(listItem);
    });
  }
}
