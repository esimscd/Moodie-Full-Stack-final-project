/* This is a script that converts the possible quiz answer combinations from JSON to 
URL query parameters to for the purpose of testing each combination with an API call, 
to ensure that all combinations return a result from the API */
import fs from "fs";
// import combinations from "./quizCombos.json" assert { type: "json" }; //specify intentional json import for safe file import

// quizCombos.json is being imported and read as below due to issues using the above import method ^^^
const rawData = fs.readFileSync("./quizCombos.json", "utf-8"); // import raw data from json file using fs read
const combinations = JSON.parse(rawData); // parse that raw data as JSON

function createQueryString(params) {
  const query = new URLSearchParams(); // use built-in web API class to construct query strings
  for (const key in params) {
    // for in loop for iterating over objects
    query.append(key, params[key]); // append method to add a parameter (key, value)
  }
  return query.toString(); // convert to string
}

const API_BASE_URL = "https://api.themoviedb.org/3/discover/movie";
const API_KEY = "e83949cc84e6f673e40ab50bb4e0cd51"; // Alissa's API key

// sleep helper function to pause code execution for specified time in milliseconds
// this helps limit API calls, as TMDB has a rate limit for requests made per second.
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function checkCombinations() {
  const failures = [];
  // iterate over quiz answer combinations and generate URL query strings
  for (let i = 0; i < combinations.length; i++) {
    const combo = combinations[i];
    const genreValue = `${combo.answers.genre1.value}|${combo.answers.genre2.value}`;
    const queryString = createQueryString({
      ...combo.apiRequest,
      with_genres: genreValue,
      api_key: API_KEY,
    });

    const url = `${API_BASE_URL}?${queryString}`;

    try {
      const res = await fetch(url);

      if (res.ok) {
        const data = await res.json();
        if (!data.results || data.results.length === 0) {
          console.log(`No results for index ${i}`);
          failures.push({
            index: i,
            type: "NO_RESULTS",
            status: res.status,
            url,
            genre1: combo.answers.genre1.label,
            genre2: combo.answers.genre2.label,
            releaseDate: combo.answers.releaseDate.label,
            rating: combo.answers.rating.label,
            runTimeGte: combo.answers.runTimeGte.label,
          });
        }
      }
    } catch (err) {
      console.error(`Network error at index ${i}: ${err.message}`);
    }

    await sleep(100); // limit API calls to 10 per second for safe API use
  }

  if (failures.length > 0) {
    fs.writeFileSync(
      "failedCombinations.json",
      JSON.stringify(failures, null, 2)
    );
    console.log(`Test completed. Failures logged: ${failures.length}`);
  } else {
    fs.writeFileSync("failedCombinations.json", JSON.stringify([], null, 2));
    console.log(
      "All possible combinations returned a result. No failures to log."
    );
  }
}

checkCombinations();
