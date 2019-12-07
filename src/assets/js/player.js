var vid = document.getElementById("myVideo"); 

function playVid() { 

  if(vid.paused){
    vid.play();
    $( "#myVideo" ).click( "bg-play", function() {
      $( ".btn-play" ).hide();
      $(".title-video").hide();
    });
  }else {
    vid.pause();
    $( "#myVideo").click( function() {
      $( ".btn-play" ).show();
    });
  }
} 

