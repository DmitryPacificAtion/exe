import 'bootstrap';
// Загружаем SVG спрайт
(function (window, document) {
	'use strict';
	var file = '../img/sprite.svg'; // путь к файлу спрайта на сервере
	var revision = 1; // версия спрайта

	if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) return true;

	var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null;
	var request;
	var data;
	var insertIT = function () {
		document.body.insertAdjacentHTML('afterbegin', data);
	};
	var insert = function () {
		if (document.body) insertIT();
		else document.addEventListener('DOMContentLoaded', insertIT);
	};

	if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
		data = localStorage.getItem('inlineSVGdata');
		if (data) {
			insert();
			return true;
		}
	}
	try {
		request = new XMLHttpRequest();
		request.open('GET', file, true);
		request.onload = function () {
			if (request.status >= 200 && request.status < 400) {
				data = request.responseText;
				insert();
				if (isLocalStorage) {
					localStorage.setItem('inlineSVGdata', data);
					localStorage.setItem('inlineSVGrev', revision);
				}
			}
		}
		request.send();
	} catch (e) { }
}(window, document));

var ontop = $('.on-top');
ontop.addEventListener('click', function (e) {
	e.preventDefault;
	scrollTo(e, 0);
});


// var items = $('.products-slider').find('.products-item');
// console.log(items);
// $('.oi-chevron-left').on('click', function (e) {
// 	var atrs = [];
// 	items.map(function(atrs){
// 		if (this.classList.contains('active')) 
// 			console.log(this.getAttribute('data-slider'));

// 	});

// 	// var min = elems[0].getAttribute('data-slider');
// 	// elems[3].classList.remove('active');
// 	// items.filter('[data-slider=' + --min + ']').addClass('active');
// 	// if(min == 0) {
// 	// 	items[items.length -1].addClass('active');
// 	// }
// });
// $('.oi-chevron-right').on('click', function (e) {
// 	var elems = items.filter('.active');
// 	var max = elems[3].getAttribute("data-slider");
// 	console.log('data-slider max ', max);
// });

var d = document;
var slider = d.querySelector('.products-slider');
var items = d.querySelector('.items');
console.log(items);

/*********************************************




============================================
=										   =
=   https://codepen.io/rendro/pen/ajhrn    =
=										   =
============================================







*********************************************/

// var pos = 0;
// // var transform = Modernizr.prefixed('transform');

// function setTransform() {
//   items.style.transform = 'translate3d(' + (-pos * items.offsetWidth) + 'px,0,0)';
// }

// function prev() {
//   pos = Math.max(pos - 1, 0);
//   setTransform();
// }

// function next() {
//   pos = Math.min(pos + 1, itemCount - 1);
//   setTransform();
// }

// window.addEventListener('resize', setTransform);