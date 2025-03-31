var path = window.location.href;
path = path.split('/');
// This variable "all" would be initialzied in the "init_keyboard_accessibility()" function
var all = document.querySelectorAll("*");
// testing functions
function x_ray(value){
    if(value){
        for (let i = 0; i < all.length; i++) {
            all[i].style.border="solid 1px green";
        }
        return;
    }
    for (let i = 0; i < all.length; i++) {
        all[i].style.border="none";
    }
}

// Initializations
function init_nav(){
    let links = document.querySelectorAll("nav a")
    for (let i = 0; i < links.length; i++) {
        if(links[i].href.includes(path[path.length-1])){
            links[i].classList.add("selected");
        }
    }
}

// Init Keyboard Accessibility
var tabIndex_all = [];
function init_keyboard_accessibility(){
    let clickables = $(".clickable");
    for (let index = 0; index < clickables.length; index++) {
        clickables[index].tabIndex = 0;
    }
    for (let index = 0; index < all.length; index++) {
        tabIndex_all[index] = all[index].tabIndex;   
    }
    $(".clickable").keydown(function(e){
        if(e.which==13){
            $(this).click();
        }
    })
}

function init(){
    init_nav();
    init_fullscreen();
    if(path[path.length-1] == "index.html") init_index();
    else if(path[path.length-1] == "visitors.html") init_visitors();
    init_keyboard_accessibility();
}