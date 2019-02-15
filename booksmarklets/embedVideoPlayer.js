function embedVideoPlayer(){
    if (window.location.host === "www.youtube.com" && window.location.pathname === "/watch") {
        var urlParams = new URLSearchParams(window.location.search);
        var id = urlParams.get('v');
        window.location.assign(`https://www.youtube.com/embed/${id}`);
    }else if(window.location.host === "www.dailymotion.com"){
        var values = window.location.pathname.split("/");
        window.location.assign(`https://www.dailymotion.com/embed/video/${values[values.length-1]}`);
    }
}
embedVideoPlayer();