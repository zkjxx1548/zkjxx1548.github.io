window.onload = function() {
  var boxNomove = document.getElementById('no-move');
  var boxMove = document.getElementById('move');
  var area = document.getElementById('main');
  
  boxMove.onmousedown = function(event) {
    var event = event || window.event;
    var diffX = event.clientX - boxMove.offsetLeft;
    var diffY = event.clientY - boxMove.offsetTop;
    if (typeof boxMove.setCapture !== 'undefined') {
      boxMove.setCapture();
    }
    document.onmousemove = function(event) {
      var event = event || window.event;
      var moveX = event.clientX - diffX;
      var moveY = event.clientY - diffY;
      if (moveX < 0) {
        moveX = 0;
      }else if (moveX > area.offsetWidth - boxMove.offsetWidth) {
        moveX = area.offsetWidth - boxMove.offsetWidth;
      }
      if (moveY < 0) {
        moveY = 0;
      }else if (moveY > area.offsetHeight - boxMove.offsetHeight) {
        moveY = area.offsetHeight - boxMove.offsetHeight;
      }
      if (boxNomoveChangeColor(moveX, moveY)) {
        boxNomove.style.backgroundColor = 'blue';
      }
      boxMove.style.left = moveX + 'px';
      boxMove.style.top = moveY + 'px';
    }
    document.onmouseup = function(event) {
      this.onmousedown = null;
      this.onmousemove = null;
    }
  }

  function boxNomoveChangeColor(x, y) {
    if (x > (parseInt(boxNomove.style.left) - parseInt(boxNomove.style.width)) && x < (parseInt(boxNomove.style.left) + parseInt(boxNomove.style.width)) && y > (parseInt(boxNomove.style.top) - parseInt(boxNomove.style.height)) && y < (parseInt(boxNomove.style.top) + parseInt(boxNomove.style.height)))
      return true;
    else
      return false;
  }
  alert(boxNomove.style.left);
};