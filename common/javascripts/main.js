/**
 * Created by Admin on 2017/7/12.
 */

// 获取页面元素
var oWrap   = document.getElementsByClassName('wrap')[0];
var oImgBox = document.getElementsByClassName('img-box')[0];
var oPrev   = document.getElementsByClassName('prev')[0];
var oNext   = document.getElementsByClassName('next')[0];
var aIdots  = document.getElementsByClassName('idot-item');

// 设置默认选中图片下标
var curImgIdx = 1;
// 记录动画执行状态
var isAnimating = false;
// 定时器
var timer = null;


// 自动播放
play();

/**
 * 事件添加
 */
oNext.onclick = function () {
    // 如果动画正在执行，则不做任何处理
    if(isAnimating) {
        return;
    }
    if(curImgIdx == 6) {
        curImgIdx = 1;
    }else {
        curImgIdx++;
    }
    tab(-1440);
    changeIdots();
};
oPrev.onclick = function () {
    if(isAnimating) {
        return;
    }
    if(curImgIdx == 1) {
        curImgIdx = 6;
    }else {
        curImgIdx--;
    }
    tab(1440);
    changeIdots();
};

oWrap.onmouseover = stop;
oWrap.onmouseout  = play;

// 为小圆点添加点击事件
for(var i = 0; i < aIdots.length; i++) {

    // 为小圆点设置idx属性，记录其位置
    aIdots[i].idx = i + 1;
    aIdots[i].onclick = function () {

        if(isAnimating || this.idx == curImgIdx) {
            return;
        }
        //  this -> idot
        //  offset = -1440 * (要跳转的位置 - 当前的位置)
        var offset = -1440 * (this.idx - curImgIdx);
        // 切换
        tab(offset);
        // 更新
        curImgIdx = this.idx;
        changeIdots();
    }
}

/**
 * 方法封装
 */

function tab(offset) {
    isAnimating = true;

    // 设置帧动画
    // 持续时间
    var duration = 500;
    // 每一帧执行多少时间
    var interval = 15;
    // 执行多少帧
    var frames = duration / interval;
    // 每一帧移动多少距离
    var speed = Math.ceil(offset / frames);

    // 获取目标值
    var tarLeft = parseInt(getStyle(oImgBox, 'left')) + offset;

    // 设置定时器(每隔一定时间执行一次回调函数)
    var t = setInterval(function () {
        // 获取当前值
        var curLeft = parseInt(getStyle(oImgBox, 'left'));
        // 判断执行动画的条件
        if((offset < 0 && curLeft > tarLeft) || (offset > 0 && curLeft < tarLeft)) {
            oImgBox.style.left = (curLeft + speed) + 'px';
        }else {
            // 动画结束
            // 清除定时器
            clearInterval(t);
            isAnimating = false;
            // 更新当前值
            oImgBox.style.left = tarLeft + 'px';

            var curLeft = parseInt(getStyle(oImgBox, 'left'));
            // 无限滚动
            curLeft = parseInt(getStyle(oImgBox, 'left'));
            if(curLeft < -8640) {
                oImgBox.style.left = '-1440px';
            }else if(curLeft > -1440) {
                oImgBox.style.left = '-8640px';
            }
        }
    }, interval);
}


function changeIdots() {
    // 遍历删除`active`类名
    for(var i = 0; i < aIdots.length; i++) {
        // 判断当前的小圆点是否包含类名`active`
        // 如果包含，则直接删除该类名
        if(aIdots[i].classList.contains('active')) {
            aIdots[i].classList.remove('active');
            break;
        }
    }
    // 为对应的小圆点设置'class'为'active'
    aIdots[curImgIdx - 1].classList.add('active');
}

// 获取非行间样式
function getStyle(element, attr) {
    // 兼容IE
    if(element.currentStyle) {
        return element.currentStyle[attr];
    }else {
        return getComputedStyle(element, false)[attr];
    }
}

/**
 * 自动轮播
 */

function play() {
    // 设置自动播放定时器
    timer = setInterval(function () {
        // 执行下一张事件函数
        oNext.onclick();
    }, 3000);
}

function stop() {
    // 清除自动播放定时器
    clearInterval(timer);
}


//hot-box
var oHotPre = document.getElementsByClassName('btn-prev')[0];
var oHotNex = document.getElementsByClassName('btn-next')[0];
var oHotSal = document.getElementsByClassName('hot-sale')[0];
var hotEle = $('.hot-img')[0];
var hotIdx = 0;
// 默认添加 transform

setHotTransform();

oHotPre.onclick = function() {
    hotIdx = hotIdx - 1 > 0? hotIdx - 1: 0;
    setHotTransform();
};

oHotNex.onclick = function () {
    hotIdx = hotIdx + 1 < 3? hotIdx + 1: 3;
    setHotTransform();
};

function setHotTransform () {
    hotEle.style.transform = 'translate3d(' + hotIdx * -250 + 'px,0,0)';
}

//video-box
var oImg  = document.querySelector('.video-box img');
var oBtn  = document.querySelector('.playBtn');
var aImgs =  Array.prototype.slice.call(document.querySelectorAll('.scroll-box img'));
var imgNames = [
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg'
];

// 遍历图片元素添加点击事件
aImgs.forEach(function (img, idx) {
    img.idx = idx;
    img.onclick = function () {
        // 更换左侧图片显示
        oImg.src = 'images/' + imgNames[this.idx];
        // 显示内容
        oImg.style.display = 'block';
        oBtn.style.display = 'block';
    }
});


// 播放按钮
oBtn.onclick = function () {
    oImg.style.display = 'none';
    this.style.display = 'none';
};


