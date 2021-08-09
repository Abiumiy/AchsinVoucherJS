let copybtn = document.querySelector(".copybtn");


function copyIt(){
  let copyInput = document.querySelector('#copyvalue');

  copyInput.select();

  document.execCommand("copy");

  copybtn.textContent = "COPIED";
}



let copybtn2 = document.querySelector(".copybtn2");


function copyIt2(){
  let copyInput = document.querySelector('#copyvalue2');

  copyInput.select();

  document.execCommand("copy");

  copybtn2.textContent = "COPIED";
}




let copybtn3 = document.querySelector(".copybtn3");


function copyIt3(){
  let copyInput = document.querySelector('#copyvalue3');

  copyInput.select();

  document.execCommand("copy");

  copybtn3.textContent = "COPIED";
}



let copybtn4 = document.querySelector(".copybtn4");


function copyIt4(){
  let copyInput = document.querySelector('#copyvalue4');

  copyInput.select();

  document.execCommand("copy");

  copybtn4.textContent = "COPIED";
}

