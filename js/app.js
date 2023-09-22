const search = document.querySelector(".search");
const searchBtn = document.querySelector(".header__search");
const clear = document.querySelector(".search__clear");

searchBtn.addEventListener("click", () => {
  search.classList.add("open");
  searchBtn.classList.add("open");
  clear.classList.add("open");
});

clear.addEventListener("click", () => {
  document.getElementById("input").value = "";
  search.classList.remove("open");
  searchBtn.classList.remove("open");
  clear.classList.remove("open");
});

const navList = document.querySelector(".nav__list");
const navOpenBtn = document.querySelector(".nav__burger");

navOpenBtn.addEventListener("click", (event) => {
  event.preventDefault();
  navList.classList.toggle("active");
  navOpenBtn.classList.toggle("active");
});

// accordion

const accordion = document.querySelectorAll("[data-collapse]");

accordion.forEach((question, element) => {
  accordion[element].addEventListener("click", (event) => {
    event.preventDefault();
    question.classList.toggle("active");
  });
});

// swiper

let swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' +  "</span>";
    },
  },
  autoplay: {
    delay: 3000,
  },
  allowTouchMove: true,
  loop: true,
});


// tabs

const tabsBtn = document.querySelectorAll('.work__button');
const tabsItem = document.querySelectorAll('.tab-content');


tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener('click', function() {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId)

    if (!currentBtn.classList.contains('active')) {
      tabsBtn.forEach(function(item) {
        item.classList.remove('active');
      });

      tabsItem.forEach(function(item) {
        item.classList.remove('active')
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
}

document.querySelector('.work__button').click();