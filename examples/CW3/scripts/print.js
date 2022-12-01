window.onload = init;
const mymenu = initMenu();
//order page
//
function init() {
    getVar();
    fillval();
    loadOrder();
}

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
        document.querySelector("#tel").innerHTML =
            "Order(Tel.) No :" + getVar("tel");
        document.querySelector("#date").innerHTML =
            "Pick Up Date : " + getVar("date");
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

// fill table cake info inc price

// cell1.id = "cakeDesName";
// cell2.id = "amountes";

function loadOrder() {
    for (var r = 0, n = localStorage.length / 3; r < n; r++) {
        var cakeName = localStorage.getItem(r + "cake");
        var cakeQty = localStorage.getItem(r + "qty");
        var cakePrice = localStorage.getItem(r + "price");
        var table = document.getElementById("orderingTable");
        var row = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        cell1.innerHTML = cakeName;
        cell2.innerHTML = cakeQty;
        cell3.innerHTML = cakePrice;

        //sum of qty
        var table = document.getElementById("orderingTable"),
            summVal = 0;
        for (var k = 0; k < table.rows.length; k++) {
            summVal = summVal + parseInt(table.rows[k].cells[1].innerHTML);
        }
        document.getElementById("orderingFoot").innerHTML = summVal;

        //sum of price
        var table = document.getElementById("orderingTable"),
            summVal = 0;
        for (var k = 0; k < table.rows.length; k++) {
            summVal = summVal + parseInt(table.rows[k].cells[2].innerHTML);
        }
        document.getElementById("orderingPrice").innerHTML = summVal;
    }
}

//clear + reset to home
function myClearFunc() {
    localStorage.clear();
    window.location = "../html/index.html";
}
