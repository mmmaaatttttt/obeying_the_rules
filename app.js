$(function() {

  var $numInputs = $("input[type=number]").length ? $("input[type=number]") : $("input[maxlength=1]");
  var $guess = $("#guess");
  var $guessArea = $("#guess-area");
  var $explanationArea = $("#explanation-area");
  var $resultsArea = $("#results-area");
  var $seeResults = $("#see-results");
  var $part1 = $("#part1");

  $numInputs.on('keyup blur change', function() {
    enableButton() ? $guess.removeAttr('disabled') : $guess.attr('disabled') 
  });

  $guess.on('click', function() {
    var values = getVals();
    var passTest = patternTest(values);
    var className = passTest ? 'success' : 'danger';
    var postText = passTest ?  'Yes! This obeys the rule!' : 'Nope.';
    var $newGuess = $("<div class='new-guess'></div>");
    var elements = values.map(function(val) {
      return $('<input>', {
        value: val,
        disabled: true,
        "class": "btn btn-" + className
      });
    });
    elements.push($("<span></span>", {
      text: postText,
      "class": className
    }));
    elements.forEach(function($el) {
      $newGuess.append($el);
    });
    $newGuess.insertBefore($guessArea.children('h5'));
    $numInputs.val('');
    $explanationArea.slideDown(200);
  });

  $seeResults.on('click', function() {
    $part1.slideUp(500, function() {
      $part1.remove();
      $resultsArea.slideDown(500);
    });
  });

  function getVals() {
    return $numInputs.map(function(idx, el) {
      return $(el).val();
    }).get();
  }

  function enableButton() {
    return getVals().every(function(val) {
      return val.length > 0;
    });
  }

});