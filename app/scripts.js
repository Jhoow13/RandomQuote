function randomColor() {
    var values = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += values[Math.floor(Math.random() * 16)];
    }
    return color;
}

var color = randomColor();
document.body.style.backgroundColor = color;
document.body.style.color = color;
document.querySelectorAll('.btn').forEach(function(itemBtn){itemBtn.style.backgroundColor = color});

function GenerateQuote() {
	var key = "omnQU3dPsemshJ2JB1phkoGkYPP1p1mHdNQjsnJhjV1QvYkJsc"
	var urlTeste = "https://andruxnet-random-famous-quotes.p.mashape.com/"
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
	    if (this.readyState == 4 && this.status == 200) {            
	        var teste = JSON.parse(xhttp.response);
	        document.querySelector('#quote').innerHTML = '"' + teste.quote + '"';
	        document.querySelector('#author').innerHTML = '- ' + teste.author;
	        document.querySelector('.loader').style.display = 'none'

	        document.querySelector("#tweet-button").setAttribute('href', '"https://twitter.com/intent/tweet?hashtags=quotes&text='+ encodeURIComponent(teste.quote+ ' - ' + teste.author));
	    }
	};
	xhttp.open("GET", urlTeste, true);
	xhttp.setRequestHeader('X-Mashape-Key', key);
	xhttp.send(); 
}

GenerateQuote();
