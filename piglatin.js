//Allie LaCompte 
//Pig Latin Translator

var input;       // The html element where the user inputs sentences 
var output;      // The html element where the pig latin sentences are displayed
var transBttn;   // The translate button

// Translate the user's input to Pig Latin
function translate() {

   var translated = document.getElementById("output").value;
   var sentence = input.value.trim();

   if(sentence.length > 0) {

      // Split the sentence into an array of words
      var sentences = sentence.split(" ");

      for(var word in sentences) {

         var newWord = printLatinWord(sentences[word]);
         translated += newWord + " "
      } // end for

      translated += "\n";
      output.value = translated;
   } // end if

   input.value = "";
   input.focus();
} // end function translate

// Translate a word to Pig Latin
function printLatinWord(word) {

   firstWord = word.charAt(0);
   newWord = word.substring(1) + firstWord + "ay";

   return newWord;
} // end function printLatinWord

function onLoad() {

   transBttn = document.getElementById("transBttn");
   transBttn.addEventListener("click", translate, false);

   input = document.getElementById("input");
   input.value = "";

   output = document.getElementById("output");
   output.value = "";
} // end function onLoad

window.addEventListener("load", onLoad, false);