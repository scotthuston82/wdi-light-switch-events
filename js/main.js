var light = document.querySelector('.switch');
var notstatus = document.querySelector('.status');
var body = document.querySelector('.light');



light.addEventListener('click', function(){
  body.classList.toggle('light');
  body.classList.toggle('dark');
  light.classList.toggle('on');
  light.classList.toggle('off');
  if(body.classList === 'light'){
    notstatus.innerText = "It's so bright in here!";
  } else {
    notstatus.innerText = "who turned out the lights?";
  }
});
