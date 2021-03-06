var MP3_API = "https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs";
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var objSong = JSON.parse(xhttp.responseText);
        var content = '';
        console.log(xhttp.responseText);
        for (var i = 0; i < objSong.length; i++) {
            var itemSong = '  <div class="mp3-item">\n' +
                '        <div class="col-2 stt">' + (i + 1) + '</div>\n' +
                '        <div class="col-3 thumbnail">\n' +
                '            <img onclick="GetSong(\'' + objSong[i].link + '\')" width="100px" height="70px" src="' + objSong[i].thumbnail + '" alt="">\n' +
                '        </div>\n' +
                '        <div class="col-5">\n' +
                '            <div class="song-name">' + objSong[i].name + '</div>\n' +
                '            <div class="song-singer">' + objSong[i].singer + '</div>\n' +
                '        </div>\n' +
                '        <div class="col-2"></div>\n' +
                '    </div>';
            content += itemSong;
        }
        document.getElementById('mp3').innerHTML = content;
    }
};

xhttp.open("GET", MP3_API, true);
xhttp.send();

function GetSong(srcSong) {
    var play = document.getElementById('play');

    play.src = srcSong;

}