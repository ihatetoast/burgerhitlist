$(function(){
  $("#addUfo").on("submit", function(e){
    e.preventDefault();

    let newUfo = {
      name: $("#ufo").val().trim(),
      craft: $("#craft").val().trim(),
      inProg: $("[name=inProg]:checked").val().trim(),
      finished: false
    };

    //send newUfo to the server
    $.ajax('/api/ufos', {
      type: "POST",
      data: newUfo
    })
    .then(function(){
      console.log("New UFO added!");
      //autorefwesh
      location.reload();
    });
  })
})