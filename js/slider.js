
     $(document).ready(function() {
        $("#content-slider").lightSlider({
            loop:true,
            keyPress:true,
        });
        $('#image-gallery').lightSlider({
            gallery:true,
            item:1,
            thumbItem:8,
            slideMargin: 0,
            speed:400,
            auto:true,
            loop:true,
            pause:7000,
            onSliderLoad: function() {
                $('#image-gallery').removeClass('cS-hidden');
            }  
        });
    });