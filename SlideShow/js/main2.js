$(function() {
    // 
    var duration = 300;

    var $aside = $('.page-main > aside');
    var $asideButton = $aside.find('button');
    $asideButton.on('click', function() {
        $aside.toggleClass('open');
        if ($aside.hasClass('open')) {

            $aside.stop(true).animate({
                left: "60px"
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
