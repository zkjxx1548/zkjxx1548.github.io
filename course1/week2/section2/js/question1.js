window.onload = function() {
  var username = document.getElementById('username');
  var password = document.getElementById('password');
  var logInButton = document.getElementById('log-in');
  logInButton.onclick = function() {
    if (username.value !== '123' || password.value !== '123') {
      alert('用户名或者密码错误');
    } else
      alert('登陆成功');
  }
};