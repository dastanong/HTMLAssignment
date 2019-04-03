
const topNavs = document.querySelectorAll(".topnav-li")

for (let i = 0; i < topNavs.length; i++) {
	const topNav = topNavs[i]

	const navHover = () => {
		topNav.style.backgroundColor = "#4B4B4B"
	}
	topNav.addEventListener("mouseover", navHover)

	const leaveHover = () => {
		topNav.style.backgroundColor = "black"
	}
	topNav.addEventListener("mouseout", leaveHover)
}

const allBoxes = document.querySelectorAll(".allBox")

for (let j = 0; j < allBoxes.length; j++) {
	const allBox = allBoxes[j]
}

const box1 = document.querySelector("#box1")
const box2 = document.querySelector("#box2")
const box3 = document.querySelector("#box3")
const box4 = document.querySelector("#box4")

var body = document.body
var docElem = document.documentElement

docElem = (docElem.clientHeight) ? docElem : body;

const checkScroll = () => {
	if (docElem.scrollTop > 80) {
		box1.style.visibility = "visible"
		var currentTop = docElem.scrollTop
		if (currentTop > 200) {
			box1.style.visibility = "hidden"
		}
	}

	if (docElem.scrollTop > 200) {
		box3.style.visibility = "visible"
		var currentTop = docElem.scrollTop
		if (currentTop > 450) {
			box3.style.visibility = "hidden"
		}
	}

	if (docElem.scrollTop > 470) {
		box2.style.visibility = "visible"
		var currentTop = docElem.scrollTop
		if (currentTop > 600) {
			box2.style.visibility = "hidden"
		}
	}

	if (docElem.scrollTop > 750) {
		box4.style.visibility = "visible"
		var currentTop = docElem.scrollTop
		if (currentTop > 1300) {
			box4.style.visibility = "hidden"
		}
	}
}

window.addEventListener("scroll", checkScroll)

const allOptions = document.querySelector("#reso1")
const checkedReso = document.querySelector("#screenReso")

for (let x = 0; x < allOptions.length; x++) {
	const allOption = allOptions[x]

	const selectOption = () => {
		if (allOption.checked) {
			checkedReso.innerHTML = `<p>${allOption.value}</p>`
		}
	}
	allOption.addEventListener("click", selectOption)
}