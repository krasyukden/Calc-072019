
var tmp = 0;
var newNum = false;// ???
var nextOperation = "";

function butt(num) { 
	if (newNum) { // ??
        document.getElementsByName("inp")[0].value = num;
        newNum = false;// ?? Выпол 1 раз
    }	
    else {
        if (document.getElementsByName("inp")[0].value == "0") {
            document.getElementsByName("inp")[0].value = num;
        }
        else {
            document.getElementsByName("inp")[0].value += num;
        }
    }
	
}
function getOperation(oper) {
	
  if (!newNum) {
  	switch(nextOperation) {
		// switch(oper) ???
		case "+":
				
		//document.getElementsByName("inp")[0].value = "";
		tmp += +document.getElementsByName("inp")[0].value;
		document.getElementsByName("inp")[0].value = tmp;
		break;
		
		case "-":
		tmp -= +document.getElementsByName("inp")[0].value;
		document.getElementsByName("inp")[0].value = tmp;
		break;
		case "*":
		tmp *= +document.getElementsByName("inp")[0].value;
		document.getElementsByName("inp")[0].value = tmp;
		break;
		case "/":
		tmp /= +document.getElementsByName("inp")[0].value;
		document.getElementsByName("inp")[0].value = tmp;
		break;
		
		case "=":
		document.getElementsByName("inp")[0].value = tmp;
		break;
		
		/*case "C":
		document.getElementsByName("inp")[0].value = "0";
		tmp = 0;
		oper = "";
		nextOperation = "";
		newNum = true;
		break;
		  НЕ удаляет ???    */ 
		
	}
	
  }		
	nextOperation = oper;// ?
	newNum = true;// ?
	tmp = +document.getElementsByName("inp")[0].value;
	if (document.getElementsByName("inp")[0].value === "Infinity") {
        document.getElementsByName("inp")[0].value = "А на ноль делить нельзя!";  
    }
  
 }
function clean() {
	document.getElementsByName("inp")[0].value = "0";
		tmp = 0;
		oper = "";
		nextOperation = "";
		newNum = true;
}	
function getDot() {
	
	if (document.getElementsByName("inp")[0].value.indexOf(".") == -1) {  //indexOf(".") == -1, т.е. отсут . в массиве
		document.getElementsByName("inp")[0].value += ".";
	}
	else {
		
	}
}

function getNeg() {
	document.getElementsByName("inp")[0].value *= -1;
}
document.getElementsByName("+")[0].onclick = function() {
	getOperation("+");
}	
document.getElementsByName("-")[0].onclick = function() {
	getOperation("-");	
}
document.getElementsByName("*")[0].onclick = function() {
	getOperation("*");	
}
document.getElementsByName("/")[0].onclick = function() {
	getOperation("/");	
}

document.getElementsByName("C")[0].onclick = function() {
	clean("C");	
}		
document.getElementsByName("=")[0].onclick = function() {
	getOperation("=");	
}
document.getElementsByName("dot")[0].onclick = function() {
	getDot(); 
}
document.getElementsByName("+-")[0].onclick = function() {
	getNeg(); 
}
			
document.getElementsByName("1")[0].onclick = function() {
	butt(1);
}
document.getElementsByName("2")[0].onclick = function() {
	butt(2);
}
document.getElementsByName("3")[0].onclick = function() {
	butt(3);
}
document.getElementsByName("4")[0].onclick = function() {
	butt(4);
}
document.getElementsByName("5")[0].onclick = function() {
	butt(5);
}
document.getElementsByName("6")[0].onclick = function() {
	butt(6);
}
document.getElementsByName("7")[0].onclick = function() {
	butt(7);
}
document.getElementsByName("8")[0].onclick = function() {
	butt(8);
}
document.getElementsByName("9")[0].onclick = function() {
	butt(9);
}
document.getElementsByName("0")[0].onclick = function() {
	butt(0);
}	