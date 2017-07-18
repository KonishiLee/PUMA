/**
 * Created by Serena on 2017/7/11.
 */
var oList = $('.list-box')[0];
var cList = oList.children;

for (let  i = 1; i < cList.length; i++) {
  cList[i].addEventListener('mouseenter', function(e){
    showEle(e.target.lastElementChild);
  })

  cList[i].addEventListener('mouseleave', function(e){
    hideAll();
  })
}

function showEle (ele) {
  ele.style.display = 'block';
}


function hideAll () {
 for (var i = 0; i < cList.length; i++) {
   cList[i].lastElementChild.style.display = 'none';
 }
}

document.body.onscroll = function () {
  if (document.body.scrollTop > 52) {
    $('.dis-fixed')[0].className = 'dis-fixed header-fixed';
  }else{
    $('.dis-fixed')[0].className = 'dis-fixed';
  }
}

// 模仿 jquery 查找 dom 方法
function $(ele) {
 if (ele.indexOf('.') > -1) {
  return document.getElementsByClassName(ele.replace('.', ''))
 }else{
  return document.getElementById(ele.replace('#', ''))
 }
}







