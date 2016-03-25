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
		 

		 var $aside = $('.page-main > aside');
	     var $asideButton = $aside.find('button');
	    
		 $asideButton.on('click', function() {
	     $aside.toggleClass('open');
	      if ($aside.hasClass('open')) {

            $aside.stop(true).animate({
                left: "-10px"
            }, duration, 'easeInOutQuint');
            $asideButton.find('img').attr("src", "img/btn_close.png");
        } else {
            $aside.stop(true).animate({
                left: "-350px"
            }, duration, 'easeInOutQuint');
            $asideButton.find('img').attr("src", "img/btn_open.png");
        }

    });

   		 
		});

	