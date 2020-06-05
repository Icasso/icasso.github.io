window.onload = init;
const mymenu = initMenu();
//order page

function init() {
  getVar();
  fillval();
  produce();
  validateForm();
}

//
function getVar(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return null;
}
function fillval() {
  //fill your inputs
  if (window.location.search.substring(1)) {
    document.querySelector("#tel").value = getVar("tel");
    document.querySelector("#orderNo").innerHTML = "Order No." + orderNum.value;
    document.querySelector("#date").value = getVar("date");
    shippingmethod = document.querySelectorAll("input[type='radio']");
    switch (getVar("shippingmethod")) {
      case "delivery":
        shippingmethod[0].checked = true;
        break;
      case "pickup":
        shippingmethod[1].checked = true;
        break;
    }
  } else {
  }
}
var orderNum = document.querySelector("#tel"); //change on input
orderNum.onkeyup = function() {
  document.querySelector("#orderNo").innerHTML = "Order No." + orderNum.value;
};

//add images using functions
function produce() {
  for (var j = 0; j < mymenu.length; j++) {
    var cakeImgs = document.createElement("img");
    cakeImgs.setAttribute("src", mymenu[j].imagefile);
    cakeImgs.setAttribute("title", mymenu[j].description);
    cakeImgs.setAttribute("name", mymenu[j].price);
    cakeImgs.setAttribute("class", "img");
    cakeImgs.setAttribute("onclick", "promOrder()");
    document.querySelector("#menu").appendChild(cakeImgs);
  }
}
//table
//
//choosing amount of cakes when ordering
var condition = false;
function promOrder() {
  var cakeName = event.target.title;
  var cakePrice = event.target.name;
  do {
    var myNum = prompt("Enter amount of cakes you will oder");
    if (isNaN(myNum) === true) {
      //return "Please imput a number.";
      condition = false;
    } else if (myNum == "" || myNum == null || myNum == " ") {
      return;
    } else if (isNaN(myNum) === false) {
      condition = true;
      var table = document.getElementById("orderingTable");
      var row = table.insertRow();
      var cell1 = row.insertCell();
      var cell2 = row.insertCell();
      var cell3 = row.insertCell();
      cell1.innerHTML = cakeName;
      cell2.innerHTML = myNum;
      cell3.innerHTML = cakePrice * myNum;
      cell1.id = "cakeDesName";
      cell2.id = "amountes";
      cell3.style = "display:none;";
    } else {
    }
  } while (condition === false);
  var table = document.getElementById("orderingTable"),
    summVal = 0;
  for (var k = 0; k < table.rows.length; k++) {
    summVal = summVal + parseInt(table.rows[k].cells[1].innerHTML);
  }
  document.getElementById("orderingFoot").innerHTML = summVal;
}
//
// start validation
function validateForm() {
  var valNumber = document.querySelector("#tel").value;
  var valDate = document.querySelector("#date").value;
  if (isNaN(valNumber) == true || valNumber == "") {
    console.log("it is not a number / empty"); //validate number 
  }
  if (valDate == "") {
    console.log("date is empty"); //validate date 
  }
}
//

//localstorage
function GetCellValues() {
  var table = document.getElementById("orderingTable");
  for (var r = 0, n = table.rows.length; r < n; r++) {
    for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
      // cake store
      localStorage.setItem([r] + "cake", table.rows[r].cells[0].innerHTML);
      // qty store
      localStorage.setItem([r] + "qty", table.rows[r].cells[1].innerHTML);
      // price store
      localStorage.setItem([r] + "price", table.rows[r].cells[2].innerHTML);
    }
  }
}
//test
