module.exports = function toReadable (num) {
 
   let firstNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
   let secondNum = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   let thirdNum = ['3', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

let number = String(num);
let result;
        if (number.length == 1) {
            result = `${firstNum[number]}`;
        } else if (number.length == 2) {
            if (10 < number < 20) {
                result = `${secondNum[number-11]}`;
            } else if (number[1] == 0) {
                result = `${thirdNum[number[0]]}`;
                   } else {
                   result = `${thirdNum[number[0]]} ${firstNum[number[1]]}`;
                }
        } else if (number.length == 3) {
            if ((number[1] == 1) && (number[2] == 0)) {
                result = `${firstNum[number[0]]} hundred ten`;
            } else if ((number[1]) == 1) {
                result = `${firstNum[number[0]]} hundred ${secondNum[((number[2])-1)]}`;
            } else if ((number[1]) == 0 && (number[2]) == 0) {
                result = `${firstNum[number[0]]} hundred`;
            } else if ((number[1]) == 0) {
                result = `${firstNum[number[0]]} hundred ${firstNum[number[2]]}`;
            } else if ((number[2]) == 0) {
                result = `${firstNum[number[0]]} hundred ${thirdNum[number[1]]}`;
            } else {
                result = `${firstNum[number[0]]} hundred ${thirdNum[number[1]]} ${firstNum[number[2]]}`;
            }
        } else {
            return "Incorrect number";
        }
        return result;
    };


