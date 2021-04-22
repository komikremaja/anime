const menuButton = document.getElementById('Menu-Hamburger');
let menuOpen = false;

function CloseTransition(){
    if(menuOpen === false){
        menuButton.classList.add('Open');
        menuOpen = true;
    }else{
        menuButton.classList.remove('Open');
        menuOpen = false;
    }
}

const searchButton = document.getElementById('Search-Bar');
function searchTransition(){
    if(menuOpen === false){
        searchButton.classList.add('search-trans');
        menuOpen=true;
    }else{
        searchButton.classList.remove('search-trans');
        menuOpen=false;
    }
}

