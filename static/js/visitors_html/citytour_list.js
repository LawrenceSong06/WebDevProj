function toggle_list(self){
    let list = self.parentNode.nextElementSibling;
    if(list.classList.contains("active")){
        list.classList.remove("active");
        self.innerHTML="&#xe629;";
    }else{
        list.classList.add("active");
        self.innerHTML="&#xe628;";
    }

}