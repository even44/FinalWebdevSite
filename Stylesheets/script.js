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
        document.getElementById("score_text").innerHTML = points;

        document.getElementById("cookie").style.backgroundColor = random_rgba() ;


    };

    function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';



}