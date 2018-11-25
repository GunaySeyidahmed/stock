$( document ).ready(function() {
    console.log( "ready!" );
    function playVideo(el) {
        var videoId = el.data('video');
        var video = document.getElementById(videoId);

        if (video.paused) {
            // Play the video
            video.play();
            el.removeClass('paused').addClass('playing');
        }
        else {
            // Pause the video
            video.pause();
            el.removeClass('playing').addClass('paused');
        }
    }
    $(document).on('click', '.js-video-control', function(e) {
        $(this).css('opacity','0.3');
        playVideo($(this));
        e.preventDefault();
    });
    $(".navToggle").click (function(){
        $(this).parent().toggleClass("active");
        $('.header-section .top-menu').toggleClass('d-none');
        $('.main-section').toggleClass('d-none');
    });
});