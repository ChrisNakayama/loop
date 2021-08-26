function beep(numberInput) {
  var numberArray = [];
  for (i=0; i <= numberInput; i++) {
    if (i.toString().includes(32)) {
      numberArray.push("<li>Won't you be my neighbor?</li>");
    } else if (i.toString().includes(21)) {
      numberArray.push("<li>Boop.</li>");
    } else if (i.toString().includes(13)) {
      numberArray.push("<li>Won't you be my neighbor?</li>");
    } else if (i.toString().includes(3)) {
      numberArray.push("<li>Won't you be my neighbor?</li>");
    } else if (i.toString().includes(2)) {
      numberArray.push("<li>Boop!</li>");
    } else if (i.tostring().includes(1)) {
      numberArray.push("<li>Beep!</li>");
    } else {
      numberArray.push("<li>" + i + "</li>");   
    }
  } 
  return numberArray;
};

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#number").val());
    let result = beep(numberInput);
    $(".unstyled").text("");
    
    result.forEach(outputList);

    function outputList(result) {
      $(".unstyled").append(result);
    };
    
    $("output").show(): this

  });
});    
