// multiplesCheck takes an input userInput and determines if it a multiple of 3, multiple of 5, or neither
function multiplesCheck(userInput) {
    let div3;
    let div5;

    // First, fill in the condition to check to see if it is divisible by 3;
    if  (userInput % 3 == 0) {
        div3 = true;
    } else {
        div3 = false;
    }

    // Next,  fill in the condition to check to see if it is divisible by 5;
    if  (userInput % 5 == 0) {
        div5 = true;
    } else {
        div5 = false;
    }

    // Remind the user of what they entered
    console.log('You entered ' + userInput + '.');

    // Now use these values to give the appropriate output
    if (div3 && div5) {
        console.log('Your number is a multiple of both 3 and 5.');
    } else if (div3) {
        console.log('Your number is a multiple of 3 but not a multiple of 5.');
    } else if (div5) {
        console.log('Your number is a multiple of 5 but not a multiple of 3.');
    } else {
        console.log('Your number is not a multiple of 3 or 5.');
    }
}




//Try out your function here.
multiplesCheck(2);
multiplesCheck(3);
multiplesCheck(10);
multiplesCheck(15);


























// -------------------------------------------------------------------------------
// Testing - DON'T CHANGE ANYTHING BELOW
const printme = console.log;
let out = [];
console.log = function log(d) {
    out.push(d);
};
multiplesCheck(2);
printme('\n Testing...');
printme(`\t did you properly return the user input?\t ${out[0] == 'You entered 2.'} `);
const a = [3.1, -3, 9, 11, 10, 45];
for (let i = 0; i < a.length; i += 1) {
    out = [];
    multiplesCheck(a[i]);
    const t3 = a[i] % 3 == 0;
    const t5 = a[i] % 5 == 0;
    if (!t5) {
        if (t3) {
            printme(`\t did you properly return a statement for values that are multiples of 3 but not of 5?\t ${out[1] == 'Your number is a multiple of 3 but not a multiple of 5.'}`);
        } else {
            printme(`\t did you properly return a statement for values that are not multiples of 3 or 5?\t ${out[1] == 'Your number is not a multiple of 3 or 5.'}`);
        }
    } else if (!t3) {
        if (t5) {
            printme(`\t did you properly return a statement for values that are multiples of 5 but not of 3?\t ${out[1] == 'Your number is a multiple of 5 but not a multiple of 3.'}`);
        }
    } else {
        printme(`\t did you properly return a statement for values that are multiples of both 3 and 5?\t ${out[1] == 'Your number is a multiple of both 3 and 5.'}`);
    }
}
