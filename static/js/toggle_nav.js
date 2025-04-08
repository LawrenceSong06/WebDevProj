function toggle_nav(self){
    let nav = document.querySelector("nav");
    if(nav.classList.contains("active")){
        nav.classList.remove("active");
        self.innerHTML="&#xe621;";
    }else{
        nav.classList.add("active");
        self.innerHTML="&#xe620;";
    }
}