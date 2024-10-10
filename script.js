

var sidemenu=document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right='0';
}
function closemenu(){
  sidemenu.style.right='-200px';
}
var tablinks=document.getElementsByClassName("tablink");
var tabcontents=document.getElementsByClassName("content");
function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("activelink");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("activetab");
  }
  event.currentTarget.classList.add("activelink");
  document.getElementById(tabname).classList.add("activetab");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxOOaD3fxICSgw0PjEB69KXoURo2OiBMNe2YWfQi5KT2LSw6f7J2XotMobAt6C5xn95/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg");


  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully";
        setTimeout(function(){
          msg.innerHTML=""
        },1000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })