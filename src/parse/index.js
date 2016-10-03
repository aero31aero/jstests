window.onload = function () {
    var hash = "4e5a77169fdc1eaa7a5f66d1ef2c7958760504e6ce1b2d31a9f59585bd13bc9a";
    var inputfield = document.getElementById('input-field');
    var inputholder = document.getElementById('repl');
    inputfield.addEventListener("keyup", function(){
        if(SHA256(inputfield.value.toUpperCase()) == hash){
            inputholder.style.background = "#115522";
        }
        else {
            inputholder.style.background = "#661111";
        }
    }); 
}
