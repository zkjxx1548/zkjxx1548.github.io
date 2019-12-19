window.onload = function() {
  var user = document.getElementsByClassName('user');
  var password = document.getElementsByClassName('password');
  var logInButton = document.getElementsByClassName('log-in');
  logInButton[0].onclick = function() {
    if (user[0]['value'] != '123' || password[0]['value'] != '123') {
      alert('用户名或密码错误');
      user[0]['value'] = '';
      password[0]['value'] = '';
    }
  }
};