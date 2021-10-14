var html_about;
var html_next_button;
var html_nav;
var html_contentList;
var html_nav_list;

var global_pos = 1;

const resetButtons = function() {
    if(global_pos > html_contentList.length - 1 ) {
        // console.log(global_pos)
        html_next_button.style.transform = "rotate(180deg)"
    }
    else {
        html_next_button.style.transform = "none"
    }
}


document.addEventListener('DOMContentLoaded', function () {
    console.log("Script Loaded!")

    var html_test = document.querySelector(".js-test")

    html_test.addEventListener("click", function(){
        document.querySelector("#about").scrollIntoView({behavior:'smooth'})
        console.log("scroll to item")
    });

    

    html_contentList = document.querySelectorAll(".o-container");
    console.log(html_contentList)

    html_next_button = document.querySelector(".js-next")

    html_next_button.addEventListener("click", function() {
        try {
            // console.log(html_contentList[global_pos].id)
            x = "#" + html_contentList[global_pos].id
            document.querySelector(x).scrollIntoView({behavior:'smooth'})
            
        } catch (err) {
           if(err.name == "TypeError") {
            document.querySelector("#start").scrollIntoView({behavior:'smooth'})  
           }
        }
        
    });



    html_nav = document.querySelector(".js-nav")

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        // set window Position
        global_pos = parseInt((window.scrollY / window.outerHeight).toFixed(0)) + 1;
        
        // hide topbar on scroll down
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            html_nav.style.top = "0";
            
        } else {
            html_nav.style.top = "-125px";
            html_nav_list.style.height = "0";
            flf = 0;
            
        }
        if(window.pageYOffset > 0) {
            html_nav.style.boxShadow = "rgba(149, 157, 165, 0.2) 0px 8px 24px";
        }
        else {
            html_nav.style.boxShadow = "none";
        }
        prevScrollpos = currentScrollPos;

        resetButtons();
    } 

    // Create mobiel nav btn

    html_nav_list = document.querySelector(".js-nav-list");
    html_nav_btn = document.querySelector(".js-nav-btn");
    var flf = 0

    html_nav_btn.addEventListener("click", function() {
        if (flf == 0) {
            html_nav_list.style.height = "255px";
            flf = 1;
        }
        else {
            html_nav_list.style.height = "0";
            flf = 0;
        }
        
    });

});
