function averageNumericElements(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
            count++;
        }
    }
    if (count === 0) {
        return 0;
    }
    return sum / count;
}


function doMath(x, znak, y) {
    switch (znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '%':
            return x % y;
        case '^':
            return Math.pow(x, y);
        default:
            return NaN;
    }
}

function removeCharactersFromString(str, charsToRemove) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (!charsToRemove.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}


const arr = [1, 2, 'a', 3, 'b', 4];
console.log(averageNumericElements(arr)); 


console.log(doMath(5, '+', 3));


console.log(removeCharactersFromString("hello world", ['l', 'd']));
