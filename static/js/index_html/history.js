var our_history = document.querySelector(".item2>.our_history");
var our_history_text_box = our_history.querySelector("section>.text_box");
var our_history_pages = our_history_text_box.querySelectorAll("div");
var our_history_page_num = our_history.querySelector("section>.tools>.page_num");
var our_history_pages_subtitles = [];

// functions for examining whether a new content fits into our_history_text_box
function is_overflowed_x(element){
    return element.scrollWidth > element.clientWidth;
}
function is_overflowed_y(element){
    return element.scrollHeight > element.clientHeight;
}
function content_fit(element, content){
    let temp = element.innerHTML;
    element.innerHTML=content;
    let res= is_overflowed_y(element);
    element.innerHTML = temp;

    return !res;
}

// Onclick of this element
function our_history_pg(operation){
    let cur = pg(operation, our_history_pages);
    our_history_page_num.innerHTML = "Page " + (cur+1) + "/"  + our_history_pages.length;
    our_history.querySelector("h2").innerHTML = our_history_pages_subtitles[cur];
} 

// Onload of this element
function init_our_hisory(){
    let text_box = our_history_text_box;

    fetch('./static/text/history.txt')
    .then(response => response.text())
    .then(data => {
        let words = data.split(/\n|\r|\s/);
        let page_num = 0;
        let cur_page = "";
        let cur_title = "";
        for (let index = 0; index < words.length; index++) {
            let cur_word = words[index];

            if(cur_word == "\\subtitle"){
                index++;
                cur_title = words[index].replaceAll("_"," ");
                cur_word = cur_word[index];
                continue;
            }

            our_history.querySelector("h2").innerHTML = cur_title;
            if(cur_word =="\\new_page" || cur_word=="\\end" || !content_fit(text_box, (cur_page + cur_word).replaceAll("\\p","<br/>").replace("\\indent","MM") + " ")){
                let page_content = "";
                let paragraphs = cur_page.split("\\p");
                for (let i = 0; i < paragraphs.length; i++) {
                    if(paragraphs[i].slice(0,7)=="\\indent"){
                        page_content += "<p class='indented align-justified'>" + paragraphs[i].slice(7) +"</p>";
                    }else{
                        page_content += "<p class='align-justified'>" + paragraphs[i] +"</p>";
                    }
                }
                text_box.innerHTML += "<div>" + page_content + "</div>";
                our_history_pages_subtitles[page_num] = cur_title;

                page_num ++;
                
                cur_page = "";
                if(cur_word!="\\new_page" && cur_word!="\\end") cur_page = cur_word + " ";
                
                continue;
            }else{
                cur_page+=cur_word+" ";
            }

        }
        our_history_pages = our_history_text_box.querySelectorAll("div");
        our_history_pages[0].classList.add("active");
        our_history.querySelector("h2").innerHTML = our_history_pages_subtitles[0];
        our_history_page_num.innerHTML = "Page " + 1 + "/"  + our_history_pages.length;
    })
    .catch(error => console.error("Failed to add history.txt"+error));
}