let secretnumber = 73;
let guess = 0;

for (i = 0; i < 10; i++) {
  guess = parseInt(prompt("guess the secret number between 1 and 100"));
  if (guess === secretnumber) {
    break;
  }

  if (i == 9) {
    alert("the number is bigger than 20");
      i = 0;

  }
}

alert("congrats you got it correct!: " + secretnumber);
