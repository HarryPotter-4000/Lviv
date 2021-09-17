let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
	if (prevScrollpos < currentScrollPos) {
		document.getElementById("navbar").classList.add('navbar--hidden');
	} else {
		document.getElementById("navbar").classList.remove('navbar--hidden');
	}
	prevScrollpos = currentScrollPos;
}