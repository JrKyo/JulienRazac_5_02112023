const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let index=0;

const dots = document.querySelector(".dots");
for (let i=0; i<slides.length; i++){
	dots.innerHTML+='<div class="dot"></div>';	
}

const alldots = document.querySelectorAll(".dot");
alldots[index].classList.add("dot_selected");


const arrowRight = document.querySelector(".arrow_right");
let image= document.querySelector(".banner-img");
let title= document.querySelector("#banner p");
console.log(title);
arrowRight.addEventListener("click", (e)=> {
	e.preventDefault();
	if (index==slides.length-1) {
		index=0;
	} else{
		index++;
	}
	image.src ="./assets/images/slideshow/"+slides[index].image;
    title.innerHTML=slides[index].tagLine;
	 for(let i=0; i<alldots.length;i++){
	 	alldots[i].classList.remove("dot_selected");
	 }
	 alldots[index].classList.add("dot_selected");
})

const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", ()=> {
	if (index==0) {		
   index=slides.length;} 
   index--;
   image.src ="./assets/images/slideshow/"+slides[index].image;
   title.innerHTML=slides[index].tagLine;
   for(let i=0; i<alldots.length;i++){
	alldots[i].classList.remove("dot_selected");
}
alldots[index].classList.add("dot_selected");
})
