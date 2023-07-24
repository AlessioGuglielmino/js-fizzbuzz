const fizzbuzzWrapper = document.getElementById("fizzbuzz-row");
let fizzbuzzElements = "";
let classes;

for (let i = 1; i <= 100; i++) {
  let content;

  // SE IL NUMERO è DIVISIBILE PER 15
  if (i % 15 == 0) {
    content = "Fizzbuzz";
    classes = "fizzbuzz";
  }
  // ALTRIMENTI SE IL NUMERO è DIVISIBILE PER 3
  else if (i % 3 == 0) {
    content = "Fizz";
    classes = "fizz";
  }
  // ALTRIMENTI SE IL NUMERO è DIVISIBILE PER 5
  else if (i % 5 == 0) {
    content = "Buzz";
    classes = "buzz";
  }
  // ALTRIMENTI
  else {
    content = i;
    classes = "";
  }

  // CREO IL TEMPLATE LITERAL
  fizzbuzzElements += `<div class="col">
<div class="box ${classes}">${content}</div>
</div>`;
  console.log(fizzbuzzElements);
}
fizzbuzzWrapper.innerHTML = fizzbuzzElements;
