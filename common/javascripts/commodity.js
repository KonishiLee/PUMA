/**
 * Created by serena on 2017/7/18.*
 */
function $(id){
    return document.getElementById(id);
}

window.onload = function(){
    var scale = 3; //缩放倍数
    var imgBox = $('#img-box');
    var smallBox = $("#small-box");
    var smallImg = smallBox.getElementsByTagName('img')[0];
    var glassBox = $("#glass-box"); //遮罩 放大镜
    var bigBox = $('#big-box');
    var bigImg= bigBox.getElementsByTagName('img')[0]; //大图

    // var big = bigBox.children[0];



    smallBox.onmouseover = function(){
        glassBox.style.display = "block";
        bigBox.style.display = "block";
    };

    smallBox.onmouseout = function(){
        glassBox.style.display = "none";
        bigBox.style.display = "none";
    };

     smallBox.onmousemove = function(ev){
        var _event =ev;
        var left = _event.clientX - smallBox.offsetLeft - smallImg.offsetLeft - glassBox.offsetWidth / scale;
        var top =_event.clientY - smallBox.offsetTop - smallImg.offsetTop - glassBox.offsetHeight / scale;
        if(left < 0){
            left = 0;
        }else if(left > (smallBox.offsetWidth - glassBox.offsetWidth)){
            left = smallBox.offsetWidth - glassBox.offsetWidth;
        }

        if(top < 0){
            top = 0;
        }else if( top > (smallBox.offsetHeight - glassBox.offsetHeight)){
            top =  smallBox.offsetHeight - glassBox.offsetHeight;
        }

        console.log(left, top)
        glassBox.style.left = left + "px";

        glassBox.style.top= top + "px";

        var percentX = left / (smallBox.offsetWidth - glassBox.offsetWidth);
        var percentY = top / (smallBox.offsetHeight - glassBox.offsetHeight);


        bigImg.style.left = -percentX * (bigImg.offsetWidth - bigBox.offsetWidth) + "px";
        bigImg.style.top = -percentY * (bigImg.offsetHeight - bigBox.offsetHeight) + "px";

    };

}



