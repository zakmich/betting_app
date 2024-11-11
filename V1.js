const prompt = require('prompt-sync')();
const matches = ["BVB vs AFC", "Stuttgart vs Bayern"];
const matchResult = ["5:1", "3:1"];
const prediction = [];

matches.forEach(match => {
    const result = prompt(`Please insert your prediction for match, ${match}: `);
    prediction.push(result);
});

matches.forEach((match, i) => {
    const resultM1 = matchResult[i];
    const resultM2 = prediction[i];

    if (resultM1 === resultM2) {
        console.log(`Match result ${match} is the same as your prediction: ${resultM1}`);
    } else {
        console.log(`Match result ${match} is different: ${resultM1} than your prediction: ${resultM2}`);
    }
});
