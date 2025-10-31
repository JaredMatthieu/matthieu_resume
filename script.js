function redirectPage(page) {
  window.open(page, "_blank");
}

const educationLevels = [
  "College",
  "Upper Secondary",
  "Secondary"
];

const educationDetails = [
  "Ateneo de Naga University",
  "Camarines Sur National High School",
  "Camarines Sur National High School",
];

const dates = [
  "2025-PRESENT",
  "2023-2025",
  "2019-2023"
];

function dateSpan(date) {
  const [month, day, year] = date.split('/');
  const cleanDay = day.charAt(0) === '0' ? day.charAt(1) : day;
  return `${monthSpan[parseInt(month) - 1]} ${cleanDay}, ${year}`;
}

function makeCircles() {
  const line = document.getElementById("line");
  const mainCont = document.getElementById("main_cont");

  line.innerHTML = "";
  mainCont.innerHTML = "";

  for (let i = 0; i < educationLevels.length; i++) {
    const leftPercent = (i / (educationLevels.length - 1)) * 100;

    line.insertAdjacentHTML(
      "beforeend",
      `<div class="circle" id="circle${i}" style="left: ${leftPercent}%;">
        <div class="popupSpan">${educationLevels[i]}</div>
      </div>`
    );
    mainCont.insertAdjacentHTML(
      "beforeend",
      `<span id="span${i}" class="${i === 0 ? 'center' : 'right'}">
        ${educationDetails[i]}<br>
        <small class="date-text">${dates[i]}</small>
      </span>`
    );
  }

  document.getElementById("circle0").classList.add("active");

  const circles = document.querySelectorAll(".circle");
  const spans = document.querySelectorAll("#main_cont span");

  circles.forEach((circle, index) => {
    circle.addEventListener("click", () => {
      circles.forEach(c => c.classList.remove("active"));
      circle.classList.add("active");

      spans.forEach((s, i) => {
        s.classList.remove("left", "center", "right");
        if (i < index) s.classList.add("left");
        else if (i === index) s.classList.add("center");
        else s.classList.add("right");
      });
    });

    circle.addEventListener("mouseenter", () => circle.classList.add("hover"));
    circle.addEventListener("mouseleave", () => circle.classList.remove("hover"));
  });
}

function selectDate(selector) {
  const circle = document.getElementById(selector);
  const spanId = selector.replace("circle", "span");
  const spanElem = document.getElementById(spanId);

  document.querySelectorAll(".circle.active").forEach(el => el.classList.remove("active"));
  circle.classList.add("active");

  document.querySelectorAll("#main_cont span").forEach(el => {
    el.classList.remove("center", "left");
    el.classList.add("right");
  });

  spanElem.classList.remove("right", "left");
  spanElem.classList.add("center");
}



document.addEventListener("DOMContentLoaded", function () {
  makeCircles();
  document.addEventListener("mouseenter", function (e) {
    if (e.target.classList.contains("circle")) {
      e.target.classList.add("hover");
    }
  }, true);

  document.addEventListener("mouseleave", function (e) {
    if (e.target.classList.contains("circle")) {
      e.target.classList.remove("hover");
    }
  }, true);

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("circle")) {
      selectDate(e.target.id);
    }
  });
});


//MAPAGALON MAGJS AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA