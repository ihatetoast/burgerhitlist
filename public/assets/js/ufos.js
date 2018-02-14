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
      //autorefwesh
      location.reload();
    });
  });
  // <button class="deleteUfo" data-id="{{ this.id}}">F'ed!</button>
  $(".deleteUfo").on("click", function(e){
    e.preventDefault();
    var id = $(this).data("id");
    //send del req to the soiva. id will be the req.param.id
    $.ajax("/api/ufos/"+id,{
      type:"DELETE"
    }).then(function(){
      console.log(`deleted ufo ${id}`);
      location.reload();
    })
  })
})