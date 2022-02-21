// mobile nav
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const navList = document.querySelector('.nav-list');
	const navItem = document.querySelectorAll('.nav-list a');

	burger.addEventListener('click', () => {
		navList.classList.toggle('open');
		burger.classList.toggle('toggle');
	});
	//close nav when nav-link clicked
	for (let i = 0; i < navItem.length; i++) {
		let closeNav = navItem[i];

		closeNav.addEventListener('click', () => {
			navList.classList.toggle('open');
			burger.classList.toggle('toggle');
		});
	}
};
navSlide();

// GSAP
let tl = gsap.timeline({ defaults: { duration: 1 } });

tl.to('.anim-hero', {
	opacity: 1,
	x: 0,
	duration: 1,
	stagger: 0.5,
	ease: 'none',
}).to('.sign-up', {
	opacity: 1,
	y: 0,
	ease: 'power1',
});

//scrollTrigger
gsap.from('.anim-services', {
	scrollTrigger: {
		trigger: '.anim-services',
		start: '20px 80%',
	},
	opacity: 0,
	x: -100,
	duration: 1,
	ease: 'power3.out',
	stagger: 0.3,
});
gsap.from('.services-info', {
	scrollTrigger: {
		trigger: '.services-info',
		start: '20px 80%',
	},
	opacity: 0,
	x: -200,
	duration: 1,
	ease: 'power3',
	stagger: 0.3,
});
gsap.from('.services-img', {
	scrollTrigger: {
		trigger: '.services-img',
		start: '20px 80%',
	},
	opacity: 0,
	x: 400,
	duration: 1.5,
	ease: 'power3',
	stagger: 0.3,
});
gsap.from(
	'.membership-heading',
	{
		scrollTrigger: {
			trigger: '.membership-heading',
			start: '10px 100%',
		},
		opacity: 0,
		y: 400,
		duration: 1.5,
		ease: 'power3',
		stagger: 0.3,
	},
	'-=2'
);
gsap.from('.membership-card', {
	scrollTrigger: {
		trigger: '.membership-card',
		start: '5px 90%',
	},
	opacity: 0,
	y: 400,
	duration: 2,
	ease: 'power3',
	stagger: 0.5,
});
gsap.from('.top', {
	scrollTrigger: {
		trigger: '.top',
		start: '20px 90%',
	},
	opacity: 0,
	x: 800,
	duration: 1.5,
	ease: 'power3',
	stagger: 0.3,
});

gsap.from('.team-card', {
	scrollTrigger: {
		trigger: '.top',
		start: '20px 90%',
	},
	opacity: 0,
	y: 800,
	duration: 1,
	ease: 'sine',
	stagger: 0.8,
});

gsap.from('.bottom', {
	scrollTrigger: {
		trigger: '.bottom',
		start: '20px 90%',
	},
	opacity: 0,
	x: -800,
	duration: 1.5,
	ease: 'power3',
	stagger: 0.8,
});

gsap.from('.email-content', {
	scrollTrigger: {
		trigger: '.email-content',
		start: '20px 90%',
	},
	opacity: 0,
	y: 100,
	duration: 1.5,
	ease: 'power3',
	stagger: 0.8,
});
