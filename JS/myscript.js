function multiplyBy() { 
	var rgbValue = []; 
	var number = true;
	var hexValue = document.getElementById("hex").value; 
	if ( hexValue.length === 6 || hexValue.length === 3){
		if( hexValue.length === 3){
			// say hi
		}
		for(var i = 0 ; i < 3 ; i++)
		{	 
			var convertedHex = parseInt((hexValue[i*2]+hexValue[(i*2)+1]), 16); 
			if (!isNaN(convertedHex)){
			 rgbValue[i] = convertedHex;
			}else{
				number = false;
			}
		}
		if( number === true){
			document.getElementById("rgb").value = "rgb( " + rgbValue + ")";
			document.body.style.backgroundColor = '#' + hexValue;
			// var myDiv = document.getElementsByClassName("container")[0];
			// myDiv.style.backgroundColor = '#' + hexValue;
		}
		else{
			document.getElementById("rgb").value = " ";
		}
	}else{
		document.getElementById("rgb").value = " ";
	} 
} 