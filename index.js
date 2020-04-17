let mainSvg = document.querySelector('.main-svg');
let secondSvg = document.querySelector('.second-svg');
let thirdSvg = document.querySelector('.third-svg');
let fourthSvg = document.querySelector('.fourth-svg');
let content = document.querySelector('.content')

mainSvg.addEventListener('click', function(){
	mainSvg.style.visibility = "hidden";
	secondSvg.style.visibility = "visible";

    setTimeout(() => {
		thirdSvg.style.visibility = "visible";
    },50);

    setTimeout(() => {
		content.style.opacity = ".9";
    }, 60);

	setTimeout(() => {
		content.style.opacity = ".8";
    }, 80);

	setTimeout(() => {
		content.style.opacity = ".7";
    }, 100);

	setTimeout(() => {
		content.style.opacity = ".6";
    }, 120);

	setTimeout(() => {
		content.style.opacity = ".4";
    }, 140);

	setTimeout(() => {
		content.style.opacity = ".3";
    },160);

	setTimeout(() => {
		content.style.opacity = ".2";
    }, 180);

	setTimeout(() => {
		content.style.opacity = ".1";
    }, 200);

	setTimeout(() => {
		content.style.opacity = "0";
    }, 220);

	setTimeout(() =>{
		mainSvg.style.visibility = "visible";
	    secondSvg.style.visibility = "hidden";
		thirdSvg.style.visibility = "hidden";
		content.style.opacity = "1";
	}, 400);
})