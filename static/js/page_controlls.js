// Page up/down function. Positive 'opeatiation' value for page down, and negative for page up.
function cur_page(pages){
    for (let index = 0; index < pages.length; index++) {
        if(pages[index].classList.contains("active")){
            return index;
        }
    }
    return -1;
}
function pg(operation, pages){
    let cur = cur_page(pages);
    let next = (cur+operation)%pages.length;
    if(next<0) next = pages.length-1;

    pages[cur].classList.remove("active");
    pages[next].classList.add("active");
    
    return next;
}