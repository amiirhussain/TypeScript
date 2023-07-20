// Unioon types ared used when a value can be more than a single type.
// it would be string or number.

function passCode(code: string | number) {
  console.log(`Your pass code is ${code}`);
}

passCode(5788);
passCode('3425');
