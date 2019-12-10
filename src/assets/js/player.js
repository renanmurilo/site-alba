var vid = document.getElementById("myVideo"); 

function playVid() { 

  if(vid.paused){
    vid.play();
  }else {
    vid.pause();
  }
} 

function goPlay() {

  if(vid.paused){
    vid.play();
    $('#veja3 .container').css('opacity', '0');
    $('ul .numero').hide();
    $('#myVideo').css('opacity', '1');
  } else {
    vid.pause();
    $('#veja3 .container').css('opacity', '1');
    $('ul .numero').show();
    $('#myVideo').css('opacity', '0');
  }
}

