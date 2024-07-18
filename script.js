document.getElementById('showVideoBtn').addEventListener('click', function() {
    var videoContainer = document.getElementById('videoContainer');
    var video = document.getElementById('myVideo');
    
    videoContainer.classList.toggle('hidden');
    if (!videoContainer.classList.contains('hidden')) {
        video.play();
    } else {
        video.pause();
        video.currentTime = 0; // reset video to start
    }
});