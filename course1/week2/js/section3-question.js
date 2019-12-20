window.onload = function() {
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
  var listNum = document.getElementsByClassName('num');
  var listSubtotal = document.getElementsByClassName('subtotal');
  var listReduce = document.getElementsByClassName('reduce');
  var listAllPrice = document.getElementsByClassName('allprice');

  var num;

  for (var i = 0; i < carProducts.length; i++) {
    if (carProducts[i]["checked"] === true) {
      listCheck[i].getElementsByTagName('INPUT')[0].setAttribute("checked", "checked");
    }else{
      listCheck[i].getElementsByTagName('INPUT')[0].setAttribute("check", "");
    }
    listName[i].innerHTML = carProducts[i]["name"];
    listPrice[i].innerHTML = carProducts[i]["price"];
    listNum[i].getElementsByTagName('INPUT')[1].setAttribute("value", carProducts[i]["count"]);
    listSubtotal[i].innerHTML = carProducts[i]["count"] * carProducts[i]["price"];
  }

  function totalPrice() {
    for (var i = 0; i < carProducts.length; i++) {
      listSubtotal[i].innerHTML = parseInt(listNum[i].getElementsByTagName('INPUT')[1].getAttribute("value")) * parseInt(listPrice[i].innerHTML);
    }
  }

  for (var i = 0; i < carProducts.length; i++) {
    listReduce[i].addEventListener('click', )
    }
  }
};