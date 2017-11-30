
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
                console.log(xhr.responseText);
                var json = JSON.parse(xhr.responseText);
                console.log(json);
                show(json);
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
			searchURL += encodeURIComponent(searchArray[i]) + "+";
		}
		console.log(searchURL);

        searchURL += "&images=1";
        
		return searchURL;		
	}
	return "http://www.vam.ac.uk/api/json/museumobject";
}

function print(){
    
    var resultsDiv = document.getElementById("result");
    
	var length = 15;
	
	for(var i = 0; i < length; i++){
		
		var r = document.createElement("div");
        var title = document.createTextNode("Title: " + response.records[i].fields.title);
		var object = document.createTextNode("Object: " + response.records[i].fields.object);
		var artist = document.createTextNode("Artist: " + response.records[i].fields.artist);
		var date = document.createTextNode("Date: " + response.records[i].fields.date_text);
		// var rTitle = document.createElement("p");
		// var rDate = document.createElement("p");
        
        var img = document.createElement("img");
        img.setAttribute("src", img_url);
        
		
		// rTitle.textContent = response.records[i].fields.title;
		// rDate.textContent = response.records[i].fields.date_text;
		
		r.appendChild(title);
		r.appendChild(object);
		r.appendChild(artist);
		r.appendChild(date);
        
		
        resultsDiv.appendChild(r);
        
        //var t = document.querySelector("#results");
		//t.appendChild(r);
		
		
		
	}
}



function show(json){
    
/*    var resultsDiv = document.getElementById("result");
    
    var length = 15;
    
    for(var i = 0; i < length; i++){
        var newP = document.createElement("p");
        newP.classList.add("fitPara");
        var title = document.createTextNode("Title: " + response.records[i].fields.title);
        var object = document.createTextNode("Object: " + response.records[i].fields.object);
        var artist = document.createTextNode("Artist: " + response.records[i].fields.artist);
        var date = document.createTextNode("Date: " + response.records[i].fields.date_text);
        newP.appendChild(title);
        newP.appendChild(object);
        newP.appendChild(artist);
        newP.appendChild(date);
        resultDiv.appendChild(newP);
    }
    */
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
        
      //   var img = document.createElement("img");
      //img.setAttribute("src", img_url);
        
        console.log(img_url);
	}
    
}
