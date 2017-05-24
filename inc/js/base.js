"use strict";

(function() {
	
	var Carousel = {
		props:{
			current_slide:null,
			total_slides:null,
			slide_width: null
		},
		init:function(){

			//ADD INITIALIZER CODE HERE
			Carousel.props.current_slide = 0;
			Carousel.props.total_slides = $('article').length - 1;
			Carousel.props.slide_width = $('article').width();
			Carousel.bindEvents();

		},
		bindEvents:function(){
			$(window).resize(function(){
				Carousel.props.slide_width = $('article').width();
				Carousel.update();
			});

			$(".carousel-next").on("click",function(){
				Carousel.next();
			});
			$(".carousel-prev").on("click",function(){
				Carousel.previous();
			});

			$("body").keydown(function(e) {
			  if(e.keyCode == 37) { // left
			    Carousel.previous();
			  }
			  else if(e.keyCode == 39) { // right
			    Carousel.next();
			  }
			});
		},
		next:function(){
			//ADD NEXT CODE HERE
			Carousel.props.current_slide++;

			if (Carousel.props.current_slide === Carousel.props.total_slides) {
				$('.carousel-next').hide();
			}
			$('.carousel-prev').show();

			Carousel.slide('slide-next');
		},
		previous:function(){
			//ADD PREVIOUS CODE HERE
			Carousel.props.current_slide--;

			if (Carousel.props.current_slide === 0) {
				$('.carousel-prev').hide();
			}
			$('.carousel-next').show();

			Carousel.slide('slide-prev');
		},
		slide:function(direction) {
			$('article').addClass(direction).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
			    $('article').removeClass(direction).off('webkitAnimationIteration');

			    Carousel.update();
			});
		},
		update:function(){
			//ADD UPDATE CODE HERE
			var left_pos = -1 * Carousel.props.current_slide * Carousel.props.slide_width;
			$('.carousel-cells').css('margin-left', left_pos + 'px');
		}
	}
	$(function(){
		Carousel.init();
	})

})(window);