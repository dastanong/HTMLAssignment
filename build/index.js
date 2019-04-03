var topNavs = document.querySelectorAll(".topnav-li");
var _loop_1 = function (i) {
    var topNav = topNavs[i];
    var navHover = function () {
        topNav.style.backgroundColor = "#4B4B4B";
    };
    topNav.addEventListener("mouseover", navHover);
    var leaveHover = function () {
        topNav.style.backgroundColor = "black";
    };
    topNav.addEventListener("mouseout", leaveHover);
};
for (var i = 0; i < topNavs.length; i++) {
    _loop_1(i);
}
var allBoxes = document.querySelectorAll(".allBox");
var box1 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");
var box4 = document.querySelector("#box4");
for (var j = 0; j < allBoxes.length; j++) {
    var allBox = allBoxes[j];
}
var body = document.body;
var docElem = document.documentElement;
docElem = (docElem.clientHeight) ? docElem : body;
var checkScroll = function () {
    if (docElem.scrollTop > 80) {
        box1.style.visibility = "visible";
        var currentTop = docElem.scrollTop;
        if (currentTop > 200) {
            box1.style.visibility = "hidden";
        }
    }
    if (docElem.scrollTop > 200) {
        box3.style.visibility = "visible";
        var currentTop = docElem.scrollTop;
        if (currentTop > 320) {
            box3.style.visibility = "hidden";
        }
    }
    if (docElem.scrollTop > 320) {
        box2.style.visibility = "visible";
        var currentTop = docElem.scrollTop;
        if (currentTop > 540) {
            box2.style.visibility = "hidden";
        }
    }
    if (docElem.scrollTop > 600) {
        box4.style.visibility = "visible";
        var currentTop = docElem.scrollTop;
        if (currentTop > 900) {
            box4.style.visibility = "hidden";
        }
    }
};
window.addEventListener("scroll", checkScroll);
var allOptions = document.querySelector("screen");
// for (let i = 0; i < allOptions.length; i++) {
// const allOption = allOptions[i]
var selectOption = function () {
    if (allOptions.checked) {
        var curOption = document.querySelector(".optlist");
        curOption.innerHTML = allOptions.value;
    }
};
// }
