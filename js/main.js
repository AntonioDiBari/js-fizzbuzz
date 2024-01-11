let mex;
const container = document.getElementById("container-card");

for (let i = 1; i <= 100; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    mex = "FizzBuzz";
  } else if (i % 5 == 0) {
    mex = "Buzz";
  } else if (i % 3 == 0) {
    mex = "Fizz";
  } else {
    mex = i;
  }
  console.log(mex);
  container.innerHTML += `
  <div class="card ${mex}">
  <div class="box">
${mex}</box>
  </div>`;
}
