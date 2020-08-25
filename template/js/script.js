// Javascript template

var original_content;

function fade_in(){
  var elem = document.getElementById("sec1-lady");
  var parent = elem.parentElement;
  original_content = parent.innerHTML;


  var opacity = 0;
  var id = setInterval(fade, 0.1);
  function fade(){
    if (opacity >= 1){
      clearInterval(id);
    }
    else{
      opacity += 0.01;
      elem.style.opacity = opacity;
    }
  }
}

function slide_right() {
    var elem = document.getElementById("sec1-text");
    var pos = -50;
    var id = setInterval(frame, .00001);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.left = pos + '%'; 
      }
    }
  }
 
  function slide_left() {
    var elem = document.getElementById("sec1-text");
    var pos = 0;
    var id = setInterval(frame, .00001);
    function frame() {
      if (pos == -50) {
        clearInterval(id);
      } else {
        pos--; 
        elem.style.left = pos + '%';
      }
    }
  }
  
  function fade_out(){
    var elem = document.getElementById("sec1-lady");
    var opacity = 1;
    var id = setInterval(fade, 0.1);
    function fade(){
      if (opacity <= 0){
        clearInterval(id);
      }
      else{
        opacity -= 0.01;
        elem.style.opacity = opacity;
      }
    }
  }
  
  function t2_slide_right(){
    var elem = document.getElementById("sec2-text1");
    var pos = -60;
    var id = setInterval(frame, .00001);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.left = pos + '%'; 
      }
    }
  }

  function t3_fade_in(){
    var elem = document.getElementById("sec2-text2");
    var opacity = 0;
    var id = setInterval(fade, 0.1);
    function fade(){
      if (opacity >= 1){
        clearInterval(id);
      }
      else{
        opacity += 0.01;
        elem.style.opacity = opacity;
      }
    }
  }

  function t4_fade_in(){
    var elem = document.getElementById("sec2-button");
    var opacity = 0;
    var id = setInterval(fade, 0.1);
    function fade(){
      if (opacity >= 1){
        clearInterval(id);
      }
      else{
        opacity += 0.01;
        elem.style.opacity = opacity;
      }
    }
  }

  function logo_slide_left() {
    var elem = document.getElementById("sec2-logo");
    var pos = 50;
    var id = setInterval(frame, .00001);
    function frame() {
      if (pos <= 0) {
        clearInterval(id);
      } else {
        pos--; 
        elem.style.left = pos + '%';
      }
    }
  }

  function load_replay(){
    var elem = document.getElementById("sec2-replay");
    elem.style.visibility = "visible";
  }

  function reload(){
    var reload_button = document.getElementById("sec2-logo");
    var parent = reload_button.parentElement;
    var content = original_content;

    parent.innerHTML = content;

  }
