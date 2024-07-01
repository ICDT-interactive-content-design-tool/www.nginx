window.addEventListener('load', function () {
    let audioSrc = decodeURIComponent((new RegExp('[?|&]url=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || ["", ""])[1].replace(/\+/g, '%20')) || null;
    if (!audioSrc) {
        return;
    }

    var source = this.document.createElement('source');
    source.src = audioSrc;

    this.document.querySelector('audio').appendChild(source);

    $(function () {
        $('audio').audioPlayer();
    });
});