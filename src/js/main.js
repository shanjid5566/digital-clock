function clock() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  setInterval(() => {
    let hours = document.querySelector(".hours");
    let minutes = document.querySelector(".mins");
    let seconds = document.querySelector(".sec");
    let showDate = document.querySelector(".date");
    let date = new Date();
    showDate.innerHTML =
      dayNames[date.getDay()] +
      " " +
      (date.getDate() < 10 ? "0" : "") +
      date.getDate() +
      " " +
      monthNames[date.getMonth()] +
      " " +
      date.getFullYear();

    hours.innerHTML = (date.getHours() < 10 ? "0" : "") + date.getHours();
    minutes.innerHTML = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    seconds.innerHTML = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
  }, 1000);
}
clock();