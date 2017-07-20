/**
 * Created by Serena on 2017/7/19.
 */
function $(ele) {
    if (ele.indexOf('.') > -1) {
        return document.getElementsByClassName(ele.replace('.', ''))
    }else{
        return document.getElementById(ele.replace('#', ''))
    }
}

var brandNew = brandNew;

var listBox = $('.new-box')[0];


var newList =document.createElement('ul');


newList.className = 'new-list';
brandNew.forEach(function (item) {
    var oLi  = document.createElement('li');
    oLi.className = 'item';
    newList.appendChild(oLi);


    //img
    var oImgBox  = document.createElement('img');
    oImgBox.className = 'img';
    oImgBox.style.background = 'url("./images/dis-images/'+item.img+'") no-repeat';
    oLi.appendChild(oImgBox);

   //time
    var timeBox = document.createElement('p');
    timeBox.className = 'time';
    timeBox.appendChild(document.createTextNode(item.time));
    oLi.appendChild(timeBox);

    //title
    var titleBox = document.createElement('p');
    titleBox.className = 'title-box';
    titleBox.appendChild(document.createTextNode(item.title));
    oLi.appendChild(titleBox);

    //decoration
     var decoration = document.createElement('p');
     decoration.className = 'text';
     decoration.appendChild(document.createTextNode(item.decoration));
     oLi.appendChild(decoration);

    //learn
    var learn = document.createElement('a');
    learn.className = 'learn';
    learn.appendChild(document.createTextNode(item.learn));
    learn.setAttribute('href', 'javascript:;');

});
   listBox.appendChild(newList);
