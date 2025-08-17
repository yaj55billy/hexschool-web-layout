import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiperSearchResultsTop10 = new Swiper(".swiper-search-results-top10", {
	// Optional parameters
	direction: "horizontal",
	modules: [Navigation, Pagination],
	spaceBetween: 24,
	loop: true,

	breakpoints: {
		320: {
			slidesPerView: 1.2,
		},
		768: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
		},
		1400: {
			slidesPerView: 4,
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-custom-next-fortop10",
		prevEl: ".swiper-custom-prev-fortop10",
	},
});

const swiperSearchResultsFeature = new Swiper(
	".swiper-search-results-feature",
	{
		// Optional parameters
		direction: "horizontal",
		modules: [Navigation, Pagination],
		spaceBetween: 24,
		loop: true,

		breakpoints: {
			320: {
				slidesPerView: 1.2,
			},
			768: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			},
		},

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-custom-next-forfeature",
			prevEl: ".swiper-custom-prev-forfeature",
		},
	}
);

const swiperSearchResultsHero = new Swiper(".swiper-search-results-hero", {
	// Optional parameters
	direction: "horizontal",
	modules: [Navigation, Pagination],
	slidesPerView: 1,
	loop: true,
	pagination: {
		el: ".swiper-pagination-hero",
		clickable: true,
	},
});
