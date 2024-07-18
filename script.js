document.getElementById('showVideoBtn').addEventListener('click', function() {
    var videoContainer = document.getElementById('videoContainer');
    
    videoContainer.classList.toggle('hidden');
    
    if (!videoContainer.classList.contains('hidden')) {
        var iframe = document.getElementById('rickRollVideo');
        iframe.src += "?autoplay=1"; // start the video with autoplay
    } else {
        var iframe = document.getElementById('rickRollVideo');
        iframe.src = iframe.src.replace("?autoplay=1", ""); // stop the video
    }
});