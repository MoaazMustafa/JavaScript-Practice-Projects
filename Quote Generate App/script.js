const apiLink = "https://dummyjson.com/quotes?limit=1000";
 
async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data)
    const randomIndex = Math.floor(Math.random() * data.quotes.length);
        const randomQuote = data.quotes[randomIndex];

        // Display it
        document.getElementById("quote").innerText = `"${randomQuote.quote}"`;
        document.getElementById("author").innerText = `– ${randomQuote.author}`;
}

 getQuote(apiLink);

 function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + document.getElementById("quote").innerHTML +" ----  by "+ document.getElementById("author").innerHTML , "TWEET WINDOW" , "height=300 , width=600")
 }