function increaseVolume(){

    var videoEle = document.getElementsByTagName("video")[0];
    var audioCtx = new AudioContext();
    var audioSource = audioCtx.createMediaElementSource(videoEle);


    var gainNode = audioCtx.createGain();
    gainNode.gain.value = parseFloat(prompt("Audio Level", "2.5")); // double the volume
    audioSource.connect(gainNode);

  
    gainNode.connect(audioCtx.destination);
}

increaseVolume();