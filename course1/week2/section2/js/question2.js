window.onload = function() {
  var boxs = document.getElementsByClassName('boxs');
  var boxNomove = boxs[0];
  var drag = boxs[1];
  var areas = document.getElementsByClassName('main');
  var area = areas[0];
  
  drag.onmousedown = function(event) {
    var event = event || window.event;
    var diffX = event.clientX - drag.offsetLeft;
    var diffY = event.clientY - drag.offsetTop;
    if (typeof drag.setCapture !== 'undefined') {
      drag.setCapture();
    }
    document.onmousemove = function(event) {
      var event = event || window.event;
      var moveX = event.clientX - diffX;
      var moveY = event.clientY - diffY;
      if (moveX < 0) {
        moveX = 0;
      }else if (moveX > area.offsetWidth - drag.offsetWidth) {
        moveX = area.offsetWidth - drag.offsetWidth;
      }
      if (moveY < 0) {
        moveY = 0;
      }else if (moveY > area.offsetHeight - drag.offsetHeight) {
        moveY = area.offsetHeight - drag.offsetHeight;
      }
      if (moveX > 640 && moveX < 800 && moveY > 440 && moveY < 600) {
        boxNomove.style.backgroundColor = 'blue';
      }
      drag.style.left = moveX + 'px';
      drag.style.top = moveY + 'px';
    }
    document.onmouseup = function(event) {
      this.onmousedown = null;
      this.onmousemove = null;
    }
  }
};