$(function() {

  var $numInputs = $("input[type=number]");
  var $guess = $("input[type=button]");
  var $guessArea = $("#guess-area");

  $numInputs.on('keyup blur change', function() {
    console.log(getVals(), enableButton());
    enableButton() ? $guess.removeAttr('disabled') : $guess.attr('disabled') 
  });

  $guess.on('click', function() {
    var values = getVals();
    var passTest = greaterTest(values);
    var className = passTest ? 'success' : 'danger';
    var postText = passTest ?  'Yep, this obeys the rule!' : 'Nope';
    var elements = values.map(function(val) {
      return $('<input>', {
        value: val,
        disabled: true,
        "class": "btn btn-" + className
      });
    });
    elements.push($("<span>" + postText + "</span>"));
    elements.forEach(function(el) {
      $guessArea.prepend(el);
    });
    $numInputs.val('');
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

  function greaterTest(arr) {
    return +arr[2] > +arr[1] && +arr[1] > +arr[0];
  }

});