setTimeout(function () {
	$('.preloader').fadeOut();
}, 2000);

$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.reviews-slider').slick({
	slidesToShow: 1,
	variableWidth: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 6000,
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: false,
			}
		}
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

$('.btn-toggle-reviews').on('click', function (e) {
	e.preventDefault();
	$(this).prev('.reviews-wrapper').find('.reviews-card:hidden').slice(0, 4).slideDown();

	var onBlock = $(this).prev('.reviews-wrapper').find('.reviews-card:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});

$('.btn-toggle-events').on('click', function (e) {
	e.preventDefault();
	$('.events-card-col:hidden').slice(0, 2).slideDown();

	var onBlock = $('.events-card-col:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});


Fancybox.bind("[data-fancybox]", {
	// Your custom options
});

$('.menu-slider').slick({
	slidesToShow: 3,
	arrows: true,
	dots: true,
	appendDots: '.menu-slider__nav',
	appendArrows: '.menu-slider__nav',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

$('.video-about-slider').slick({
	slidesToShow: 3,
	arrows: true,
	dots: true,
	prevArrow: '<button type="button" class="slick-prev slick-arrow-v2"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next slick-arrow-v2"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

$('.estate-now-slider').slick({
	slidesToShow: 1,
	fade: true,
	arrows: true,
	dots: true,
	asNavFor: '.estate-now-gallery',
	appendDots: '.estate-now-slider__nav',
	appendArrows: '.estate-now-slider__nav',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

$('.estate-now-gallery').slick({
	slidesToShow: 1,
	fade: true,
	arrows: false,
	swipe: false,
	asNavFor: '.estate-now-slider',
});

$('.gallery-celebrations-slider').slick({
	slidesToShow: 1,
	fade: true,
	dots: true,
	appendDots: '.gallery-celebrations-slider__nav',
	appendArrows: '.gallery-celebrations-slider__nav',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

$('.history-info-slider').slick({
	slidesToShow: 1,
	fade: true,
	arrows: true,
	dots: true,
	asNavFor: '.history-photo-slider',
	appendDots: '.history-slider__nav',
	appendArrows: '.history-slider__nav',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

$('.history-photo-slider').slick({
	slidesToShow: 1,
	fade: true,
	arrows: false,
	swipe: false,
	asNavFor: '.history-slider',
});

//progressbar
$('.history-slider').slick({
	slidesToShow: 1,
	arrows: false,
	variableWidth: true,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				variableWidth: false,
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				variableWidth: false,
				slidesToShow: 1,
			}
		}
	]
});

function setProgress(index) {
	const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;

	$progressBar
		.css('width', calc + '%')
		.attr('aria-valuenow', calc);
}

const $slider = $('.history-slider');
const $progressBar = $('.history-slider__progress .progress-bg');

$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	setProgress(nextSlide);
});

setProgress(0);

$('.modal-halls-slider').slick({
	slidesToShow: 1,
	fade: true,
	dots: true,
	arrows: true,
	prevArrow: '<button type="button" class="slick-prev slick-arrow-v2"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next slick-arrow-v2"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

// const myModalEl = document.getElementById('myModal')
// myModalEl.addEventListener('hidden.bs.modal', event => {
	
// })

$('.modal').on('shown.bs.modal', function () {
	$('.modal-halls-slider').slick('setPosition');
});

$('.down').on("click", function () {
	let $input = $(this).parent().find('input');
	let count = parseInt($input.val()) - 1;
	count = count < 1 ? 1 : count;
	$input.val(count);
	$input.change();
	return false;
});
$('.up').on("click", function () {
	let $input = $(this).parent().find('input');
	$input.val(parseInt($input.val()) + 1);
	$input.change();
	return false;
});

$(function () {
	//Сменим язык календаря на русский
	$.datepicker.setDefaults(
		{
			closeText: 'Закрыть',
			prevText: '',
			currentText: 'Сегодня',
			monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
				'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
			monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
				'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
			dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
			dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
			dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
			weekHeader: 'Не',
			dateFormat: 'dd.mm.yy',
			firstDay: 1,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: ''
		});
});

$(function () {
	$(".datepicker").datepicker();
});