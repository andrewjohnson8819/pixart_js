var colorField = $("#color-field")
var setColor = $("#set-color")
var color

$(document).ready(function(){

  setColor.on("click",function(evt){
    evt.preventDefault()
    color = colorField.val()
    $(".brush").css("background", color)
  })

  for(i = 0; i<20; i++) {
    $("body").append($("<div class='square'/>"))
  }


})
