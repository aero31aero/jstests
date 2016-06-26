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

        function fade() {
            if ((el.style.opacity -= .004) < 0) {
                el.style.display = "none";
                var num = Math.floor(Math.random() * quotes.length);
                console.log(num)
                flashText(quotes[num]);
            } else {
                requestAnimationFrame(fade);
            }
        };
        fade();
    }

    function flashText(text) {
        var newdiv = document.createElement('div');
        var textarea = document.getElementById('textarea');
        newdiv.innerHTML = '<p class="quote">' + text + '</p>';
        textarea.appendChild(newdiv);
        fadeOut(newdiv);
    }

    function insertWords(words) {
        words = words.split('');
        words.forEach(function (elem, index) {
            insertletter(elem);
        });
    }

    var quotes = [];
    insertWords('HAPPYBIRTHDAYNISCHAY');
    fadeIn(document.getElementById('container'));
    quotes.push("This is SHITCODE!");
    quotes.push("Weak Encrytion KILLS!");
    quotes.push("Get me a CREAMROLL!");
    quotes.push("I will KILL YOU!");
    quotes.push("Done it all at NARAYANA!");
    quotes.push("Get me TWO creamrolls!");
    quotes.push("Commmit the code!")
    setTimeout(function () {
        flashText("Stuff that Nischay says...");
    }, 5000);
}
