// animation
// gsap.registerPlugin(ScrollTrigger) 
gsap
	.timeline({
		scrollTrigger: {
			trigger: ".home",
			start: "top",
			end: "bottom",
			scrub: 1
		}
	})
	.to(".home-image", { scale: 1.5, right: 0, }, 0)

let mm = gsap.matchMedia();

mm.add("(min-width: 992px)", () => {
	gsap
		.timeline({
			scrollTrigger: {
				trigger: ".home",
				start: "top",
				end: "bottom",
				scrub: 1
			}
		})
		.fromTo(".logo-animation img", { y: 0 }, { y: -200 }, 0)
		.fromTo(".home-footer", { y: 0, opacity: 1 }, { y: 150, opacity: 0 }, 0);


	gsap
		.timeline({
			scrollTrigger: {
				trigger: ".home-footer",
				scrub: 1
			}
		})
		.fromTo(".about-title-text", { y: 200 }, { y: -500 }, 0);


	gsap
		.timeline({
			duration: 1,
			scrollTrigger: {
				trigger: ".about-image",
				// start: "top",
				// end: () => '+=${document.querySelector(".about-image").offsetHeight}',
				scrub: true
			}
		})
		.to(".about-image img", { bottom: 0, left: 0, scale: 1.25 }, 0);

	gsap
		.timeline({
			duration: 1,
			scrollTrigger: {
				trigger: ".kitchen",
				scrub: 1
			}
		})
		.to(".kitchen-title-text", { y: '-100%' }, 0)
		// .to(".kitchen-content .box-text", { x: 0, opacity: 1 }, 0)
		.to(".kitchen-image", { x: 0 }, 0);

	gsap
		.timeline({
			scrollTrigger: {
				trigger: ".atmosphere",
				scrub: 1
			}
		})
		.to(".atmosphere-title-text", { bottom: "100px" }, 0);

	gsap
		.timeline({
			scrollTrigger: {
				trigger: ".programm",
				scrub: 1
			}
		})
		.to(".programm-col1 .programm-card__photo", { y: -50, zoom: 1 }, 0);


	gsap
		.timeline({
			scrollTrigger: {
				trigger: ".atmosphere",
				scrub: 1
			}
		})
		.to(".atmosphere-title-text", { y: -500 }, 0);

	gsap
		.timeline({
			scrollTrigger: {
				trigger: ".programm-title-text",
				scrub: 1
			}
		})
		.fromTo(".programm-title-text", { x: 1000 }, { x: -600 }, 0);

	gsap
		.timeline({
			duration: 1,
			scrollTrigger: {
				trigger: ".our-halls",
				// start: "top",
				// end: () => '+=${document.querySelector(".about-image").offsetHeight}',
				scrub: true
			}
		})
		.to(".our-halls__image", { left: 0 }, 0);
});

new WOW().init();

// scrollTo requires the ScrollTo plugin (not to be confused w/ ScrollTrigger)

$(function () {
	let header = $('.header-scroll').offset().top;
	let hederHeight = $('.header-scroll').height(); // вычисляем высоту шапки
	$(window).scroll(function () {
		if ($(window).scrollTop() > header) {
			$('.header-scroll').addClass('fixed');
			$('body').css({
				'paddingTop': hederHeight + 'px' // делаем отступ у body, равный высоте шапки
			});
		} else {
			$('.header-scroll').removeClass('fixed');
			$('body').css({
				'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
			})
		}
	});
});