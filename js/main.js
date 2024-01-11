let mex;

for (let i = 1; i <= 100; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    mex = "FizzBuzz";
    console.log(mex);
  } else if (i % 5 == 0) {
    mex = "Buzz";
    console.log(mex);
  } else if (i % 3 == 0) {
    mex = "Fizz";
    console.log(mex);
  } else {
    console.log(i);
  }
}
