//? Btn catalog, create burger menu and show menu 
"use strict"
const btnCatalog = document.querySelector('.btn-catalog')
const headerBottom = document.querySelector('.header__bottom')
const dropdownCatalog = document.querySelector('.header__dropdown-catalog')
const html = document.querySelector('html')
const body = document.querySelector('body')
const elements = [btnCatalog, headerBottom, dropdownCatalog, html, body]
btnCatalog.addEventListener('click', () => btnCatalogAction())
const el = document.querySelector(".bottom__wrapper > .container");
const el2 = document.querySelector(".header__inner > .container");
const el3 = document.querySelector(".header__dropdown-catalog > .container");
const getprop = window.getComputedStyle(el, null).getPropertyValue("margin-right");
let startState = document.documentElement.clientWidth
function btnCatalogAction() {
    elements.forEach(e => e.classList.toggle('active'))
    let changeState = document.documentElement.clientWidth;
    let newState = changeState - startState
    let gg = getprop
    let ll = Number(gg.slice(0, -2)) + newState
    el.style.marginRight = ll + 'px'
    el2.style.marginRight = ll + 'px'
    el3.style.marginRight = ll + 'px'
}



console.log()

window.onclick = e => {
    console.log(e)
}




//? Btn search if onmouseenter that show input serch
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
        //let $el = event.target.querySelector('.search').value
        //document.querySelector('.modalWindow__text').innerHTML =  $el + '  Люблю Анька моя !!!!!!'
        //console.log($el)
        showSearch()
    }
    event.target.onkeyup = function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();


        }
    }

    showSearch()
}