function hideShow(param) {
	let elem = document.getElementById(param.srcElement.firstElementChild.id);
	if (elem.style.display == "none") {
		elem.style.display = "block";
	} else {
		elem.style.display = "none";
	}
}
