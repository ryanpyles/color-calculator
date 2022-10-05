

const prompt = require('prompt-sync')
({sigint: true});
let userChoice = Number(prompt('Would you like to 1- combine color or 2- deconstruct? Please choose using the numbers 1 or 2:' ));
if(userChoice === 1){
let firstColor = String(prompt('Pick a color from the following- red, blue, yellow :  '))

let secondColor = String(prompt('Pick a different color from the previous list:  '));

if(firstColor === 'red' && secondColor === 'blue' || firstColor === 'blue' && secondColor === 'red'){
    console.log('purple');
} else if(firstColor === 'red' && secondColor === 'yellow' || firstColor === 'red' && secondColor === 'yellow'){
    console.log('orange')
} else if(firstColor === 'blue' && secondColor === 'yellow' || firstColor === 'yellow' && secondColor === 'blue'){
console.log('green');
} else {
    console.log('error');
}
} else {
    let colorChoice = String(prompt('Pick a color to deconstruct: purple, orange or green: '));
    if(colorChoice === 'purple'){
        console.log('red + blue');
    } else if (colorChoice === 'orange'){
        console.log('red + yellow');
    } else if(colorChoice === 'green'){
        console.log('blue + yellow');
    } else {
        console.log('error');
    }
}   










