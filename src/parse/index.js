window.onload = function () {
    var hash = "68e8a3148fb1580747bbeeed2603df8f95f364b8354f850dad746875befdff53";
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
