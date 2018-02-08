window.onload = function () {
    var button = document.getElementById('ppbtn');
    var videos = document.getElementsByClassName('responsive-video');
    var count = document.querySelector('.count');
    var count2 = document.querySelector('.count2');
    var count3 = document.querySelector('.count3');
    var arrayvideos = Array.from(videos)
    button.addEventListener('click', function () {

        arrayvideos.forEach(video => {
            if (video.paused === true) {
                video.play();
                console.log(video.currentTime);

            } else {
                video.pause();
                console.log(video.currentTime);


            }
        });
    });
}