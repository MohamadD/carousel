<html>
    <head>
        <title>carousel</title>
        <link href="carousel_style.css" rel="stylesheet" type="text/css"/>
    </head>
    <body onload="onload();" >
<!--         -->
        <div class="gallerycontainer">
            <div class="slideShowContainer">
                <div class="leftArrow" onclick="prev();" onkeypress="prev();"><span class="arrow arrowLeft" ></span></div>
                <div class="rightArrow" onclick="next();" onkeypress="next();"><span class="arrow arrowRight" ></span></div>
                <div class="imageHolder">
                    <img id="imgid" >
                        
                </div>

            </div>
            <img class="play" src="image/play-circle.png" onclick="play();">
          <img class="play" src="image/round-pause-button.png" onclick="play(false);">

        </div>
        
        
        <script src="script.js" type="text/javascript"></script>
    </body>
</html>
