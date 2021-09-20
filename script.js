let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
	if (prevScrollpos < currentScrollPos) {
		// document.getElementById("navbar").style.top = "-86px";
		document.getElementById("navbar").classList.add('navbar--hidden');
	} else {
		// document.getElementById("navbar").style.top = "0";
		// document.getElementById("navbar").style.top = "0";
		document.getElementById("navbar").classList.remove('navbar--hidden');
	}
	prevScrollpos = currentScrollPos;
}