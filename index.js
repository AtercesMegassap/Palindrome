const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const isPalindrome = (word) => {
  //Removes non-alphanumeric characters and converts to lowercase."
  const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');

  //Reverses the word.
  const reversedWord = cleanWord.split('').reverse().join(''); 

  //Checks if the clean word is equal to the reversed word.
  return cleanWord === reversedWord;
}

app.get('/Palindrome', (req, res) => {
  const {word} = req.body;

  if (typeof word !== "string") return res.json("Please enter a word.");

  if (isPalindrome(word)) return res.json(`The word ${word} is a palindrome.`);
  
  else return res.json(`The word ${word} is not a palindrome.`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});