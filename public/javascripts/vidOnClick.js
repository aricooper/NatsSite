var TidalAPI = require('tidalapi');

var api = new TidalAPI({
    username: 'nzedan@willamette.edu',
    password: 'supercali',
    token: '4zx46pyr9o8qZNRw',
    // Could also be 'LOSSLESS' but this only supported on premium subscriptions
    quality: 'HIGH'
});
startMusic();

//videoPlayer.addEventListener('click', function () {
//    startMusic();
//    if (videoPlayer.paused === false) {
//        videoPlayer.pause();
//        videoPlayer.firstChild.nodeValue = 'Play';
//    } else {
//        videoPlayer.play();
//        videoPlayer.firstChild.nodeValue = 'Pause';
//    }
//});
//videoPlayer2.addEventListener('click', function () {
//    if (videoPlayer2.paused === false) {
//        videoPlayer2.pause();
//        videoPlayer2.firstChild.nodeValue = 'Play';
//    } else {
//        videoPlayer2.play();
//        videoPlayer2.firstChild.nodeValue = 'Pause';
//    }
//});


function startMusic() {
    console.log('Tidal:  \n');
    api.search({type: 'artists', query: 'Dream Theater', limit: 1}, function (data) {
        console.log(data.artists);
    });
}
