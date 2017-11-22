
window.addEventListener("load", init);

function init(){
    
    document.querySelector("#submit").addEventListener("click", pack);
    document.querySelector("#back2search").addEventListener("click", restart);
    
  
    document.querySelector(".loading").style.display = "none";
    document.querySelector(".api").style.display = "none";
    
    
    document.querySelector("#required").style.display = "none";
}

function pack(evt){
    fields_ok = true;
    
    document.querySelector(".searchva").style.display = "none";
    document.querySelector(".loading").style.display = "block";
    
    document.querySelector("#required").style.display = "none";
    
    var s = document.querySelector("#search").value.trim();
    
    if (s == 0){
		fields_ok = false;
		document.querySelector(".searchva").style.display = "block";
		document.querySelector(".loading").style.display = "none";
		document.querySelector("#required").style.display = "block";
    }
      /*if (fields_ok) {
      var data = "search=" + encodeURIComponent(s);
        console.log(data);
        */
        var url = "http://itsuite.it.brighton.ac.uk/rg425/assignment/search.php"; 
          
        var xhr = new XMLHttpRequest();
          
          xhr.addEventListener("load", function() {
              if (xhr.readystate == 4){
                  document.querySelector("#result").style.desplay = "none";
                  
                  if(xhr.status == 200) {
                      console.log(xhr);
                      console.log(xhr.responseText);
                      document.querySelector(".searchva").style.display = "none";
                      document.querySelector(".api").style.display = "block";
                  }
              }
          });

       /* xhr.addEventListener("load", function() {
            if (xhr.readyState == 4 && xhr.status == 200){
           var elem = document.querySelector("#result");
                elem.textContent = xhr.responseText;
            

        }*/
    
          
          xhr.open("POST", url, true);
          xhr.setRequestHeader("content-type", "application/x-www-form-urlendcoded");
          xhr.send(data);
           /* xhr.open("GET", "http://itsuite.it.brighton.ac.uk/rg425/ci227/assignment/search.php", true);
        xhr.send(data);*/
    evt.preventDefault();
    
}

function restart(){	
	document.querySelector(".searchva").style.display = "block";
	document.querySelector(".api").style.display = "none";
}
