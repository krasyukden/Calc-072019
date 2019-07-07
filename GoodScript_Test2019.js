var res = 0;

document.getElementsByName("submit")[0].onclick = function() {
	getResult("2");
}

function getResult(result) {
//function getVariant(variant) {
	if (document.getElementsByName("link")[0].checked === true) {
		res += 20;
	alert(res);
	}
	if (document.getElementsByName("list")[2].checked === true) {
	res += 20;
	alert(res);
	
	}
	if (document.getElementsByName("browser")[3].checked === true) {
		res += 20;
		alert(res);
		
	}	
	if (document.getElementsByName("table")[0].checked === false && document.getElementsByName("table")[1].checked === true && document.getElementsByName("table")[2].checked === true && document.getElementsByName("table")[3].checked === false) {
	res += 20;
	alert(res);
	}
	if (document.getElementsByName("form")[0].checked === true && document.getElementsByName("form")[1].checked === true && document.getElementsByName("form")[2].checked === false && document.getElementsByName("form")[3].checked === false) {
	res += 20;
	alert(res);
	}	
		
	alert("Результат: " + res + " %");
}


