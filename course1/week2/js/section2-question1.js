window.onload = function() {
  var user = document.getElementsByClassName('user');
  var password = document.getElementsByClassName('password');
  var logInButton = document.getElementsByClassName('log-in');
  logInButton.onclick = function() {
    if (user['value'] != '123' || password['value' != '123']) {
      alert('用户名或密码错误');
    }
  }
};