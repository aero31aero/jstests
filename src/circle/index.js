var time = 36;

var getCurrentDay = function() {
  var days = document.getElementsByClassName('circle-day');
  for (var i = 0; i < days.length - 1; i++) {
    if (days[i].classList.contains('circle-day-active')) {
      return i;
    }
  }
};

var updateText = function (time) {
  var circletext = document.getElementById('circle-text');
  var date = Math.floor(time/24) + 14;
  var hour = time%24;
  circletext.innerHTML = date + "th October, " + hour;
}

var switchActiveDay = function(currentDay,comingDay){
  var days = document.getElementsByClassName('circle-day');
  days[currentDay].classList.remove('circle-day-active');
  days[comingDay].classList.add('circle-day-active');
}

var gotoDay = function(currentDay, comingDay) {
  updateText(comingDay*24);
  var angle;
  var direction = currentDay - comingDay == 1 || comingDay - currentDay == 2 ? 1 : -1;
  // angle += direction * Math.abs(currentDay - comingDay) * 90;
  // console.log("Angle:", angle, "Now:", currentDay, "Next:", comingDay);
  switch(comingDay){
    case 0:
      angle = 90;
      break;
    case 1:
      angle = 0;
      break;
    case 2:
      angle = -90;
      break;
  }
  switchActiveDay(currentDay,comingDay);
  rotate(angle);
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

document.addEventListener('keyup', function doc_keyUp(e) {
  if (e.ctrlKey && e.keyCode == 37) {
    previousDay();
  }
  if (e.ctrlKey && e.keyCode == 39) {
    nextDay();
  }
  if (e.ctrlKey && e.keyCode == 38) {
    rotateByTime(--time);
  }
  if (e.ctrlKey && e.keyCode == 40) {
    rotateByTime(++time);
  }
}, false);

var rotate = function(angle){
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
}

var rotateByTime = function(time){
    if(time>=0 && time<=72){
    updateText(time);
    var deg = 135 - (time*270)/72;
    rotate(deg);
    var currentDay = getCurrentDay();
    if(deg<-45) switchActiveDay(currentDay,2);
    else if(deg<45) switchActiveDay(currentDay,1);
    else switchActiveDay(currentDay,0);
  }
}