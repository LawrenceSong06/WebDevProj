function last_indexOf(str, key){
    let res = -1;
    for (let index = 0; index < str.length; index++) {
        res = str[index]==key?index:res;
    }
    return res;
}
function init_photos(){
    $(".item3>figure>.imgs>img").click(
        function(){
            let element = $(this).clone();
            let path = element.attr('src');
            let last_path = last_indexOf(path,'/');
            let full_img = path.substring(0,last_path) + "/fullsize" + path.substring(last_path);
            element.attr('src',full_img);
            fullscreen(element,$(".item3>.fullscreen"),$(".item3>.fullscreen>.container>figure"));
            $(".item3>.fullscreen>.container>.top_bar>h1").html($(this).attr('title'));
        }
    );
}
