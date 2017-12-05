
window.addEventListener("load", init);

function init(){
    
    document.querySelector("#submitButton").addEventListener("click", getApi);
    
}

function getApi(evt){
    
    var checkField = true;
    var s = document.querySelector("#submitBox").value.trim();

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
                feedback = JSON.parse(xhr.responseText);
				print();
                // show(json);
            } 
          });

        xhr.open("GET",  getURL(), true);
        xhr.send();
    }
    evt.preventDefault();
}

function getURL(){
    
    var retrieved = document.querySelector("#submitBox");	
	var retrieveURL = "http://www.vam.ac.uk/api/json/museumobject/search?q=";
	var retrieveArray = retrieved.value.split(" ");
    
    if(retrieveArray != 0){
		for(var i = 0; i < retrieveArray.length; i++){
			retrieveURL += retrieveArray[i] + "+";
		}
        
		return retrieveURL;		
	}
	return "http://www.vam.ac.uk/api/json/museumobject";
}

function print(){

		var resultsDiv = document.getElementById("results");
		resultsDiv.innerHTML = "";
    
    var length = 15;
    
    for(var i = 0; i < length; i++){
        var newDiv = document.createElement("p");
        var title = document.createTextNode("Title: " + feedback.records[i].fields.title);
        var object = document.createTextNode("Object: " + feedback.records[i].fields.object);
        var artist = document.createTextNode("Artist: " + feedback.records[i].fields.artist);
        var date = document.createTextNode("Date: " + feedback.records[i].fields.date_text);
        
        newDiv.appendChild(title);
        newDiv.appendChild(document.createElement("br"));
        newDiv.appendChild(object);
        newDiv.appendChild(document.createElement("br"));
        newDiv.appendChild(artist);
        newDiv.appendChild(document.createElement("br"));
        newDiv.appendChild(date);
        resultsDiv.appendChild(newDiv);
    }
		
}

/*
function show(json){
    

    var i, obj;
    
	for(i = 0; i < json.records.length; i++){
        
        obj = json.records[i];
        
        var artist = obj.fields.artist;
        var title = obj.fields.title;
        var img = obj.fields.primary_image_id;

        console.log(artist);
        console.log(title);
        console.log(img); // piece together image url
        
        
        var img_url = "http://media.vam.ac.uk/media/thira/collection_images/"
                    + img.substr(0, 6) + "/"
                    + img + ".jpg";
                    + img + "_jpg_ds.jpg";
        
    var img = document.createElement("img");
         img.setAttribute("src", img_url);
    
        console.log(img_url);
	}
    
}
*/ 
