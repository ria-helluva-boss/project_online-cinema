import '../scss/style.scss';
import imageGirlsbisuness from '/images/header/girlsbisuness.svg';
import imageLuna from '/images/header/luna.svg';
import imageHorse from '/images/header/horse.svg';
import imageIvanushki from '/images/header/ivanushki.svg';
import imageWolf from '/images/header/lobo.svg';
import imageCosmos from '/images/header/cosmos.svg';
import imageMaria from '/images/header/maria.svg';

new Swiper('.swiper', {
	//активация переключения с помощью стрелок
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	//количество слайдов для показа
	slidesPerView: 7,
	//Отключение функционала, если слайдов меньше чем нужно
	watchOverflow: true,
	//Скорость прокрутки
	speed: 600,
	//Отступ между слайдами
	spaceBetween: -25,
	//Адаптив слайдера
	breakpoints: {

		0: {
			slidesPerGroup: 2, //количество пролистываемых слайдов
			speed: 150,
			freeMode: true,
			slidesPerView: 2,
			spaceBetween: 10,
		},
		370: {
			slidesPerGroup: 2, //количество пролистываемых слайдов
			speed: 150,
			freeMode: true,
			slidesPerView: 2,
			spaceBetween: -15,
		},
		471: {
			slidesPerGroup: 2, //количество пролистываемых слайдов
			speed: 150,
			freeMode: true,
			slidesPerView: 3,
			spaceBetween: 0,
		},
		661: {
			slidesPerGroup: 2, //количество пролистываемых слайдов
			speed: 150,
			freeMode: true,
			slidesPerView: 4,
			spaceBetween: 0,
		},
		700: {
			slidesPerGroup: 2, //количество пролистываемых слайдов
			speed: 150,
			freeMode: true,
			slidesPerView: 4,
			spaceBetween: -14,
		},
		800: {
			slidesPerGroup: 2, //количество пролистываемых слайдов
			speed: 150,
			freeMode: true,
			slidesPerView: 5,
			spaceBetween: -3,
		},
		930: {
			slidesPerGroup: 2, //количество пролистываемых слайдов
			speed: 150,
			freeMode: true,
			slidesPerView: 5,
			spaceBetween: -9,
		},
		960: {
			slidesPerGroup: 2, //количество пролистываемых слайдов
			speed: 150,
			freeMode: true,
			slidesPerView: 5,
			spaceBetween: -27,
		},
		980: {
			slidesPerGroup: 2, //количество пролистываемых слайдов
			speed: 150,
			freeMode: true,
			slidesPerView: 6,
			spaceBetween: -10,
		},
		1020: {
			slidesPerGroup: 3, //количество пролистываемых слайдов
			slidesPerView: 6,
			spaceBetween: -10,
		},
		1060: {
			slidesPerGroup: 3, //количество пролистываемых слайдов
			slidesPerView: 6,
			spaceBetween: -18,
		},
		1150: {
			slidesPerGroup: 3, //количество пролистываемых слайдов
			slidesPerView: 6,
			spaceBetween: -20,
		},
		1199: {
			slidesPerGroup: 3, //количество пролистываемых слайдов
			slidesPerView: 6,
			spaceBetween: -38,
		},
		1220: {
			slidesPerGroup: 3, //количество пролистываемых слайдов
			slidesPerView: 6,
			spaceBetween: -30,
		},
		1270: {
			slidesPerGroup: 3, //количество пролистываемых слайдов
			slidesPerView: 6,
			spaceBetween: -38,
		},
		1290: {
			slidesPerGroup: 3, //количество пролистываемых слайдов
			slidesPerView: 7,
			spaceBetween: -25
		},
	}
});

function fetchMovies() {
	fetch("./data.json")
		.then((response) => response.json())
		.then((jsonData) => {
			displayMovies(jsonData, "Комедия", ".comedy-gallery .swiper-wrapper");
			displayMovies(jsonData, "Ужасы", ".horror-gallery .swiper-wrapper");
			displayMovies(jsonData, "Фэнтези", ".fantasy-gallery .swiper-wrapper");
			displayMovies(jsonData, "Триллер", ".thriller-gallery .swiper-wrapper");
			displayMovies(jsonData, "Исторический", ".history-gallery .swiper-wrapper");
			displayMovies(jsonData, "Детектив", ".detective-gallery .swiper-wrapper");
			displayMovies(jsonData, "Экранизация", ".basedOnBooks-gallery .swiper-wrapper");
			displayMovies(jsonData, "Мультфильм", ".cartoon-gallery .swiper-wrapper");
		});
}

function displayMovies(movies, genre, wrapperSelector) {
	const swiperWrapper = document.querySelector(wrapperSelector);

	for (let i = 0; i < movies.length; i++) {
		const movie = movies[i];

		if (movie.genre === genre) {
			const swiperSlide = document.createElement('div');
			swiperSlide.classList.add('swiper-slide');

			const imageSlider = document.createElement('div');
			imageSlider.classList.add('image-slider');

			const linkFilm = document.createElement('a');
			linkFilm.href = `#`;

			const image = document.createElement('img');
			image.classList.add('image')
			image.src = movie.url;
			image.alt = movie.name;

			const hoverDiv = document.createElement('div');
			hoverDiv.classList.add('hover-info');

			const hoverFilmName = document.createElement('h3');
			hoverFilmName.classList.add('hover-film-name');
			hoverFilmName.textContent = movie.name;

			const hoverFilmAction = document.createElement('p');
			hoverFilmAction.classList.add('hover-film-unavailable');
			hoverFilmAction.textContent = 'Скоро на El Cine';

			const movieName = document.createElement('h3');
			movieName.classList.add('movie-name');
			movieName.textContent = movie.name;

			hoverFilmName.after(hoverFilmAction);
			imageSlider.appendChild(hoverFilmName);
			imageSlider.appendChild(hoverFilmAction);
			linkFilm.appendChild(image);
			imageSlider.appendChild(linkFilm);
			imageSlider.appendChild(hoverDiv);
			imageSlider.appendChild(movieName);
			swiperSlide.appendChild(imageSlider);
			swiperWrapper.appendChild(swiperSlide);

			if (movie.name == "Иллюзия обмана 2" ||
				movie.name == "Солнцестояние" ||
				movie.name == "Дом Дракона" ||
				movie.name == "Исчезнувшая" ||
				movie.name == "Чемпион мира" ||
				movie.name == "Мой идеальный незнакомец" ||
				movie.name == "Мастер и Маргарита" ||
				movie.name == "Исповедь неполноценного человека") {
				hoverFilmAction.classList.remove('hover-film-unavailable');
				hoverFilmAction.classList.add('hover-film-available');
				hoverFilmAction.textContent = 'СМОТРЕТЬ';
			}

			if (movie.name == "Иллюзия обмана 2") {
				linkFilm.href = `src/html/comedy.html`;

			} else if (movie.name == "Солнцестояние") {
				linkFilm.href = `src/html/horror.html`;

			} else if (movie.name == "Дом Дракона") {
				linkFilm.href = `src/html/dom-drakona.html`;

			} else if (movie.name == "Исчезнувшая") {
				linkFilm.href = `src/html/gone-girl.html`;

			} else if (movie.name == "Чемпион мира") {
				linkFilm.href = `src/html/world-champion.html`;

			} else if (movie.name == "Мой идеальный незнакомец") {
				linkFilm.href = `src/html/detective.html`;

			} else if (movie.name == "Мастер и Маргарита") {
				linkFilm.href = `src/html/basedOnBooks.html`;

			} else if (movie.name == "Исповедь неполноценного человека") {
				linkFilm.href = `src/html/cartoon.html`;
			}
		}
	}
}

fetchMovies();


//слайдер главный
const imgMain = document.getElementById('carouselMain');
const rightBtnMain = document.getElementById('right-btn');
const leftBtnMain = document.getElementById('left-btn');

let picturesMain = [
	imageGirlsbisuness,
	imageLuna,
	imageHorse,
	imageIvanushki,
	imageWolf,
	imageCosmos,
	imageMaria,
];

imgMain.src = picturesMain[0];
let positionMain = 0;

const moveRight = () => {
	if (positionMain >= picturesMain.length - 1) {
		positionMain = 0
		imgMain.src = picturesMain[positionMain];
		return;
	}
	imgMain.src = picturesMain[positionMain + 1];
	positionMain++;
}

const moveLeft = () => {
	if (positionMain < 1) {
		positionMain = picturesMain.length - 1;
		imgMain.src = picturesMain[positionMain];
		return;
	}
	imgMain.src = picturesMain[positionMain - 1];
	positionMain--;
}

rightBtnMain.addEventListener("click", moveRight);
leftBtnMain.addEventListener("click", moveLeft);