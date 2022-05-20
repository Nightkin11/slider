/* const entities = [
	{
		cityText: 'Rostov-on-Don<br>LCD admiral',
		apartmentArea: '81 m2',
		repairTime: '3.5 months',
		img: './images/admiral-photo.png',
	},
	{
		cityText: 'Sochi<br>Thieves',
		apartmentArea: '105 m2',
		repairTime: '4 months',
		img: './images/sochi-photo.png',
	},
	{
		cityText: 'Rostov-on-Don<br>Patriotic',
		apartmentArea: '93 m2',
		repairTime: '3 months',
		img: './images/patriotic-photo.png',
	}
]

function initSlider() {
	if (!entities || !entities.length) return;

	const cityText = document.querySelector('#city-text')
	const apartmentArea = document.querySelector('#apartment-area')
	const repairTime = document.querySelector('#repair-time')
	const sliderPhoto = document.querySelector('#slider-photo')
	const prev = document.querySelector('.left')
	const next = document.querySelector('.right')

	const setEntity = (index) => {
		cityText.innerHTML = entities[index].cityText
		apartmentArea.innerHTML = entities[index].apartmentArea
		repairTime.innerHTML = entities[index].repairTime
		sliderPhoto.src = entities[index].img
	}


	let currentIndex = 0
	let nextIndex;

	prev.addEventListener('click', () => {
		nextIndex = currentIndex === 0? entities.length-1 : currentIndex-1
		setEntity(nextIndex);
	})
	next.addEventListener('click', () => {
		nextIndex = currentIndex === entities.length-1? 0 : currentIndex + 1
		setEntity(nextIndex);
	})
}

document.addEventListener('DOMContentLoaded', initSlider); */

let entities = [
	{
		cityText: 'Rostov-on-Don<br>LCD admiral',
		apartmentArea: '81 m2',
		repairTime: '3.5 months',
		img: './images/admiral-photo.png',
		alt: 'admiral',
		title: 'Rostov-on-Don LCD admiral',
	},
	{
		cityText: 'Sochi<br>Thieves',
		apartmentArea: '105 m2',
		repairTime: '4 months',
		img: './images/sochi-photo.png',
		alt: 'sochi',
		title: 'Sochi Thieves',
	},
	{
		cityText: 'Rostov-on-Don<br>Patriotic',
		apartmentArea: '93 m2',
		repairTime: '3 months',
		img: './images/patriotic-photo.png',
		alt: 'patriotic',
		title: 'Rostov-on-Don Patriotic',
	}
]

function initSlider() {
	if (!entities || !entities.length) return;

	let sliderImages = document.querySelector('.slider-photo')
	let sliderArrows = document.querySelector('.slider-description-nav')
	let sliderDots = document.querySelector('.slider-description-nav-dots')

	let cityText = document.querySelector('#city-text')
	let apartmentArea = document.querySelector('#apartment-area')
	let repairTime = document.querySelector('#repair-time')

	let sliderTitles = document.querySelector('.slider-nav-ul')

	initImages();
	initArrows();
	initDots();
	initTitle()
	

	function initImages() {
		entities.forEach((image,index) => {
			let imageTag = `<img class="slider-photo__item n${index} ${index === 0? 'active-image' : ''}" src="${entities[index].img}" alt="${entities[index].alt}" data-index="${index}">`;
			sliderImages.innerHTML += imageTag
		})
	}

	function initArrows() {
		sliderArrows.querySelectorAll('.slider-description-nav-arrow').forEach(arrow => {
			arrow.addEventListener('click', function() {
				let curNumber = +sliderImages.querySelector('.active-image').dataset.index;
				let nextNumber;
				if (arrow.classList.contains('left')) {
					nextNumber = curNumber === 0? entities.length-1 : curNumber-1
				} else {
					nextNumber = curNumber === entities.length-1? 0 : curNumber+1
				}
				moveSlider(nextNumber)
			})
		})
	}

	function initDots() {
		entities.forEach((image, index) => {
			let dot = `<img class="slider-description-nav-dot n${index} ${index === 0? 'active-dot' : ''}" src="./images/dot-white.svg" alt="dot" data-index="${index}">`
			sliderDots.innerHTML += dot;
		})
		sliderDots.querySelectorAll('.slider-description-nav-dot').forEach(dot => {
			dot.addEventListener('click', function() {
				moveSlider(this.dataset.index)
			})
		})
	}

	function initTitle() {
		entities.forEach((image, index) => {
			let title = `<li class="slider-nav__item n${index} ${index === 0? 'active-title' : ''}" data-index="${index}">${entities[index].title}</li>`
			sliderTitles.innerHTML += title;
		})
		sliderTitles.querySelectorAll('.slider-nav__item').forEach(title => {
			title.addEventListener('click', function() {
				moveSlider(this.dataset.index)
			})
		})
	}

	function setEntity(index) {
		cityText.innerHTML = entities[index].cityText
		apartmentArea.innerHTML = entities[index].apartmentArea
		repairTime.innerHTML = entities[index].repairTime
	}

	
	function moveSlider(num) {
		sliderImages.querySelector('.active-image').classList.remove('active-image')
		sliderImages.querySelector('.n'+num).classList.add('active-image')
		sliderDots.querySelector('.active-dot').classList.remove('active-dot')
		sliderDots.querySelector('.n'+num).classList.add('active-dot')
		sliderTitles.querySelector('.active-title').classList.remove('active-title')
		sliderTitles.querySelector('.n'+num).classList.add('active-title')
		setEntity(num)
	}
}

document.addEventListener('DOMContentLoaded', initSlider);
