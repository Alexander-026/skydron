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
    


//? Btn search if click that show input serch
const btnShowSearch = document.querySelector('.search-width')
function showSearch() {
    btnShowSearch.classList.toggle('active')
}
btnShowSearch.onclick = function() {
    showSearch()
}









   














