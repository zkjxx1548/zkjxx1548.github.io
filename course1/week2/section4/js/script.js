window.onload = function () {
  const $inputBtn = document.getElementById("input-btn");
  const $inputContent = document.getElementById("input-content");
  const $main = document.getElementById("center");
  const $list = document.getElementById("list");
  var checks = document.getElementsByClassName("check");
  var flag = 1;//表示是否有添加功能
  var num = 0;
  var key = [];


  var keyString;
  var keyObj;

  if (!window.localStorage) {
    alert("浏览器不支持localstorage，不支持todolist操作");
    return false;
  }else{
    var storage = window.localStorage;
    $main.addEventListener("click", function (e) {
      //添加备忘录
      if (e.target.id === "input-btn") {
        if ($inputContent.value !== "" && flag === 1) {
          var task = {};
          task.value = $inputContent.value;
          task.complete = false;
          key[num] = task;
          //存储storage
          keyString = JSON.stringify(key);
          storage.setItem("key", keyString);
          keyObj = JSON.parse(storage.getItem("key"));
          addList(num);
          addListStyle();
          num++;
          $inputContent.value = "";
        }
      }

      //点击按钮变灰，加删除线,改变complete状态
      if (e.target.className === "check") {
        var index = e.target.previousElementSibling.innerHTML - 1;
        if (e.target.checked === true) {
          key[index].complete = true;
        }else{
          key[index].complete = fals;
        }
        keyString = JSON.stringify(key);
        storage.setItem("key", keyString);
        addCompleteStyle(index);
      }

      //显示未完成列表Active
      if (e.target.id === "active-btn") {
        flag = 0;
        $list.innerHTML = "";
        addActiveList();
      }

      //显示已完成列表Complete
      if (e.target.id === "complete-btn") {
        flag = 0;
        $list.innerHTML = "";
        addCompleteList();
      }

      //点击ALL
      if (e.target.id === "all-btn") {
        flag = 1;
        $list.innerHTML = "";
        addALLList();
      }
    });
  }

  function addList(index) {
    $list.innerHTML += "<li>" 
    + "<span>" + (index+1) + ". " + "</span>"
    + "<input class='check' type='checkbox' />"
    + key[index].value 
    + "</li>";
    addListStyle(num);
  }

  function addALLList() {
    for (var i = 0; i < key.length; i++) {
      $list.innerHTML += "<li>" 
      + "<span>" + (i+1) + ". " + "</span>"
      + "<input class='check' type='checkbox' />"
      + key[i].value 
      + "</li>";
      addListStyle(i);
      if (key[i].complete === true) {
        addCompleteStyle(i);
      }
    }
  }

  function addActiveList() {
    var listNum = 0;
    for (var i = 0; i < key.length; i++) {
      if (key[i].complete === false) {
        $list.innerHTML += "<li>" 
        + "<span>" + (listNum+1) + ". " + "</span>"
        + "<input class='check' type='checkbox' />"
        + key[i].value 
        + "</li>";
        addListStyle(listNum);
        listNum++;
      }
    }
  }

  function addCompleteList() {
    var listNum = 0;
    for (var i = 0; i < key.length; i++) {
      if (key[i].complete === true) {
        $list.innerHTML += "<li>" 
        + "<span>" + (listNum+1) + ". " + "</span>"
        + "<input class='check' type='checkbox' />"
        + key[i].value 
        + "</li>";
        addCompleteStyle(i);
        addListStyle(listNum);
        listNum++;
      }
    }
  }

  //渲染列表样式
  function addListStyle(index) {
    if (index % 2 === 1) {
      checks[index].parentNode.style.backgroundColor = "rgba(100, 100, 125, 0.3)";
    }
  }

  //渲染已完成的任务的样式
  function addCompleteStyle(index) {
    checks[index].parentNode.style.textDecoration = 'line-through';
    checks[index].parentNode.style.color = 'gray';
  }
}
