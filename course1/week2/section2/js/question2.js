window.onload = function() {
  const boxNomove = this.document.getElementById('no-move');
  const boxMove = this.document.getElementById('move');
  const area = document.getElementById('main');
  var drag = 0;
  var diffX = 0;
  var diffY = 0;
  var boxNomoveLeft = parseInt(this.document.defaultView.getComputedStyle(boxNomove, null).left);
  var boxNomoveTop = parseInt(this.document.defaultView.getComputedStyle(boxNomove, null).top);
  var boxsWidth = parseInt(this.document.defaultView.getComputedStyle(boxNomove, null).width);
  var boxsHeight = parseInt(this.document.defaultView.getComputedStyle(boxNomove, null).height);


  boxMove.onmousedown = function (event) {
    var event = event || window.event;
    diffX = event.clientX - boxMove.offsetLeft;
    diffY = event.clientY - boxMove.offsetTop;
    drag = 1;
    if (typeof boxMove.setCapture !== 'undefined')
      boxMove.setCapture();
  }

  document.onmousemove = function (event) {
    if (drag === 1) {
      var event = event || window.event;
      var moveX = event.clientX - diffX;
      var moveY = event.clientY - diffY;
      moveX = isMoveBoxCrossBorderX(moveX);
      moveY = isMoveBoxCrossBorderY(moveY);
      if (changeNomoveBoxBlue(moveX, moveY)) {
        boxNomove.style.backgroundColor = 'blue';
      }
      boxMove.style.left = moveX + 'px';
      boxMove.style.top = moveY + 'px';
    }
  }

  document.onmouseup = function () {
    drag = 0;
    this.onmousedown = null;
    this.onmousemove = null;
  }

  function isMoveBoxCrossBorderX(moveX) {
    if (moveX < 0) {
      moveX = 0;
    }else if (moveX > area.offsetWidth - boxMove.offsetWidth) {
      moveX = area.offsetWidth - boxMove.offsetWidth;
    }
    return moveX;
  }

  function isMoveBoxCrossBorderY(moveY) {
    if (moveY < 0) {
      moveY = 0;
    }else if (moveY > area.offsetHeight - boxMove.offsetHeight) {
      moveY = area.offsetHeight - boxMove.offsetHeight;
    }
    return moveY;
  }

  function changeNomoveBoxBlue(x, y) {
    if (
      x > boxNomoveLeft - boxsWidth && x < boxNomoveLeft + boxsWidth &&
      y > boxNomoveTop - boxsHeight && y < boxNomoveTop + boxsHeight      
      )
      return true;
  }
};