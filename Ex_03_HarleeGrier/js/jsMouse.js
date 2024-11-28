console.log("hello")

$("#reset").hide();

$("#happy-1").css("background-color", "#FFFF00");
$("#happy-1").css("color", "#0000FF");
$("#sad-2").css("background-color", "#0000FF");
$("#sad-2").css("color", "#FFFF00");
$("#angry-3").css("background-color", "#FF0000");
$("#angry-3").css("color", "#00FFFF");
$("#disgusted-4").css("background-color", "#008000");
$("#disgusted-4").css("color", "#800080");
$("#scared-5").css("background-color", "#000000");
$("#scared-5").css("color", "#ffffff");

$("#reset").css("color", "#000000");

$("#ream").on("click", function(){
    console.log("inserted mouse! ready to play!")
    $("#mouse").before("<h2>Mouse</h2>")
    $("#mouse").html("<img src='images/mouse-01.png'>");
    // $("#mouse").css("background-image", "url('images/mouse_Happy-Dancingcopy.png')");
    if ( timesClicked >= 2 ) {
        $("#ream").unbind();
      }
})
$("#happy-1").on("click", function(){
    $("#ream").hide();
    console.log("clicked on happy")
    $("#mouse").before("<h2>Happy Mouse</h2>")
    $("#mouse").html("<img src='images/mouse_Happy-Dancing.gif'>");
    // $("#mouse").css("background-image", "url('images/mouse_Happy-Dancingcopy.png')");
    alert("CLick Y for a yellow background");
    if ( timesClicked >= 2 ) {
        $("#happy-1").unbind();
      }
})

$("#sad-2").on("click", function(){
    $("h2").remove();
    console.log("clicked on sad")
    $("#mouse").before("<h2>Sad Mouse</h2>")
    $("#mouse").html("<img src='images/mouse_Sad.gif'>");
    alert("CLick B for a blue background");
    if ( timesClicked >= 2 ) {
        $("#sad-2").unbind();
      }
})

$("#angry-3").on("click", function(){
    $("h2").remove();
    console.log("clicked on angry")
    $("#mouse").before("<h2>Angry Mouse</h2>")
    $("#mouse").html("<img src='images/mouse_Angry.gif'>");
    $("#ream").remove();
    alert("CLick R for a red background");
    if ( timesClicked >= 2 ) {
        $("#angry-3").unbind();
      }
})

$("#disgusted-4").on("click", function(){
    $("h2").remove();
    console.log("clicked on disgust")
    $("#mouse").before("<h2>Disgusted Mouse</h2>")
    $("#mouse").html("<img src='images/mouse_Disgusted.png'>");
    alert("CLick G for a green background");
    if ( timesClicked >= 2 ) {
        $("#disgusted-4").unbind();
      }
})

$("#scared-5").on("click", function(){
    $("h2").remove();
    $("#reset").show();
    console.log("clicked on scared")
    $("#mouse").before("<h2>Scared Mouse</h2>")
    $("#mouse").html("<img src='images/mouse_Scared.gif'>");
    alert("CLick W for a black background");
    if ( timesClicked >= 2 ) {
        $("#scared-5").unbind();
      }
})

$("#reset").on("click", function(){
    $("#mouse").html("Insert Mouse")
    $("h2").hide();
    $("#reset").hide();
    console.log("clicked on reset")
    $("img").hide();
    $("#big-back").css("background", "linear-gradient(150deg, rgba(141,113,161,1) 0%, rgba(252,163,211,1) 50%, rgba(127,203,255,1) 100%)")
    if ( timesClicked >= 2 ) {
        $("#reset").unbind();
      }
})

$("#mouse").on("click", function(){
    $("#mouse").before("<h2>Mouse</h2>")
    $("#mouse").html("<img src='images/mouse-01.png'>");
    if ( timesClicked >= 2 ) {
        $("#mouse").unbind();
      }
})

//keypress for colors
$(document).on("keypress", function (h) {
    console.log(h.key)
    if (h.key == "y") {
        $("#big-back").css("background", "rgb(243,209,4)")
    }
})

$(document).on("keypress", function (s) {
    console.log(s.key)
    if (s.key == "b") {
        $("#big-back").css("background", "rgb(100,149,237)")
    }
    
})

$(document).on("keypress", function (d) {
    console.log(d.key)
    if (d.key == "g") {
        $("#big-back").css("background", "rgb(73,156,68)")
    }
    
})

$(document).on("keypress", function (a) {
    console.log(a.key)
    if (a.key == "r") {
        $("#big-back").css("background", "rgb(255,57,67)")
    }   
})

$(document).on("keypress", function (p) {
    console.log(p.key)
    if (p.key == "w") {
        $("#big-back").css("background", "rgb(16,16,16)")
    }
    
})