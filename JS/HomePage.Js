//Transistion Hamburger
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

//Slidebar untuk main transition
function MainCloseTransition(){
    if(menuOpen === true){
        menuButton.classList.remove('Open');
        menuOpen = false;
    }
}

//Transition Search
const searchButton = document.getElementById('searchInputDiv');
const backgroundSearch = document.getElementById('Icon-Search');
const closeButton = document.getElementById('searchInputDiv')
    
let OpenSearch = false

function searchOpen(){
    if(OpenSearch === false){
        searchButton.classList.add('search-Open');
        backgroundSearch.classList.add('Background-Search');
        closeButton.classList.remove('search-Close');
        OpenSearch=true;
    } 
}

function searchClose(){
    if(OpenSearch === true){
        closeButton.classList.add('search-Close');
        backgroundSearch.classList.remove('Background-Search');
        searchButton.classList.remove('search-Open');
        OpenSearch=false;
    }
}
//Transition sliderbar

const slidebar = document.getElementById('slidebar');
let SlideTransition = false;
function slideTransition(){
    if(SlideTransition === false){
        slidebar.classList.add('SlideTransition');
        SlideTransition = true;
    }else{
        slidebar.classList.remove('SlideTransition');
        SlideTransition = false;
    }
}

function bodyCloseTransition(){
    if(SlideTransition == true){
        slidebar.classList.remove('SlideTransition');
        SlideTransition = false;
    }
}