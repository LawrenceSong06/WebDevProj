//fullscreen functions
function fullscreen(element,target_window, target_element){
    for (let index = 0; index < all.length; index++) {
        if (!all[index].classList.contains("_fullscreen")){
            all[index].tabIndex = -1;   
        }         
    }

    target_element.html(element);
    target_window.removeClass("hidden");
}
function close_fullscreen(){
    for (let index = 0; index < all.length; index++) {
        all[index].tabIndex = tabIndex_all[index];            
    }
    document.querySelector(".fullscreen").classList.add("hidden");
}

// Init fullscreen
function init_fullscreen(){
    let all_fullscreen_children = document.querySelectorAll(".fullscreen *");
    for (let index = 0; index < all_fullscreen_children.length; index++) {
        all_fullscreen_children[index].classList.add("_fullscreen");
    }
}