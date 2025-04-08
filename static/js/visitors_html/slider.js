var slider = document.querySelector(".slider");
var sliders = document.querySelectorAll(".slider img");
var controls = document.querySelector(".slideshow .controls");
var interval;
var cur = 0;
var step_time = 5000;
var all_btn = [];
function start_animation(){
    sliders.forEach(element => {
        element.classList.remove("paused");
    });
}
function stop_animation(){
    sliders.forEach(element => {
        element.classList.add("paused");
    });
}
function wait(time){
    clearInterval(interval);
    start_loop(step_time);
}
function slide_snap(){
    return (100*cur);
}
function show_slides(x){
    for (let index = 0; index < sliders.length; index++) {
        const element = sliders[index];
        element.style.transform="translateX(-"+x+"%)";
    }
}
function activate_button(index){
    all_btn.forEach(element => {
        element.classList.remove("active");
    });
    all_btn[index].classList.add("active");
}
function auto_slide(){
    cur = (cur+1)%sliders.length;
    show_slides(slide_snap());
}

function add_buttons(){
    for (let index = 0; index < sliders.length; index++){
        let btn = document.createElement("button");
        btn.onclick=()=>{
            cur=index;
            show_slides(slide_snap());
            activate_button(cur);
            wait(5000);
        }
        controls.appendChild(btn);
        all_btn[index] = btn;
    }
}

function start_loop(time){
    interval = setInterval(() => {
        auto_slide();
        activate_button(cur);
    }, step_time);    
}

function direction(value){
    return value == 0 ? 0 : (value > 0 ? 1 : -1);
}
function touch_slider(){
    var start;
    slider.addEventListener("touchstart", function(e){
        clearInterval(interval);
        stop_animation();
        start=e.touches[0].screenX;
    });
    slider.addEventListener("touchmove", function(e){
        e.preventDefault();
        let move = (e.changedTouches[0].screenX-start)/slider.clientWidth*100;
        show_slides(slide_snap() - move);
    });
    slider.addEventListener("touchend", function(e){
        let end = e.changedTouches[0].screenX;
        let move = end-start;
        if(Math.abs(move) > slider.clientWidth/4){
            let next = cur-direction(move);
            cur = Math.max(0,next>=sliders.length?(sliders.length-1):next);
        }
        show_slides(slide_snap());
        activate_button(cur);
        start_animation();
        start_loop(step_time);
    });
}
function initSlider(){
    add_buttons();
    start_loop(step_time);
    activate_button(0);
    touch_slider()
}
