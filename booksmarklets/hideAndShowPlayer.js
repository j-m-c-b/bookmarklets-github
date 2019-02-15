function hideAndShowPlayer(){
   
    var cssEleNames = [
        "ytp-title-link yt-uix-sessionlink",
        "ytp-title-channel-logo",
        "ytp-watch-later-button ytp-button",
        "ytp-button ytp-share-button",
        "ytp-chrome-controls",
        "ytp-play-progress ytp-swatch-background-color",
        "ytp-pause-overlay ytp-scroll-min",
        "ytp-progress-bar",
        "ytp-chrome-bottom",
        "ytp-chrome-top ytp-chrome-bottom",
    ]

    if(document.getElementsByClassName(cssEleNames[0])[0].style.visibility === "hidden"){

        var cssEles = [];
        for (var ele of cssEleNames){
            var eleGet = document.getElementsByClassName(ele)[0];
            if(eleGet){
                cssEles.push(eleGet);
            }
            
        }

        for(var ele of cssEles){
           
            if(ele.style){
                ele.style.visibility = "";
            }
        }

    }else{
        var cssEles = [];
        for (var ele of cssEleNames){
            var eleGet = document.getElementsByClassName(ele)[0];
            if(eleGet){
                cssEles.push(eleGet);
            }
            
        }

        for(var ele of cssEles){
           
            if( ele.style){
                ele.style.visibility = "hidden";
            }
        }
    }

  
}
hideAndShowPlayer();