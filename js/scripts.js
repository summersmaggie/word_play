$(document).ready(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();
    var phraseInput = $("input#phrase").val();
    var splitInput = phraseInput.split("");
    var reverseInput = splitInput.reverse();
    var arrayInput = reverseInput.join("");

    if (phraseInput === arrayInput) {
      alert("yes!");
    } else {
      alert("no!");
    }

  });
});
