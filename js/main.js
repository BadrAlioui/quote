// Get quotes from API

let apiQuotes = [];

function newQuote() {
  // Pick a random quote from API array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

async function getQuotes(params) {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    // console.log(apiQuotes[random index]);
    newQuote();
  } catch (error) {
    // Catch Error here
  }
}

getQuotes();
