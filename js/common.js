$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.reviews-slider').slick({
	slidesToShow: 1,
	variableWidth: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: false,
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});

$('.btn-burger').on('click', function (e) {
	e.preventDefault();
	$('.mobile-menu').fadeToggle();
});

$('.mobile-menu__close').on('click', function (e) {
	e.preventDefault();
	$('.mobile-menu').fadeOut();
});


// window.onload = function () {
// 	let tl1 = new TimelineMax({ onUpdate: updatePercentage });
// 	let tl2 = new TimelineMax();
// 	const controller = new ScrollMagic.Controller();

	
// 	tl1.to(".logo-animation", 2, {
// 		y: -200,
// 		ease: "power1.inOut",
// 	});
// 	tl1.to(".home-image", 2, {
// 		right: 0,
// 		scale: 2,
// 		ease: "power1.inOut",
// 	});
// 	tl1.to(".home-footer", 2, {
// 		y: 100,
// 		opacity: 0,
// 		ease: "power1.inOut",
// 	});
// 	tl1.to(".title-text", 5.0, {
// 		y: -1,
// 		ease: "power1.inOut",
// 	});
// 	tl1.to(".about-image img", 5.0, {
// 		x: 1,
// 		y: 1,
// 		ease: "power1.inOut",
// 	});
// 	tl1.to(".kitchen .box-text", 5.0, {
// 		x: 1,
// 		ease: "power1.inOut",
// 	});

// 	tl1.from(
// 		"#PC1 .pcside",
// 		1,
// 		{ x: -200, opacity: 0, ease: Power4.easeInOut },
// 		"=-1"
// 	);
// 	tl1.from(
// 		"#PC1 .pcfront",
// 		1,
// 		{ x: 200, opacity: 0, ease: Power4.easeInOut },
// 		"=-.7"
// 	);

// 	tl2.from("#PC1 .box", 1, { opacity: 0, scale: 0 });
// 	tl2.to(".box", 0.5, {
// 		left: "20%",
// 		scale: 1.3,
// 		borderColor: "white",
// 		borderWidth: 12,
// 		boxShadow: "1px 1px 0px 0px rgba(0,0,0,0.09)"
// 	});

// 	const scene = new ScrollMagic.Scene({
// 		triggerElement: "#PC1",
// 		triggerHook: "onLeave",
// 		duration: "100%"
// 	})
// 		.setPin("#PC1")
// 		.setTween(tl1)
// 		.addTo(controller);

// 	const scene2 = new ScrollMagic.Scene({
// 		triggerElement: "#PC1 blockquote"
// 	})
// 		.setTween(tl2)
// 		.addTo(controller);

// 	function updatePercentage() {
// 		//percent.innerHTML = (tl1.progress() *100 ).toFixed();
// 		tl1.progress();
// 		console.log(tl1.progress());
// 	}

// 	let tl3 = new TimelineMax({ onUpdate: updatePercentage2 });
// 	let tl4 = new TimelineMax();
// 	const controller2 = new ScrollMagic.Controller();

// 	tl3.from("#PC2 blockquote", 0.5, { x: 200, opacity: 0 });
// 	tl3.from("#PC2 span", 1, { width: 0 }, "=-.5");
// 	tl3.from(
// 		"#PC2 .pcside",
// 		1,
// 		{ x: -200, opacity: 0, ease: Power4.easeInOut },
// 		"=-1"
// 	);
// 	tl3.from(
// 		"#PC2 .pcfront",
// 		1,
// 		{ x: 200, opacity: 0, ease: Power4.easeInOut },
// 		"=-.7"
// 	);

// 	tl4.from("#PC2 .box", 1, { opacity: 0, scale: 0 });
// 	tl4.to("#PC2 .box", 0.5, {
// 		left: "20%",
// 		scale: 1.3,
// 		borderColor: "white",
// 		borderWidth: 12,
// 		boxShadow: "1px 1px 0px 0px rgba(0,0,0,0.09)"
// 	});

// 	const scene3 = new ScrollMagic.Scene({
// 		triggerElement: "#PC2",
// 		triggerHook: "onLeave",
// 		duration: "100%"
// 	})
// 		.setPin("#PC2")
// 		.setTween(tl3)
// 		.addTo(controller2);

// 	const scene4 = new ScrollMagic.Scene({
// 		triggerElement: "#PC2 blockquote"
// 	})
// 		.setTween(tl4)
// 		.addTo(controller);

// 	function updatePercentage2() {
// 		tl3.progress();
// 		console.log(tl1.progress());
// 	}

// 	let tl5 = new TimelineMax({ onUpdate: updatePercentage3 });
// 	let tl6 = new TimelineMax();
// 	const controller3 = new ScrollMagic.Controller();

// 	tl5.from("#PC3 blockquote", 0.5, { x: 200, opacity: 0 });
// 	tl5.from("#PC3 span", 1, { width: 0 }, "=-.5");
// 	tl5.from(
// 		"#PC3 .pcside",
// 		1,
// 		{ x: -200, opacity: 0, ease: Power4.easeInOut },
// 		"=-1"
// 	);
// 	tl5.from(
// 		"#PC3 .pcfront",
// 		1,
// 		{ x: 200, opacity: 0, ease: Power4.easeInOut },
// 		"=-.7"
// 	);

// 	tl6.from("#PC3 .box", 1, { opacity: 0, scale: 0 });
// 	tl6.to("#PC3 .box", 0.5, {
// 		left: "20%",
// 		scale: 1.3,
// 		borderColor: "white",
// 		borderWidth: 12,
// 		boxShadow: "1px 1px 0px 0px rgba(0,0,0,0.09)"
// 	});

// 	const scene5 = new ScrollMagic.Scene({
// 		triggerElement: "#PC3",
// 		triggerHook: "onLeave",
// 		duration: "100%"
// 	})
// 		.setPin("#PC3")
// 		.setTween(tl5)
// 		.addTo(controller3);

// 	const scene6 = new ScrollMagic.Scene({
// 		triggerElement: "#PC3 blockquote"
// 	})
// 		.setTween(tl6)
// 		.addTo(controller3);

// 	function updatePercentage3() {
// 		tl5.progress();
// 		console.log(tl1.progress());
// 	}
// 	let tl7 = new TimelineMax({ onUpdate: updatePercentage4 });
// 	let tl8 = new TimelineMax();
// 	const controller4 = new ScrollMagic.Controller();

// 	tl7.from("#PC4 blockquote", 0.5, { x: 200, opacity: 0 });
// 	tl7.from("#PC4 span", 1, { width: 0 }, "=-.5");
// 	tl7.from(
// 		"#PC4 .pcside",
// 		1,
// 		{ x: -200, opacity: 0, ease: Power4.easeInOut },
// 		"=-1"
// 	);
// 	tl7.from(
// 		"#PC4 .pcfront",
// 		1,
// 		{ x: 200, opacity: 0, ease: Power4.easeInOut },
// 		"=-.7"
// 	);

// 	tl8.from("#PC4 .box", 1, { opacity: 0, scale: 0 });
// 	tl8.to("#PC4 .box", 0.5, {
// 		left: "20%",
// 		scale: 1.3,
// 		borderColor: "white",
// 		borderWidth: 12,
// 		boxShadow: "1px 1px 0px 0px rgba(0,0,0,0.09)"
// 	});

// 	const scene7 = new ScrollMagic.Scene({
// 		triggerElement: "#PC4",
// 		triggerHook: "onLeave",
// 		duration: "100%"
// 	})
// 		.setPin("#PC4")
// 		.setTween(tl7)
// 		.addTo(controller4);

// 	const scene8 = new ScrollMagic.Scene({
// 		triggerElement: "#PC4 blockquote"
// 	})
// 		.setTween(tl8)
// 		.addTo(controller4);

// 	function updatePercentage4() {
// 		tl7.progress();
// 		console.log(tl1.progress());
// 	}
// };
