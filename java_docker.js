function docker(){
	var i = document.getElementById("command").value;
	var req = new XMLHttpRequest();
	req.open("GET", "http://192.168.29.230/cgi-bin/js.py?s=" + i, true);

	req.send();

	req.onload = function (){
		
		var output = req.responseText;
		document.getElementById("d1").innerHTML = output;
	}
}

