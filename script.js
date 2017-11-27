
window.addEventListener("load", init);

function init(){
    
    document.querySelector("#submitButton").addEventListener("click", getApi);
  
 //   document.querySelector(".loading").style.display = "none";
    
}

function getApi(evt){
    
    var checkField = true;
    var s = document.querySelector("#submitBox").value.trim();
   // document.querySelector(".loading").style.display = "block";

    if (s == 0){
        checkField = false;
        var a = document.querySelector("#submitBox");
        a.setAttribute("placeholder", "enter search");
    }
    
    if (checkField){
    
        var xhr = new XMLHttpRequest();
          xhr.addEventListener("load", function(){
             if(xhr.readyState ===4 && xhr.status===200)
            {
                console.dir(xhr)
                console.log(xhr.responseText);
                response = JSON.parse(xhr.responseText);
                
                console.log("total results: " + responce.meta.result_count);
                console.log("");
                
                log();
                show();
            } 
          });

        xhr.open("GET",  getURL(), true);
        xhr.send();
    }
    evt.preventDefault();
}

function getURL(){
    
    var searched = document.querySelector("#submitBox");	
	var searchURL = "http://www.vam.ac.uk/api/json/museumobject/search?q=";
	var searchArray = searched.value.split(" ");
	console.log("Search value: " + searched.value);
	console.log(searchArray);
    
    if(searchArray != 0){
		for(var i = 0; i < searchArray.length; i++){
			searchURL += searchArray[i] + "+";
		}
		console.log(searchURL);
		return searchURL;		
	}
	return "http://www.vam.ac.uk/api/json/museumobject";
}

function log(){
	var length = 15;
	
	for(var i = 0; i < length; i++){
		
		var r = document.createElement("div");
		var rTitle = document.createElement("p");
		var rDate = document.createElement("p");
		
		rTitle.textContent = response.records[i].fields.title;
		rDate.textContent = response.records[i].fields.date_text;
		
		r.appendChild(rTitle);
		r.appendChild(rDate);
		
		var t = document.querySelector("#results");
		t.appendChild(r);
		
		
		
		
		console.log("Result: " + (i+1));
		console.log("Title: " + response.records[i].fields.title);
		console.log("Object: " + response.records[i].fields.object);
		console.log("Artist: " + response.records[i].fields.artist);
		console.log("Date: " + response.records[i].fields.date_text);
		console.log("");
	}
}

function show(){
    
    
}
