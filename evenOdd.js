// 4
function evenOdd(userInput) {
    // 4
    console.log('You entered ' + userInput + '.');

    // Now fill in the condition to determine whether the number is even
    if (userInput % 2 == 0) {
        // If it satisfies the condition, then give the user the appropriate response
        console.log('Your number is even!');
    } else {
        // Otherwise, give the alternative response
        console.log('Your number is odd!');
    }
}


//Try out your function here.
evenOdd(4);
evenOdd(3);






















// -------------------------------------------------------------------------------
// Testing - DON'T CHANGE ANYTHING BELOW
const printme = console.log;
let out = [];
console.log = function log(d) {
    out.push(d);
};
evenOdd(2);
printme('\n Testing...');
printme(`\t did you properly return the user input?\t ${out[0] == 'You entered 2.'} `);
const a = [3, 4];
for (let i = 0; i < a.length; i += 1) {
    out = [];
    evenOdd(a[i]);
    const t = a[i] % 2 == 0 ? 'even' : 'odd';
    printme(`\t did you properly return a statement for ${t} values?\t ${out[1] == 'Your number is ' + t + '!'}`);
}
