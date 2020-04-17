let mainSvg = document.querySelector('.main-svg');
let secondSvg = document.querySelector('.second-svg');
let thirdSvg = document.querySelector('.third-svg');
let fourthSvg = document.querySelector('.fourth-svg');
let content = document.querySelector('.content');
let needle = document.querySelector('.needle');
let audio = new Audio('http://soundbible.com/mp3/Balloon%20Popping-SoundBible.com-1247261379.mp3');
let button = document.querySelector('button');

	button.addEventListener('click', function(){
		button.style.visibility = "hidden";

		setTimeout(() =>{
			needle.style.left = "70vw";
		}, 50);

		setTimeout(() =>{
			needle.style.left = "60vw";
		}, 70);

		setTimeout(() =>{
			needle.style.left = "50vw";
		}, 90);

		setTimeout(() =>{
			needle.style.left = "45vw";
		}, 110);

		setTimeout(() => {
			audio.play();
			mainSvg.style.visibility = "hidden";
			secondSvg.style.visibility = "visible";
		}, 130);

		setTimeout(() => {
			thirdSvg.style.visibility = "visible";
		},150);

		setTimeout(() => {
			content.style.opacity = ".9";
		}, 170);

		setTimeout(() => {
			content.style.opacity = ".8";
		}, 190);

		setTimeout(() => {
			content.style.opacity = ".7";
		}, 210);

		setTimeout(() => {
			content.style.opacity = ".6";
		}, 230);

		setTimeout(() => {
			content.style.opacity = ".4";
		}, 250);

		setTimeout(() => {
			content.style.opacity = ".3";
		},270);

		setTimeout(() => {
			content.style.opacity = ".2";
		}, 290);

		setTimeout(() => {
			content.style.opacity = ".1";
		}, 300);

		setTimeout(() => {
			content.style.opacity = "0";
		}, 300);

		setTimeout(() =>{
			mainSvg.style.visibility = "visible";
			secondSvg.style.visibility = "hidden";
			thirdSvg.style.visibility = "hidden";
			needle.style.left = "80vw";
			content.style.opacity = "1";
		}, 1500);
	});
