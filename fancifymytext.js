function showAlert() {
  var alertMessage = "Hello, world!";
  alert(alertMessage);
}

function increaseTextSize() {
  document.getElementById("myTextArea").style.fontSize = "24pt";
}

function applyStyles() {
  var fancyRadio = document.getElementById("fancy");
  var boringRadio = document.getElementById("boring");
  var textArea = document.getElementById("myTextArea");

  if (fancyRadio.checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else if (boringRadio.checked) {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "initial";
    textArea.style.textDecoration = "none";
  }
}


function uppercaseText() {
  var textArea = document.getElementById("myTextArea");
  var text = textArea.value;

  // Uppercase the text
  var uppercasedText = text.toUpperCase();

  // Add "-Moo" suffix to the last word of each sentence
  var sentences = uppercasedText.split(". ");
  var updatedSentences = sentences.map(function(sentence) {
    var words = sentence.split(" ");
    words[words.length - 1] += "-Moo";
    return words.join(" ");
  });

  // Join the sentences back together
  var finalText = updatedSentences.join(". ");

  // Update the text area value
  textArea.value = finalText;
}
