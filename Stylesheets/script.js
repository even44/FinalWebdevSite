
var points = 0;
    if(localStorage.score){
        if(visualViewport.width < 1200){
            document.getElementById("score_text").style.fontSize = "500%";
        }
        else{
            document.getElementById("score_text").style.fontSize = "500%";
        }
        points = localStorage.score;
        document.getElementById("score_text").innerHTML = points;
        
    }
    else{
        localStorage.points = 0;
    }
    function bytte() {
        points++;
       if(points>999){
        points = 0;
        localStorage.removeItem("score");
       }
       else{
           localStorage.score = points;
       }
        
        if(visualViewport.width < 1200){
            document.getElementById("score_text").style.fontSize = "500%";
        }
        else{
            document.getElementById("score_text").style.fontSize = "500%";
        }
        //<!-- Function code courtesy of https://www.w3schools.com/js/js_htmldom_html.asp -->
        document.getElementById("score_text").innerHTML = points;

        document.getElementById("cookie").style.backgroundColor = random_rgb() ;


    };

    //<!-- Function code courtesy of https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript -->
    function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';



}