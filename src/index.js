module.exports = function toReadable (num) {

   let firstNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
   let secondNum = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   let thirdNum = ['hundred', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

   let number = String(num);
        if (number.length == 1) {
            return `${firstNum[number]}`;
        }
        if (number.length === 2) {
            if (number > 10 && number < 20) {
                return `${secondNum[number-11]}`;
            }
            if ((number[1]) == 0) {
                return `${thirdNum[number[0]]}`;
            } else {
                return `${thirdNum[number[0]]} ${firstNum[number[1]]}`;
            }
        } else if (number.length == 3) {
            if ((number[1] == 1) && (number[2] == 0)) {
                return `${firstNum[number[0]]} hundred ten`;
            }
            if ((number[1]) == 1) {
                return `${firstNum[number[0]]} hundred ${secondNum[((number[2])-1)]}`;
            }
            if ((number[1]) == 0 && (number[2]) == 0) {
                return `${firstNum[number[0]]} hundred`;
            }
            if ((number[1]) == 0) {
                return `${firstNum[number[0]]} hundred ${firstNum[number[2]]}`;
            }
            if ((number[2]) == 0) {
                return `${firstNum[number[0]]} hundred ${thirdNum[number[1]]}`;
            }
            return `${firstNum[number[0]]} hundred ${thirdNum[number[1]]} ${firstNum[number[2]]}`;
        } else {
            return "Incorrect number";
        }
    };
