function go(text,language) {

	var element = document.getElementById("output");
	var text = text.value;
	var language = language.value;
	var table = text.split(" ");
	alert(language)

	if(language == 'en'){
		alert("This language doesnt exists yet."+
			"\n"+"Choose another language, please.")
		return;
	}

	var file = eval(language);
	for (var x = 0; x < table.length; x++) { 
    	for (var y = 0; y < file.length; y++){
    		if(table[x].toLowerCase() == file[y][0].toLowerCase()){
    			var input = prompt("\""+file[y][0]+"\""+
    				" burde byttes ut med ett av følgende:"
    				+"\n"+file[y].slice(1, file[y].lenght, ), file[y][1])
        		table[x] = input
    		}
    	}	
	}
	var text = table.join(' ');
	text = text.replace(/\s+/g, " ");
    document.getElementById("output").innerHTML = text.trim();
}

function feedback(text) {
	var text = text.value

	alert("Message sent:"+"\n"+text)
	alert("Tulla, Marcus har ikke fikset dette enda..")

}