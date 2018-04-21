/*  
=
ids  ---myInput for input field    && add ---for submit button
classes --- ul ---list-group


*/

const submit = document.getElementById('add');


submit.addEventListener('click', function(){
	
	const success  = document.getElementById('success');
	const input = document.getElementById('myInput').value;
	const ul = document.getElementById('myUl');
	const li = document.createElement('li');
	li.className ='list-group-item';
	const text = document.createTextNode(input);
	console.log(text);
	li.appendChild(text);

	if (input === ''){
		alert('You must fill out this section')
	}
	else{
		ul.appendChild(li);
	}
	
	document.getElementById('myInput').value = "";

	const span = document.createElement('span');
	const ex = document.createTextNode('\u00D7');
	span.appendChild(ex);
	span.className = 'close';
	li.appendChild(span);

	const close = document.getElementsByClassName('close');

	for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var closeIt = this.parentElement;
      closeIt.style.display = "none";
      success.style.display = 'block';
      

     
      $('#success').delay(2000).hide(2000);
      


    }
  }


});

function startTime(){

const success  = document.getElementById('success');
const fail = document.getElementById('fail');


var countdown = 1 * 60 * 1000;
var timerId = setInterval(function(){
  countdown -= 1000;
  var min = Math.floor(countdown / (60 * 1000));
  //var sec = Math.floor(countdown - (min * 60 * 1000));  // wrong
  var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);  //correct

  if (countdown <= 0) {
     fail.style.display = 'block';
     $('#fail').slideUp(2000);
     console.log('bob')
     clearInterval(timerId);
     $("#countTime").html('Start Again').delay(2000);
      location.reload(2000);
     //doSomething();
  } else {
     $("#countTime").html(min + " : " + sec);
  }

}, 1000); //1000ms. = 1sec.
}

const start = document.getElementById('start');
start.addEventListener('click', function(){
	startTime();

});

//  This is the script for the increase and decrease in the number



 var number = 0;
      function increase(){
            var textBox = document.getElementById("points");
            textBox.value = number;
            number++;
      }    

       function decrease(){
            var textBox = document.getElementById("points");
            textBox.value = number;
            number--;
      }  


