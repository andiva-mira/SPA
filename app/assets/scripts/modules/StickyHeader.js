import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.siteHeader = $('.site-header');
		this.headerTriggerElement = $('.large-hero__description');
		this.pageSections = $('.page-section');
		this.headerLinks = $('.primary-nav a');
		this.createHeaderWaypoint();
		this.createPageSectionWaypoint();
		this.addSmoothScrolling();
	}

	addSmoothScrolling() {
		$(this.headerLinks).smoothScroll();
	}

	createHeaderWaypoint() {
		const that = this;
		new Waypoint({
			element: this.headerTriggerElement[0],
			handler: function(direction) {

				if (direction == 'down') {
					that.siteHeader.addClass('site-header--dark');
				} else {
					that.siteHeader.removeClass('site-header--dark');
				}
				

			}
		});
	}

		createPageSectionWaypoint() {
		const that = this;

		this.pageSections.each(function() {
			const currentPageSection = this;

			new Waypoint({
				element: currentPageSection,
				handler: (direction) => {
					const matchingHeaderLink = $(currentPageSection).data('matching-link');

					if (direction == 'down') {
						that.headerLinks.removeClass('is-current-link');
						$(matchingHeaderLink).addClass('is-current-link');
					}

				},
				offset: '30%'

			});

			new Waypoint({
				element: currentPageSection,
				handler: (direction) => {
					const matchingHeaderLink = $(currentPageSection).data('matching-link');
					
					if (direction == 'up') {
						that.headerLinks.removeClass('is-current-link');
						$(matchingHeaderLink).addClass('is-current-link');
					}
				},
				offset: '-50%'

			});
		});

		
	}

}

export default StickyHeader;