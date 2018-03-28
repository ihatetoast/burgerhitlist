$(function(){
  $("#addUfo").on("submit", function(e){
    if(($("#ufo").val().trim()==="") || ($("#craft").val().trim()==="")){
      alert("There's no point in empty input fields, you weenus.")
      return false;
    }
    e.preventDefault();
    let newUfo = {
      name: $("#ufo").val().trim(),
      craft: $("#craft").val().trim(),
      inProg: $("[name=inProg]:checked").val().trim()
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
  // <button class="inProg" data-id="{{id}}" data-newprog="{{prog}}">
  $(".inProg").on("click", function(e){
    e.preventDefault();
    let id = $(this).data("id");
    let newprog = $(this).data("newprog");
    // build the colValsObject:
    var newProgState = {
      inProg: newprog
    };
    // console.log(newProgState);
    //send to soiva
    $.ajax("/api/ufos/"+id, {
      type: "PUT",
      data: newProgState
    }).done(function(){
      console.log(`ufo progress changed to ${newprog}`);
      location.reload();
    }).fail(function(status, error){
      console.log(error);
    })
  })

  // <button class="deleteUfo" data-id="{{ this.id}}">
  $(".deleteUfo").on("click", function(e){
    e.preventDefault();
    let id = $(this).data("id");
    //send del req to the soiva. id will be the req.param.id
    $.ajax("/api/ufos/"+id,{
      type:"DELETE"
    }).then(function(){
      // console.log(`deleted ufo ${id}`);
      location.reload();
    })
  })
})