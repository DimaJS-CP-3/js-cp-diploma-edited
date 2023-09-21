let daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
let days = Array.from(document.getElementsByClassName("page-nav__day"));
let date = new Date();
date.setDate(date.getDate() - 1);

days.forEach((element) => {
  date.setDate(date.getDate() + 1);
  element.children[1].textContent = date.getDate();
  let dayIndex = date.getDay();
  element.children[0].textContent = daysOfWeek[dayIndex];
  if (dayIndex === 0 || dayIndex === 6) {
    element.classList.add("page-nav__day_weekend");
  }
});

let currentDate = new Date();
let selectDay = new Date();
let navDay = document.getElementsByClassName("page-nav")[0];
navDay
  .getElementsByClassName("page-nav__day_chosen")[0]
  .classList.toggle("page-nav__day_chosen");
navDay.children[0].classList.toggle("page-nav__day_chosen");

let pageNavDays = Array.from(document.getElementsByClassName("page-nav__day"));
pageNavDays.forEach((e, index) => {
  e.onclick = function () {
    document
      .getElementsByClassName("page-nav__day_chosen")[0]
      .classList.toggle("page-nav__day_chosen");
    e.classList.toggle("page-nav__day_chosen");
    selectDay.setDate(currentDate.getDate() + index);
    setFilms(JSON.parse(localStorage.getItem("info")), selectDay);
  };
});
