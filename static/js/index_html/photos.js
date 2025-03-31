function init_photos(){
    $(".item3>figure>.imgs>img").click(
        function(){
            fullscreen($(this).clone(),$(".item3>.fullscreen"),$(".item3>.fullscreen>.container>figure"));
            $(".item3>.fullscreen>.container>.top_bar>h1").html($(this).attr('title'));
        }
    );
}
