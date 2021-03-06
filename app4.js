(async () => {
    const peaks = await fetch("mediumFile.json").then(response => response.json()).then(json => json.map(one => {
        if(one < 3) return parseFloat(((parseInt(one) + 3) /255).toFixed(4));
        else return parseFloat((parseInt(one)/255).toFixed(4));
    }
    ));
    //Create new wavesurfer
    var wavesurfer = WaveSurfer.create({
        container: "#waveform",
        height:120,
        barRadius: 0,
        autoCenter: true,
        backgroundColor: "rgba(0,0,0,0)",
        barGap: 2,
        barHeight: 1,
        barWidth: 2,
        cursorColor: "rgba(0,0,0,0)",
        hideScrollbar: true,
        // interact: false, // Có cho người dùng tương tác với thanh wave không? Hay chỉ cho xem thôi. mặc định là true
        partialRender: true,
        pixelRatio: 2,
        progressColor: "rgb(31,159,252)",
        waveColor: "rgb(196, 196, 196)",
        responsive: true,
        scrollParent: true,
        backend: 'MediaElement', // Bắt buộc thêm trường này để sử dụng peak nhận từ ngoài vào
        });
        
    // ******** Load file
    wavesurfer.load("https://cdn.sohatv.vn/26wnSmONIPfKupN8/lotus/9Ky728veUXcJqDhU/10082647_2022_01_04_9Ky728veUXcJqDhU.m4a", peaks);

    //Start playing after song is loaded
    wavesurfer.on("ready", function () {
        console.log("ready");
        document.querySelector("button").onclick = () => {
            wavesurfer.playPause();
        }
    });
})();

