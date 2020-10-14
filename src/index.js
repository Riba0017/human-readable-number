

const ones=['','one','two','three','four','five','six','seven','eight','nine'];
const tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
const teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

module.exports = function toReadable (number) {
    return number === 0 ? 'zero' : convert_millions(number);
};

function convert_millions(number){
    return number >= 1000000
        ? `${convert_millions(Math.floor(number / 1000000))} million ${convert_thousands(number % 1000000)}`
        : `${convert_thousands(number)}`;
}

function convert_thousands(number){
    return number >= 1000
        ? `${convert_hundreds(Math.floor(number / 1000))} thousand ${convert_hundreds(number % 1000)}`
        : `${convert_hundreds(number)}`;
}

function convert_hundreds(number){

    if(number > 99 && number % 100 === 0) return `${ones[Math.floor(number / 100)]} hundred`;
    else if (number > 99) return `${ones[Math.floor(number / 100)]} hundred ${convert_tens(number % 100)}`;
    else return convert_tens(number);
}

function convert_tens(number){
    if (number < 10) return ones[number];
    else if (number >= 10 && number < 20) return teens[number - 10];
    else if (number % 10 === 0) return tens[Math.floor(number / 10)];
    else return tens[Math.floor(number / 10)]+" "+ones[number % 10];
}
