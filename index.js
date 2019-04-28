module.exports = Phrase;

function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns the letters in the content.
this.letters = function letters() {
  return this.content;    // stub return value
}
// Returns the letters in the content.
  // For example:
  //   new Phrase("Hello, world!").letters() === "Helloworld"
this.letters = function() {
let theLetters = [];
for (let i = 0; i < this.content.length; ++i) {
  if (this.content.charAt(i).match(/[a-zA-Z]/)) {
    theLetters.push(this.content.charAt(i));
  }
}
return theLetters.join("");
}

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {

    return this.processedContent() === reverse(this.processedContent());
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.translation.toLowerCase();
  }
}

TranslatedPhrase.prototype = new Phrase();
