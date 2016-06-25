window.onload = function () {
    var body = document.getElementById("container");

    function insertletter(letter) {
        var newElement = '<div class="card-holder"> <div class = "card-container" ontouchstart = "this.classList.toggle(\'hover\');" ><div class = "card" ><div class = "front" style="' + getColorStyle() + '"><p class = "letter">' + letter + '</p> </div> <div class = "back" >' + getRandomImage() + '</div> </div> </div> </div>';
        body.innerHTML += newElement;
    }

    function getColorStyle() {
        var baseColor = Math.floor(Math.random() * 360);
        var color = "background-color: hsl(" + baseColor + ",80%,50%)";
        return color;
    }

    function getRandomImage() {
        var imageNumber = Math.ceil(Math.random() * 7);
        var image = '<img src="img' + imageNumber + '.jpg" class="back-image">';
        return image;
    }
    
    function fadeIn(el, display) {
        el.style.opacity = 0;
        el.style.display = display || "block";
        (function fade() {
            var val = parseFloat(el.style.opacity);
            if (!((val += .008) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    }
    
    function fadeOut(el) {
        el.style.opacity = 1;
        (function fade() {
            if ((el.style.opacity -= .004) < 0) {
                el.style.display = "none";
            } else {
                requestAnimationFrame(fade);
            }
        })();
    }
    
    function flashText(text){
        var newdiv=document.createElement('div');
        var textarea=document.getElementById('textarea');
        newdiv.innerHTML='<p class="quote">'+text+'</p>';
        textarea.appendChild(newdiv);
        fadeOut(newdiv);
    }
    
    var quotes = [];
    insertletter('H');
    insertletter('A');
    insertletter('P');
    insertletter('P');
    insertletter('Y');
    insertletter('B');
    insertletter('I');
    insertletter('R');
    insertletter('T');
    insertletter('H');
    insertletter('D');
    insertletter('A');
    insertletter('Y');
    insertletter('N');
    insertletter('I');
    insertletter('S');
    insertletter('C');
    insertletter('H');
    insertletter('A');
    insertletter('Y');
    fadeIn(document.getElementById('container'));
    quotes.push("This is SHITCODE!");
    quotes.push("Weak Encrytion KILLS!");
    quotes.push("Get me a CREAMROLL!");
    quotes.push("I will KILL YOU!");
    quotes.push("Done it all at NARAYANA!");
    quotes.push("Get me TWO creamrolls!");
    quotes.push("Commmit the Bitch!");
    quotes.push("Fuck this, I'll write ASSEMBLY.");
    quotes.push("var shit1,shit2,newshit;");
    quotes.push("My surname is not PRO");
    quotes.push("We'll take over the world!");
    quotes.push("AAAAAH. ORGASM BITCH!");
    setInterval(function(){
        var num = Math.floor(Math.random()*quotes.length);
        console.log(num)
        flashText(quotes[num]);
    },5000);
    
}
