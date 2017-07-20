/**
 * Created by Serena on 2017/7/18.
 */
function $(ele) {
    if (ele.indexOf('.') > -1) {
        return document.getElementsByClassName(ele.replace('.', ''))
    } else {
        return document.getElementById(ele.replace('#', ''))
    }
}

//存数据
var userName = $('.ipt-name')[0].value;
var oPhone = $('.ipt-phone')[0].value;
var password = $('.ipt-password')[0].value;
var rePassword = $('.ipt-re-password')[0].value;



function register() {
    if  (!oPhone) {
        $('.ipt-phone')[0].style.border = '1px solid red';
        return;
    } else {
        $('.ipt-phone')[0].style.border = '0'
    }

    if (localStorage.getItem('user') && localStorage.getItem('user') === oPhone) {
        alert('您输入的用户名已存在！请重新确认输入。');
        return;
    }

    if (!password) {
        $('.ipt-password')[0].style.border = '1px solid red';
        return;
    } else {
        $('.ipt-password')[0].style.border = '0'
    }

    if (password !== rePassword) {
        alert('两次输入密码不一致，请重新输入。');
        return;
    }
    // 设置用户密码
    localStorage.setItem('user', oPhone);
    localStorage.setItem('password', password);
    alert('注册成功，请登录。');
    location.href = './login.html';
}
