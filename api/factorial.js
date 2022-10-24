export default function handler(req, res) {
    const {number: numberString} = req.query

    if (numberString === '' || numberString === null || numberString === undefined) {
        return res.send('Error! Enter a valid number');
    }

    const number = parseInt(numberString);
    // checking if number is negative
    if (number < 0) {
        return res.send('Error! Factorial for negative number does not exist.');
    }
    
    // if number is 0
    if (number === 0) {
        return res.send(`The factorial of ${number} is 1.`);
    }
    
    // if number is positive
    let fact = 1;
    for (let i = 1; i <= number; i++) {
       fact *= i;
    }
    return res.send(`The factorial of ${number} is ${fact}.`);
    
}