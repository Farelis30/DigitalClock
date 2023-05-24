const showTime = () => {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  var body = document.getElementsByTagName("body")[0];
  body.className = getTimeOfDay(hours);

  document.getElementById("jam").innerText = hours;
  document.getElementById("menit").innerText = minutes;
  document.getElementById("detik").innerText = seconds;
  setTimeout(showTime, 1000); // Mengupdate waktu setiap detik
};

const getTimeOfDay = (hours) => {
  var timeOfDay = "";

  if (hours >= 5 && hours < 15) {
    timeOfDay = "morning";
  } else if (hours >= 15 && hours < 18) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }

  return timeOfDay;
};
