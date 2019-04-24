function startTimer(){
  timer = setInterval(countdown, 1000);
}

function stopTimer(){
  if(typeof timer !== "undefined") {
    clearInterval(timer);
  }
}

function startBell(){
  var bell = $('#bell');
  bell[0].currentTime = 0;
  bell[0].play();
}

function stopBell(){
  var bell = $('#bell');
  bell[0].pause();
}

function countdown() {
  var current_timer_seconds = getCurrentSeconds();

  if(current_timer_seconds == 0){
    setCurrentSeconds(0);
    stopTimer();
    startBell();
    return;
  }

  current_timer_seconds -= 1;

  setCurrentSeconds( current_timer_seconds );
}

function getHour(){
  var hour = parseInt( $( "#hour" ).val() );
  if( isNaN(hour) ){
    hour = 0;
  }
  return hour;
}

function setHour(value){
  $( "#hour" ).val( zeroPadding(value, 2) );
}

function getMinute(){
  var minute = parseInt( $( "#minute" ).val() );
  if( isNaN(minute) ){
    minute = 0;
  }
  return minute;
}

function setMinute(value){
  $( "#minute" ).val( zeroPadding(value, 2) );
}

function getSecond(){
  var second = parseInt( $( "#second" ).val() );
  if( isNaN(second) ){
    second = 0;
  }
  return second;
}

function setSecond(value){
  $( "#second" ).val( zeroPadding(value, 2) );
}

function getCurrentSeconds(){
  return (getHour() * 60 * 60) + (getMinute() * 60) + (getSecond());
}

function setCurrentSeconds(current_timer_seconds){
  var hour = parseInt( current_timer_seconds / (60 * 60) );
  var minute = parseInt( (current_timer_seconds % (60 * 60)) / 60 );
  var second = parseInt( current_timer_seconds  % 60 );
  setHour( hour );
  setMinute( minute );
  setSecond( second );
}

function zeroPadding(number, length){
    return ( Array(length).join('0') + number ).slice( -length);
}

$( document ).ready(function() {
  $( "#start" ).click(function( event ) {
    stopTimer();
    stopBell();
    startTimer();
  });

  $( "#stop" ).click(function( event ) {
    stopTimer();
    stopBell();
  });

  $( "#clear " ).click(function( event ) {
    stopTimer();
    setHour( 0 );
    setMinute( 0 );
    setSecond( 0 );
  });

  $( "#plus10m" ).click(function( event ) {
    var minute = getMinute();
    if( minute + 10 <= 59 ) {
      minute += 10;
    }
    setMinute( minute );
  });

  $( "#plus10s" ).click(function( event ) {
    var second = getSecond();
    if( second + 10 <= 59 ) {
      second += 10;
    }
    setSecond( second );
  });
});

