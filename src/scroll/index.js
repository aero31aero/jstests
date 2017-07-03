window.onload = function () {
    function animateMain(callback){
        var elem = document.getElementById("main");
        var pos = 1000;
        var id = setInterval(frame, 10);
        function frame() {
            if (pos == 700) {
                clearInterval(id);
                callback();
            } else {
                pos-=1;
                elem.style.background = "rgba(0,0,0," + pos/1000 + ")";
            }
        }
        return 3;
    }

    function getSequence(){
        var timeperanimation = timeperline/5;
        timeperanimation = timeperanimation * 1000; //seconds
        var sequence = [];

        sequence.push({
            selector: "#main",
            css: { opacity: 1 },
            animate: { opacity: 0.7 },
            duration: 3000,
        })
        text.forEach(function(line){
            sequence.push({
                selector: "#text",
                content: line,
                css: { opacity: 0 },
                animate: { opacity: 1 },
                duration: timeperanimation,
                pause: timeperanimation*2,
            });
            sequence.push({
                selector: "#text",
                animate: { opacity: 0 },
                duration: timeperanimation,
                pause: timeperanimation,
            })
        });
        sequence.push({
            selector: "#main",
            css: { opacity: 0.7 },
            animate: { opacity: 1 },
            duration: 3000,
        })
        return sequence;
    }

    var audio = new Audio('audio.mp3');
    var audio = document.getElementById('music');
    audio.play();
    var totaltime = audio.duration - 10;
    var text = [
                'Once upon a time',
                'there was a laptop that wasn\'t fine',
                'that needed some fixing',
                'whose processor was whirring',
                'crying loudly in pain',
                'cause a virus was in its core',
                'executing instructions insane',
                'Out came a ninja!',
                'His name was Nischay Pro',
                'Line 2c',
                'Line 3c',
                'Line 4c',
                'Line 1d',
                'Line 2d',
                'Line 3d',
                'Line 4d',
                'Line 1e',
                'Line 2e',
                'Line 3e',
                'Line 4e',
                'Line 1f',
                'Line 2f',
                'Line 3f',
                'Happy Birthday Nischay',
                ]
    var lines = text.length;
    var timeperline = totaltime/lines;
    console.log(timeperline);
    var animatetime = timeperline/5;
    var curtext = 0;
    console.log("Working now");
    var sequence = getSequence();
    console.log(sequence);
    $('body').titleSequence(sequence);
}
