
window.addEventListener("load", init);

/*function init(){
    
    document.querySelector("submit").addEventListener("click", pack);
    
  
    document.querySelector(".loading").style.display = "none";
    document.querySelector(".success").style.display = "none";
    document.querySelector(".error").style.display = "none";
}

function pack(evt){
    fields_ok = true;
    
    document.querySelector(".searchva").style.display = "none";
    document.querySelector(".loading").style.display = "block";
    
    var s = document.querySelector("#search").value.trim();
    
    if (fields_ok) {
        var data = "search=" + encodeURIComponent(s);
        console.log(data);
*/        
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("load", function() {
            if (xhr.readyState == 4 && xhr.status == 200){
           var elem = document.querySelector("#result");
                elem.textContent = xhr.responseText;
            
            
    }
});
        xhr.open("GET", "http://itsuite.it.brighton.ac.uk/rg425/ci227/assignment/search.php", true);
        xhr.send();
    }
    evt.preventDefault();
    
}




