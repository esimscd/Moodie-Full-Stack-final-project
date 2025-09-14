//This is a script to generate all possible quiz answer combinations as JSON
//This is part of a testing strategy to check that every combination returns a result from the API
//First we must generate all possible combinations, currently 5 x 3 x 3 x 2 x 2 = 180

import fs from "fs";
//fs is the file system module in node.js that allows reading and writing to a file

//quiz questions with answers as an array of objects
// first genre
const q1 = [
  { label: "Animation", value: 16 },
  { label: "Horror", value: 27 },
  { label: "Romance", value: 10749 },
  { label: "Science Fiction", value: 878 },
];
// second genre
const q2 = [
  { label: "Comedy", value: 35 },
  { label: "Thriller", value: 53 },
  { label: "Fantasy", value: 14 },
  { label: "Action", value: 28 },
];
// release date
const q3 = [
  {
    label: "1950s-1980s",
    value: { start: "1950-01-01", end: "1979-12-31" },
  },
  {
    label: "1980s-2000",
    value: { start: "1980-01-01", end: "1999-12-31" },
  },
  {
    label: "2000-2025",
    value: { start: "2000-01-01", end: "2024-12-31" },
  },
];
// vote average
const q4 = [
  { label: "Okay", value: 4 },
  { label: "Good", value: 6 },
  { label: "Great", value: 8 },
];
// run time lte (less than or equal to)
// run time gte (greater than or equal to) = run time lte + 60
const q5 = [
  { label: "I'm in a rush", value: 60 },
  { label: "I've got a bit of time", value: 90 },
  { label: "I've got a while", value: 120 },
  { label: "I've got all the time in the world", value: 150 },
];

const combinations = []; // empty array to push all combinations to

//nested for loops to iterate over all answers in each question
for (let i = 0; i < q1.length; i++) {
  for (let j = 0; j < q2.length; j++) {
    for (let k = 0; k < q3.length; k++) {
      for (let l = 0; l < q4.length; l++) {
        for (let m = 0; m < q5.length; m++) {
          const a1 = q1[i];
          const a2 = q2[j];
          const a3 = q3[k];
          const a4 = q4[l];
          const a5 = q5[m];

          // push an answer object showing possible quiz answers
          combinations.push({
            answers: {
              genre1: a1,
              genre2: a2,
              releaseDate: a3,
              rating: a4,
              runTimeGte: a5,
            },
            // push matching apiRequest object with corresponding query parameters as keys
            apiRequest: {
              with_genres: `${a1.value}|${a2.value}`,
              "primary_release_date.gte": a3.value.start,
              "primary_release_date.lte": a3.value.end,
              "vote_average.gte": a4.value,
              "with_runtime.gte": a5.value,
              "with_runtime.lte": a5.value + 60,
            },
          });
        }
      }
    }
  }
}

// create a JSON file and write combinations to it
// writeFileSync() method to write data synchronously,
// ie. do not execute further code until writing is complete (not that we have further code)
// JSON.stringify() arguments incl. null for an unused replacer function, 2 spaces indentation for readable format
fs.writeFileSync("quizCombos.json", JSON.stringify(combinations, null, 2));
