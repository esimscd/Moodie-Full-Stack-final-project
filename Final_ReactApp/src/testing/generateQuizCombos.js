//This is a script to generate all possible quiz question combinations as JSON
import fs from "fs"
//fs is the file system module in node.js that allows reading and writing to a file

//quiz options
const q1 = [
    { label: "Fantasy", value: 14 },
    { label: "Comedy", value: 35 },
    { label: "Horror", value: 27 },
    { label: "Romantic", value: 10749 },
    { label: "Thriller", value: 53 }
];
const q2 = [
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
      }
];
const q3 = [        
    { label: "Okay", value: 5 },
    { label: "Good", value: 7 },
    { label: "Great", value: 8.5 }
];
const q4 = [
    { label: "Short and sweet", value: 110 }, // run time lte
    { label: "I'm in for the long  haul", value: 120 } //run time gte
];

const combinations = []

for (let i = 0; i < q1.length; i++) {
    for (let j = 0; j < q2.length; j++) {
        for (let k = 0; k < q3.length; k++) {
            for (let l = 0; l < q4.length; l++) {
                const a1 = q1[i]
                const a2 = q1[j]
                const a3 = q1[k]
                const a4 = q1[l]
                
                combinations.push({
                    answers: {
                        genre: a1,
                        filmReleaseDate: a2,
                        ratingsRange: a3, 
                        runTime: a4
                    },
                    apiRequest: {
                        with_genres: a1.value,
                        "primary_release_date.gte": a2.value.start,
                        "primary_release_date.lte": a2.value.end,
                        "vote_average.gte": a3.value,
                        "with_runtime.gte": a4.value,

                    }
                })
            }
        }
    }
}

fs.writeFileSync("quizCombos.json", JSON.stringify(combinations, null, 2))