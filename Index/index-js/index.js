const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
burger.addEventListener('click', burgerAction);

function burgerAction() {
	nav.classList.toggle('nav--visible');
	burger.classList.toggle('burger--active');
}

const el = document.getElementsByClassName('nav__item');




for (const i in el) {
	if (Object.hasOwnProperty.call(el, i)) {
		el[i].addEventListener("click", scrollto);
		function scrollto() {
			nav.classList.remove('nav--visible');
			burger.classList.remove('burger--active');
			switch (true) {
				case i == 0:
					const home = document.querySelector('.history');
					home.scrollIntoView(top);
					break;
				case i == 1:
					const about = document.querySelector('.video');
					about.scrollIntoView(top);
					break;
				case i == 2:
					const expertise = document.querySelector('.expertise');
					expertise.scrollIntoView(top);
					break;
				case i == 3:
					const teams = document.querySelector('.team');
					teams.scrollIntoView(top);
					break;
				case i == 4:
					const works = document.querySelector('.work');
					works.scrollIntoView(top);
					break;
				case i == 5:
					const people = document.querySelector('.testimonials');
					people.scrollIntoView(top);
					break;
				case i == 6:
					const contact = document.querySelector('.contact');
					contact.scrollIntoView(top);
					break;

				default:
					break;
			}
		}
	}
}