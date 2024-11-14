const prompt = require('prompt-sync')();

function getResult(matches) {
    console.log("Please provide your predictions for the following matches, use format 'X:Y', where X and Y are numbers!");
    let predictions = [];
    for (let match of matches) {
        let valid = false;
        while (!valid) {
            let result = prompt(`${match} : `);
            if (validateResult(result)) {
                predictions.push(result);
                valid = true;
            } else {
                console.log("Incorrect predictions format. Use format 'X:Y', where X and Y are numbers!");
            }
        }
    }
    return predictions;
}

function validateResult(result) {
    let regex = /^\d+:\d+$/;
    return regex.test(result);
}

function compareResults(matches, matchResults, predictions) {
    for (let i = 0; i < matches.length; i++) {
        let resultM1 = matchResults[i];
        let resultM2 = predictions[i];

        if (resultM1 === resultM2) {
            console.log(`Match result ${matches[i]} is the same as your prediction: ${resultM1}`);
        } else {
            console.log(`Match result ${matches[i]} is different: ${resultM1} than your prediction: ${resultM2}`);
        }
    }
}

// Main code
let matches = ["BVB vs AFC", "Stuttgart vs Bayern"];
let matchResults = ["5:1", "3:1"];
let predictions = getResult(matches);
compareResults(matches, matchResults, predictions);
