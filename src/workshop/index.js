 var myFunction = function() {
     console.log("JS File Loaded.");
     var list = document.getElementById("list");
     var elements = list.getElementsByTagName("li");
     console.log(elements);
     for(i=0;i<elements.length;i++){
     	var blue = 20*i;
     	var color = "rgb(60,60," + blue + ")";
     	elements[i].style.background = color; 
     }
 }