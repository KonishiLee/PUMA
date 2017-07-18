function $(ele) {
 if (ele.indexOf('.') > -1) {
  return document.getElementsByClassName(ele.replace('.', ''))
 }else{
  return document.getElementById(ele.replace('#', ''))
 }
}


function login(){
  let userName = $('.ipt-phone')[0].value;
  let password = $('.ipt-password')[0].value;

  // 从localstorage取出用户密码判断是否存在与正确

  if (localStorage.getItem('user') && localStorage.getItem('password')) {
    if (userName === localStorage.getItem('user') && password === localStorage.getItem('password')) {
      console.log('登录成功。')
      alert('欢迎您，' + userName + '已成功登录。');
      location.href = './index.html'
    }else{
      console.log('用户名或密码错误。')
      // location.href = './register.html';
      alert('用户名或密码错误。');
    }
  }

}


function register() {
  let userName = $('.ipt-phone')[0].value;
  let password = $('.ipt-password')[0].value;
  let rePassword = $('.ipt-re-password')[0].value;

  if (!userName) {
    $('.ipt-phone')[0].style.border = '1px solid red'
    return;
  }else{
    $('.ipt-phone')[0].style.border = '0'
  }

  if (localStorage.getItem('user') && localStorage.getItem('user') === userName) {
    alert('您输入的用户名已存在！请重新确认输入。')
    return;
  }

  if (!password) {
    $('.ipt-password')[0].style.border = '1px solid red'
    return;
  }else{
    $('.ipt-password')[0].style.border = '0'
  }

  if (password !== rePassword) {
    alert('两次输入密码不一致，请重新输入。')
    return;
  }
  // 设置用户密码
  localStorage.setItem('user', userName)
  localStorage.setItem('password', password)
  alert('注册成功，请登录。');
  location.href = './login.html';
}

// 保存方法

// sessionStorage.setItem(key, value)
// localStorage.setItem(key, value)

// 取值方法

// sessionStorage.getItem(key)
// localStorage.getItem(key)
