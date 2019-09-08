
var picArr=['1.jpg','2.jpeg','3.jpg','4.jpg'];
var len= picArr.length;
let i=0;
function onload(){
        document.getElementById('imgid').src="image/"+picArr[0];

}


function play(flage=true){
     
    setTimeout(function(){
      if(i==len-1){
          i=0;
      }else{
          i++;
      }   
    document.getElementById('imgid').src="image/"+picArr[i];
   
    if(flage){
        play();
    }
    console.log(i);
    console.log(picArr[i]);
    }, 2000); 
}





function next(){
    if(i==len-1){
          i=0;
      }else{
          i++;
      }   
    document.getElementById('imgid').src="image/"+picArr[i];
}

function prev(){
        if(i==0){
          i=len-1;
      }else{
          i--;
      }   
    document.getElementById('imgid').src="image/"+picArr[i];
}

document.onkeydown = function (e) {
    switch (e.key) {
        case 'ArrowLeft':
            prev();
            break;
        case 'ArrowRight':
            next();
    }
};