//? Btn catalog, create burger menu and show menu 
"use strict"

//!Все элэменты которым добовляется class "active"
const all_need_tobe_active = document.querySelectorAll([
    'body',
    '.header__bottom',
    '.btn-catalog',
    '.header__dropdown-catalog',
])

//! Все контейнеры Top-HEADER
const containers = document.querySelectorAll(
    [
        ".header__top > .container",
        ".header__bottom > .container",
    ]
)

//! Получаем Margin-right у контецнера ".bottom__wrapper > .container".
const initialGetprop = window.getComputedStyle(containers[0], null).getPropertyValue("margin-right");


//!Находим из массива класс '.btn-catalog' и добавляем ему класс "active"
all_need_tobe_active[2].addEventListener('click', () => btnCatalogAction())






//! Начальная ширина всего экрана
let start_W_W = document.documentElement.clientWidth

function locationReload() {
    location.reload()
}

//! Активная кнопка Каталога 
function btnCatalogAction() {
    //!Добавляем всем элементам class "active"
    all_need_tobe_active.forEach(e => e.classList.toggle('active'))
    //! Измененная ширина всего экрана
    let modified_W_W = document.documentElement.clientWidth;
    let newState = modified_W_W - start_W_W
    let newGetprop = Number(initialGetprop.slice(0, -2)) + newState
    containers.forEach(e => e.style.marginRight = newGetprop + 'px')
}

window.addEventListener('resize', locationReload)






//! Btn search if onmouseenter that show input serch
const btnShowSearch = document.querySelector('.search-width')
let t

function hidden() {
    btnShowSearch.classList.remove('active')
}

function hiddenSearch() {
    t = setTimeout(hidden, 2000)
}

function showSearch() {
    clearTimeout(t);
    btnShowSearch.classList.add('active')
}

btnShowSearch.onmouseleave = function () {
    hiddenSearch()
}

btnShowSearch.onmouseenter = function (event) {
    event.target.oninput = function () {
        showSearch()
    }
    event.target.onkeyup = function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();


        }
    }

    showSearch()
}




$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
})