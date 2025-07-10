var apiKey = "41707585-e01958f78d57d1695f9a058ae";
const main = document.querySelector(".main");
const searchForm = document.querySelector(".bar");

let pageNo = 1;
function displayData(data) {
  if (data.hits == 0) {
    main.innerHTML = "";
    const heading = document.createElement("h1");
    var searchWords = document.getElementById("search").value.toUpperCase();
    heading.innerHTML = 'No Result found for "' + searchWords + '"';
    main.appendChild(heading);
  } else {
    if (pageNo === 1) {
      main.innerHTML = "";
      const heading = document.createElement("h1");
      var searchWords = document.getElementById("search").value.toUpperCase();
      heading.innerHTML = 'Showing Result for "' + searchWords + '"';
      main.appendChild(heading);
    }

    data.hits.forEach((image) => {
      const imag = document.createElement("img");
      imag.src = image.largeImageURL;
      main.appendChild(imag);
    });
  }
  document.getElementById("more").style.display = "block";
}
async function fetching() {
  
  var searchWords = document.getElementById("search").value.replace(/ /g, "+");

  var uri = "https://pixabay.com/api/?key=" + apiKey + "&q=" + searchWords + "&image_type=photo&per_page=21&page=" + pageNo + "&min_height=200";
  const response = await fetch(uri);
  const data = await response.json();
  console.log(data);
  console.log(uri);
  displayData(data);
}
searchForm.addEventListener("submit", (e)=>{
e.preventDefault();
pageNo = 1;
fetching();
});

function loadMore() {
  pageNo++;
  fetching();
}

document.getElementById("more").addEventListener("click" , loadMore );
