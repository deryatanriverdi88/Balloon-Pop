let mainSvg = document.querySelector('.main-svg');
let secondSvg = document.querySelector('.second-svg');
let thirdSvg = document.querySelector('.third-svg');
let fourthSvg = document.querySelector('.fourth-svg');
let content = document.querySelector('.content');
let needle = document.querySelector('.needle');

needle.addEventListener('click', function(){
	setTimeout(() =>{
		needle.style.left = "700px";
	}, 10);

	setTimeout(() =>{
		needle.style.left = "600px";
	}, 20);

	setTimeout(() =>{
		needle.style.left = "500px";
	}, 30);

	setTimeout(() =>{
		needle.style.left = "450px";
	}, 40);

	setTimeout(() => {
		mainSvg.style.visibility = "hidden";
		secondSvg.style.visibility = "visible";
	}, 100);

    setTimeout(() => {
		thirdSvg.style.visibility = "visible";
	},120);

    setTimeout(() => {
		content.style.opacity = ".9";
	}, 140);

	setTimeout(() => {
		content.style.opacity = ".8";
	}, 160);

	setTimeout(() => {
	    content.style.opacity = ".7";
	}, 180);

	setTimeout(() => {
		content.style.opacity = ".6";
	}, 200);

	setTimeout(() => {
		content.style.opacity = ".4";
	}, 220);

	setTimeout(() => {
		content.style.opacity = ".3";
	},240);

	setTimeout(() => {
		content.style.opacity = ".2";
	}, 260);

	setTimeout(() => {
		content.style.opacity = ".1";
	}, 280);

	setTimeout(() => {
		content.style.opacity = "0";
	}, 300);

	setTimeout(() =>{
		mainSvg.style.visibility = "visible";
	    secondSvg.style.visibility = "hidden";
		thirdSvg.style.visibility = "hidden";
		needle.style.left = "800px";
		content.style.opacity = "1";
	}, 400);
});