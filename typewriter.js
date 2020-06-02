const sentence = "Hello there!\n\nGeneral Kenobi!";
const sentenceWithNewLine = sentence + "\n" // Ensures whatever sentence exists, it will always add a new line break to it at the end
let num = 0 //allocates the number of seconds until the next letter appears.
for (const char of sentenceWithNewLine) {
  setTimeout(() => {
  process.stdout.write(char); //Proccess.stdout.write allows for every character to return on the same line. While console.log would return it on a different line
  }, num);
  num += 50 //after a letter appears, it will add 50 to the current value of num. This make it so the first letter appears at 0, second 50, third 100, etc..
};
