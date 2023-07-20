// adding two string as number in js

function addNumber(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        console.log(a + b);
    }
    console.log(parseInt(a) + parseInt(b));
}
addNumber('5', '6');
