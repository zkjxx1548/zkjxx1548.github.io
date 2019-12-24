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
  var listCheck = document.getElementsByClassName('check');
  var listName = document.getElementsByClassName('name');
  var listPrice = document.getElementsByClassName('price');
  var listNum = document.getElementsByClassName('numbox');
  var listSubtotal = document.getElementsByClassName('subtotal');
  var listReduce = document.getElementsByClassName('reduce');
  var listPlus = document.getElementsByClassName('plus');
  var listAllCheck = document.getElementById('allcheck').getElementsByTagName('INPUT')[0];
  var listAllPrice = document.getElementById('allprice');
  var listLen = carProducts.length;
  var allcheckFlag = 0;

  //初始化购物车table
  for (var i = 0; i < listLen; i++) {
    if (carProducts[i]["checked"] === true) 
      listCheck[i].getElementsByTagName('INPUT')[0].setAttribute("checked", "checked");
    listName[i].innerHTML = carProducts[i]["name"];
    listPrice[i].innerHTML = carProducts[i]["price"];
    listNum[i].setAttribute("value", carProducts[i]["count"]);
    subtotalPrice();
    totalPrice();
  }

  for (var i = 0; i < listLen; i++) {
    listCheck[i].getElementsByTagName('INPUT')[0].addEventListener('click', function () {
      if (carProducts[i].checked === true) {
        carProducts[i].checked = false;
      }else{
        carProducts[i].checked = true;
      }
      totalPrice();
    }, false);
  }
  
  listCheck[0].getElementsByTagName('INPUT')[0].addEventListener('click', function () {
    if (carProducts[0].checked === true) {
      carProducts[0].checked = false;
    }else{
      carProducts[0].checked = true;
    }
    totalPrice();
  }, false);

  listCheck[1].getElementsByTagName('INPUT')[0].addEventListener('click', function () {
    if (carProducts[1].checked === true) {
      carProducts[1].checked = false;
    }else{
      carProducts[1].checked = true;
    }
    totalPrice();
  }, false);

  listCheck[2].getElementsByTagName('INPUT')[0].addEventListener('click', function () {
    if (carProducts[2].checked === true) {
      carProducts[2].checked = false;
    }else{
      carProducts[2].checked = true;
    }
    totalPrice();
  }, false);

  listCheck[3].getElementsByTagName('INPUT')[0].addEventListener('click', function () {
    if (carProducts[3].checked === true) {
      carProducts[3].checked = false;
    }else{
      carProducts[3].checked = true;
    }
    totalPrice();
  }, false);

  listCheck[4].getElementsByTagName('INPUT')[0].addEventListener('click', function () {
    if (carProducts[4].checked === true) {
      carProducts[4].checked = false;
    }else{
      carProducts[4].checked = true;
    }
    totalPrice();
  }, false);
  
  listCheck[5].getElementsByTagName('INPUT')[0].addEventListener('click', function () {
    if (carProducts[5].checked === true) {
      carProducts[5].checked = false;
    }else{
      carProducts[5].checked = true;
    }
    totalPrice();
  }, false);

  listReduce[0].addEventListener('click', function () {
    if(carProducts[0].count > 0) {
      carProducts[0].count--;
      listNum[0].setAttribute("value", carProducts[0]["count"]);
      subtotalPrice();
      totalPrice();
    }
  });

  listPlus[0].addEventListener('click', function () {
    carProducts[0].count++;
    listNum[0].setAttribute("value", carProducts[0]["count"]);
    subtotalPrice();
    totalPrice();
  });

  listReduce[1].addEventListener('click', function () {
    if(carProducts[1].count > 0) {
      carProducts[1].count--;
      listNum[1].setAttribute("value", carProducts[1]["count"]);
      subtotalPrice();
      totalPrice();
    }
  });

  listPlus[1].addEventListener('click', function () {
    carProducts[1].count++;
    listNum[1].setAttribute("value", carProducts[1]["count"]);
    subtotalPrice();
    totalPrice();
  });

  listReduce[2].addEventListener('click', function () {
    if(carProducts[2].count > 0) {
      carProducts[2].count--;
      listNum[2].setAttribute("value", carProducts[2]["count"]);
      subtotalPrice();
      totalPrice();
    }
  });

  listPlus[2].addEventListener('click', function () {
    carProducts[2].count++;
    listNum[2].setAttribute("value", carProducts[2]["count"]);
    subtotalPrice();
    totalPrice();
  });

  listReduce[3].addEventListener('click', function () {
    if(carProducts[3].count > 0) {
      carProducts[3].count--;
      listNum[3].setAttribute("value", carProducts[3]["count"]);
      subtotalPrice();
      totalPrice();
    }
  });

  listPlus[3].addEventListener('click', function () {
    carProducts[3].count++;
    listNum[3].setAttribute("value", carProducts[3]["count"]);
    subtotalPrice();
    totalPrice();
  });

  listReduce[4].addEventListener('click', function () {
    if(carProducts[4].count > 0) {
      carProducts[4].count--;
      listNum[4].setAttribute("value", carProducts[4]["count"]);
      subtotalPrice();
      totalPrice();
    }
  });

  listPlus[4].addEventListener('click', function () {
    carProducts[4].count++;
    listNum[4].setAttribute("value", carProducts[4]["count"]);
    subtotalPrice();
    totalPrice();
  });

  listReduce[5].addEventListener('click', function () {
    if(carProducts[5].count > 0) {
      carProducts[5].count--;
      listNum[5].setAttribute("value", carProducts[5]["count"]);
      subtotalPrice();
      totalPrice();
    }
  });

  listPlus[5].addEventListener('click', function () {
    carProducts[5].count++;
    listNum[5].setAttribute("value", carProducts[5]["count"]);
    subtotalPrice();
    totalPrice();
  });

  listAllCheck.addEventListener('click', function () {
    if (allcheckFlag === 0) {
      for (var i = 0; i < listLen; i++) {
        carProducts[i].checked = true;
        listCheck[i].getElementsByTagName('INPUT')[0].setAttribute("checked", "checked");
      }
      allcheckFlag = 1;
    }else{
      for (var i = 0; i < listLen; i++) {
        carProducts[i].checked = false;
        listCheck[i].getElementsByTagName('INPUT')[0].removeAttribute("checked");
      }
      allcheckFlag = 0;
    }
    totalPrice();
  }, false);

  //小计
  function subtotalPrice() {
    for (var i = 0; i < listLen; i++) {
      listSubtotal[i].innerHTML = carProducts[i]["count"] * carProducts[i]["price"];
    }
  }

  //共计
  function totalPrice() {
    var allCount = 0;
    var allPrice = 0;
    for (var i = 0; i < listLen; i++) {
      if (carProducts[i].checked === true) {
        allCount += carProducts[i].count;
        allPrice += carProducts[i].count * carProducts[i].price;
      }
    }
    listAllPrice.innerHTML = '共计' + allCount + '商品，' + allPrice + '￥';
  }
  
};