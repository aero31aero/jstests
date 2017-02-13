window.onload = function () {
    var hash = "0917b13a9091915d54b6336f45909539cce452b3661b21f386418a257883b30a";
    var inputfield = document.getElementById('input-field');
    var inputholder = document.getElementById('repl');
    inputfield.addEventListener("keyup", function(){
        if(SHA256(inputfield.value.toUpperCase()) == hash){
            inputholder.style.background = "#115522";
        }
        else if(inputfield.value.length==0) {
            inputholder.style.background = "#000000";
        }
        else {
            inputholder.style.background = "#661111";
        }
    }); 
}
