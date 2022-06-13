// complete the function
function prime (num) {
  // code here
  // number less than two

  if (num < 2) {
    return false;
  }

  // modulus (remainder)
  for (let i = 2;i<num;i++){
if( num % i === 0) {
  return false;
}
  }
  return true;
}

function solution (arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

//module.exports = { solution };
console.log (prime (8));
console.log(prime(1));
console.log(prime(2));
console.log(prime(11));