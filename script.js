document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded() {
  //BMI Calculator
  document.getElementById("submit").addEventListener("click", bmiCalculator);
  function bmiCalculator() {
    var cm = parseInt(document.getElementById("cm").value);
    var kg = parseFloat(document.getElementById("kg").value);

    var bmi;
    var newCm = parseFloat(cm / 100);

    bmi = kg / (newCm * newCm);
    bmi = bmi.toFixed(1);

    var displayMessage = document.createElement("p");
    displayMessage.innerHTML = "Your BMI value is: " + bmi;
    document.getElementById("bmiCalculator").appendChild(displayMessage);
    document.getElementById("result").style.backgroundColor = 'yellow';

  }



	//Displaying a Chuck Norris joke
	var getJokes = function() {
		$.ajax({
			url: "http://api.icndb.com/jokes/random/",
			method: "GET",
			success: manageData
		})
	}
	$('#jokeButton').on('click', function() {
		getJokes();

	})
	function manageData (data) {
		$("#joke").html(renderHtml(data));
		console.log('data', data)
	}
	function renderHtml(data) {
		$("#joke").css('background-color', 'yellow');
		var html = `<p>`
	     html += data.value.joke
	     html += `</p>`
	    return html;
	}


}


//Currency converter
function eurfunc() {
  var gbp = document.getElementById("GBP");
  var ron = document.getElementById("RON");
  var usd = document.getElementById("USD");
  var eur = document.getElementById("EUR");

  gbp.setAttribute('value', parseFloat(eur.value) * 0.89);
  ron.setAttribute('value', parseFloat(eur.value) * 4.67);
  usd.setAttribute('value', parseFloat(eur.value) * 1.15); 
}
function ronfunc() {
  var gbp = document.getElementById("GBP");
  var ron = document.getElementById("RON");
  var usd = document.getElementById("USD");
  var eur = document.getElementById("EUR");

  eur.setAttribute('value', parseFloat(ron.value) * 0.21);
  gbp.setAttribute('value', parseFloat(ron.value) * 0.19);
  usd.setAttribute('value', parseFloat(ron.value) * 0.25); 
}
function gbpfunc() {
  var gbp = document.getElementById("GBP");
  var ron = document.getElementById("RON");
  var usd = document.getElementById("USD");
  var eur = document.getElementById("EUR");

  eur.setAttribute('value', parseFloat(gbp.value) * 1.13);
  ron.setAttribute('value', parseFloat(gbp.value) * 5.27);
  usd.setAttribute('value', parseFloat(gbp.value) * 1.30); 
}
function usdfunc() {
  var gbp = document.getElementById("GBP");
  var ron = document.getElementById("RON");
  var usd = document.getElementById("USD");
  var eur = document.getElementById("EUR");

  eur.setAttribute('value', parseFloat(usd.value) * 0.87);
  ron.setAttribute('value', parseFloat(usd.value) * 4.06);
  gbp.setAttribute('value', parseFloat(usd.value) * 0.77); 
}

