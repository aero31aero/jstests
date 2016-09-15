var angle = 0;

var getCurrentDay = function() {
  var days = document.getElementsByClassName('circle-day');
  for (var i = 0; i < days.length - 1; i++) {
    if (days[i].classList.contains('circle-day-active')) {
      return i;
    }
  }
};

var gotoDay = function(currentDay, comingDay) {
  var circletext = document.getElementById('circle-text');
  var comingDate = comingDay + 14;
  circletext.innerHTML = comingDate + "th October";
  var days = document.getElementsByClassName('circle-day');
  var direction = currentDay - comingDay == 1 || comingDay - currentDay == 2 ? 1 : -1;
  angle += direction * Math.abs(currentDay - comingDay) * 90;
  console.log("Angle:", angle, "Now:", currentDay, "Next:", comingDay);
  days[currentDay].classList.remove('circle-day-active');
  days[comingDay].classList.add('circle-day-active');
  $('#circle-container').animate({
    rotation: angle
  }, {
    duration: 600,
    step: function(now, fx) {
      $(this).css({
        "transform": "rotate(" + now + "deg)"
      });
    }
  });
};

var previousDay = function() {
  var currentDay = getCurrentDay();
  var comingDay = (3 + currentDay - 1) % 3;
  console.log('Day: Previous');
  gotoDay(currentDay, comingDay);
};

var nextDay = function() {
  var currentDay = getCurrentDay();
  var comingDay = (3 + currentDay + 1) % 3;
  console.log('Day: Next');
  gotoDay(currentDay, comingDay);
};

window.setInterval(function() {
  //nextDay();
}, 2500);

document.addEventListener('keyup', function doc_keyUp(e) {
  if (e.ctrlKey && e.keyCode == 37) {
    previousDay();
  }
  if (e.ctrlKey && e.keyCode == 39) {
    nextDay();
  }
}, false);