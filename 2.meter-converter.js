/// node 2.meter-converter.js \\\

function centimeterTometer(centimeter)
{
    const meter = 100;
    let result = centimeter / meter;
    return result;
}

let convert = centimeterTometer(25);
console.log(convert);