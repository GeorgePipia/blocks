let inputYards;    //step 1: Createing a variable using let keyword

//step 3: define function converToMeters; it takes "yard" Parameter. after calculation, returns yard;
function convertToMeters(yard) { 
    yard = yard * 0.9144;
    return yard;
}

//step 5: 
function createMessage(yard, meter) {

    let message = ''; 
    const numYard = yard * 1;


    if (numYard === 1760){
        message = "That is as long as a mile"
    }
    else if(numYard === 100) {
        message = "That is a long as a football field"
    }
    else if(numYard === 26) {
        message = "That is as long as a tennis court"
    }

    return `${yard} Yards is ${meter} Meters. ${message}`;
}

//step 2: set inputYard variable equal to window prompt() method and pass the string
inputYards = prompt("Enter a number, we will convert that number from yard to meters");

//step 4: invoke (გამოიძახე) convertToMeters function, passing it inputYards variable as an argument; 
//and store the result of the function call in a var convertdMeters - let convertedMeters = 
let convertedMeters = convertToMeters(inputYards);

let output = createMessage(inputYards, convertedMeters);
console.log(output)

//console.log("Converted meters: ", convertToMeters)

// step3 cossole.log to check that it works, from browser and I stored a yard amount in memory.
//console.log("input Yards: ", inputYards)

