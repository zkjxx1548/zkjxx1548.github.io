window.onload = function () {
  // 商品列表 JSON 数据
  var carProducts = [
    {
      "id": 1,
      "name": "英雄牌 钢笔",
      "count": 1,
      "price": 69,
      "checked": false
    },
    {
      "id": 2,
      "name": "晨光牌 铅字笔",
      "count": 2,
      "price": 5.5,
      "checked": true
    },
    {
      "id": 3,
      "name": "晨光牌 铅笔",
      "count": 1,
      "price": 2,
      "checked": false
    },
    {
      "id": 4,
      "name": "狗熊牌 橡皮擦",
      "count": 1,
      "price": 1,
      "checked": false
    },
    {
      "id": 5,
      "name": "瑞士牌 双肩书包",
      "count": 1,
      "price": 199,
      "checked": true
    },
    {
      "id": 6,
      "name": "晨光牌 作业本",
      "count": 5,
      "price": 2.5,
      "checked": false
    }
  ]
  var tbody = document.querySelector('tbody');
  const tableShop = document.querySelector('table');
  const listLen = carProducts.length;

  //初始化购物车table
  for (var i = 0; i < listLen; i++) {
    tbody.innerHTML += "<tr class='list" + carProducts[i].id + "'></tr>";
    //Selector是css选择器，list要加'.'
    var name = ".list" + carProducts[i].id;
    var listTr = document.querySelector(name);
    listTr.innerHTML = "<td>"
    + "<input class='check' type='checkbox'" + isHadGet(carProducts[i].checked) + "/>"
    + "</td>"
    + "<td>" + carProducts[i].name + "</td>"
    + "<td class='price'>" + carProducts[i].price + "</td>"
    + "<td>"
    + "<input class='reduce' type='button' value='-' />"
    + "<span class='num'>" + carProducts[i].count + "</span>"
    + "<input class='plus' type='button' value='+' />"
    + "</td>"
    + "<td class='subtotal'>" + carProducts[i].price * carProducts[i].count + "</td>";
  }
  tbody.innerHTML += "<td>"
  + "<span>全选</span>"
  + "<input id='checkAll' type='checkbox' />"
  + "</td>"
  + "<td id='allPriceContent' colspan='4'>共计"
  + "<span id='allCount'>3</span>件商品，"
  + "<span id='allPrice'>210</span>￥"
  + "</td>";

  //监听tableShop
  tableShop.addEventListener("click", function (e) {
    //e.target指被点击的元素
    if (e.target.className === "check") {
      isAllCheck();
      updateAllPriceContent();
    }
    if (e.target.id === "checkAll") {
      var checks = document.querySelectorAll('.check');
      for (var i = 0; i < checks.length; i++) 
        checks[i].checked = e.target.checked;
      updateAllPriceContent();
    }
    if (e.target.className === "reduce" || e.target.className === "plus") {
      var nodeOfTr = e.target.parentNode.parentNode;
      var listNum = 0;
      if (e.target.className === "reduce") {
        listNum = parseInt(e.target.nextElementSibling.innerHTML) - 1;
        if (listNum === 0) 
          nodeOfTr.parentNode.removeChild(nodeOfTr);
        else
          e.target.nextElementSibling.innerHTML = listNum;
      }
      if (e.target.className === "plus") {
        listNum = parseInt(e.target.previousElementSibling.innerHTML) + 1;
        e.target.previousElementSibling.innerHTML = listNum;
      }
      var listPrice = parseInt(nodeOfTr.querySelector('.price').innerHTML);
      var listSubtotoal = listNum * listPrice;
      //更新小计
      nodeOfTr.querySelector('.subtotal').innerHTML = listSubtotoal;
      updateAllPriceContent();
    }
  });
  
  function isHadGet(val) {
    return val ? "checked" : "";
  }

  function isAllCheck() {
    var checks = tbody.querySelectorAll(".check");
    var allCheck = tbody.querySelector("#checkAll");
    for (var i = 0; i < checks.length; i++) {
      if (checks[i].checked === false) {
        allCheck.checked = false;
        break;
      }
      allCheck.checked = true;
    }
  }

  function updateAllPriceContent() {
    var checks = tbody.querySelectorAll(".check");
    var nums = tbody.querySelectorAll(".num");
    var subtotals = tbody.querySelectorAll(".subtotal");
    var allCount = 0;
    var allPrice = 0;
    for (var i = 0; i < checks.length; i++) {
      if (checks[i].checked === true) {
        allCount += parseInt(nums[i].innerHTML);
      allPrice += parseInt(subtotals[i].innerHTML);
      }
    }
    tbody.querySelector("#allCount").innerHTML = allCount;
    tbody.querySelector("#allPrice").innerHTML = allPrice;
  }
};