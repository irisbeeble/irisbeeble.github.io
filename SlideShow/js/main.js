$(function(){	
		var duration = 300;
		var $container = $('.slideshow');
		var $slides = $container.find('img');//slides[];
		var slideCount = $slides.length;//數字
		var currentIndex = 0;//當前的圖片 ＝ 0		
		
		$slides.eq(currentIndex).fadeIn();
		
		setInterval(showNextSlide, 2000);

		function showNextSlide(){
			//var nextIndex = (currentIndex+1>=slideCount)?0:currentIndex++;
			var nextIndex = (currentIndex+1)%slideCount; //0,1 |1, 2| 2, 3
			$slides.eq(currentIndex).fadeOut();
			$slides.eq(nextIndex).fadeIn();
			currentIndex = nextIndex;
			
		};
	
		
		$('.no-gutter div').on({
			
			mouseover: function(){
			

			//$(this).find('img').fadeOut();
			$(this).find('>span').stop(true).animate({
                width: '100%',         
            })

            

            },
            
            mouseout: function(){
            
				$(this).find('>span').stop(true).animate({
                width: '0%',         
            })

            }


   		 
		});

		

});