window.onload = function () {
    function resize(elem) {
        var val = parseFloat(elem.style.top);
        if (true) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    };
    //    $('#content-1').resizable();
    //    $('#content-1').handle = $('#draggable');
    $('#draggable').draggable({
        axis: 'y',
        containment: 'parent',
        helper: 'clone',
        drag: function (event, ui) {
            document.getElementById('content-1').style.height;
            console.log("Me being dragged");
            console.log(event);
            
            console.log(event.clientY);
            console.log(event.pageY);
        }
    });
}
