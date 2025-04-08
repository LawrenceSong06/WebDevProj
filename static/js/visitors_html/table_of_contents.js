function view(element){
    element.scrollIntoView({
        behavior:'smooth',block:'start'
    });
}
function back_to_top(){
    document.getElementById("table_of_contents").scrollIntoView({
        behavior:'smooth',block:'start'
    });
}

function toggle_table_of_contents(self){
    let ol = document.querySelector("#table_of_contents ol");
    if(ol.classList.contains("active")){
        ol.classList.remove("active");
        self.innerHTML="&#xe620; Extend";
    }
    else {
        ol.classList.add("active");
        self.innerHTML="&#xe621; Collapse";
    }
}

function inti_table_of_contents(){
    let t_o_con = $("#table_of_contents").children("ol");
    let all_h1 = $("main>.container h1");
    for (let index = 0; index < all_h1.length; index++) {
        const element = all_h1[index];
        let item = '<li class="clickable">'+element.innerHTML+'</li>';
        t_o_con.append(item);
        t_o_con.children(":nth-child("+(index+1)+")").click(function(){
            view(element);
        });
    }

    $(".back-to-top").fadeOut(0);
    $(window).scroll(function(){
        let s = $(window).scrollTop();
        if(s > document.getElementById("table_of_contents").offsetTop + document.getElementById("table_of_contents").offsetHeight){
            $(".back-to-top").fadeIn(200);
        }else{
            $(".back-to-top").fadeOut(200);
        }
    })
}