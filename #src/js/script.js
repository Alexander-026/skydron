//? Btn catalog, create burger menu and show menu 
"use strict"
const btnCatalog = document.querySelector('.btn-catalog')
const headerBottom = document.querySelector('.header__bottom')
const dropdownCatalog = document.querySelector('.header__dropdown-catalog')

btnCatalog.addEventListener('click', () => btnCatalogAction() )
function btnCatalogAction() {
    btnCatalog.classList.toggle('active')
    headerBottom.classList.toggle('active')
    dropdownCatalog.classList.toggle('active')
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

btnShowSearch.onmouseleave = function() {
    hiddenSearch()
}

btnShowSearch.onmouseenter = function(event) {
    event.target.oninput = function () {
        let $el = event.target.querySelector('.search').value
        document.querySelector('.modalWindow__text').innerHTML =  $el + '  Люблю Анька моя !!!!!!'
        console.log($el)
        showSearch()
    }
    event.target.onkeyup = function(event) {
        if(event.keyCode == 13){
            event.preventDefault();
            document.querySelector('.modalWindow').classList.add('active')
           
        }
    }
    
    showSearch()
}
















   














