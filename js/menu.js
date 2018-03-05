var navMain = document.querySelector(".header__list");
var navToggle = document.querySelector(".header__toggle");
var navBurger1 = document.querySelector(".header__toggle--burger1");
var navBurger2 = document.querySelector(".header__toggle--burger2");
var navBurger3 = document.querySelector(".header__toggle--burger3");

navToggle.addEventListener("click", function(){
  if (navMain.classList.contains("header__list--closed")) {
    navMain.classList.remove("header__list--closed");
    navMain.classList.add("header__list--opened");
    navBurger1.classList.add("header__toggle--pressed1");
    navBurger2.classList.add("header__toggle--pressed2");
    navBurger3.classList.add("header__toggle--pressed3");
  }
  else {
    navMain.classList.add("header__list--closed");
    navMain.classList.add("header__list--closing");
    navMain.classList.remove("header__list--opened");
    navBurger1.classList.remove("header__toggle--pressed1");
    navBurger2.classList.remove("header__toggle--pressed2");
    navBurger3.classList.remove("header__toggle--pressed3");
  }
})
