var vid = document.getElementById("myVideo"); 

function playVid() { 

  if(vid.paused){
    vid.play();
    $( ".btn-play" ).on( "click", function() {
      $( this ).css("opacity", "0");
    });
  }else {
    vid.pause();
    $( ".btn-play").on( "click", function() {
      $( this ).css("opacity", "1")
    });
  }
} 

