(function() {
    const path = window.location.pathname.split('/')[1];
    const randomOption = [1, 1, 1][Math.floor(Math.random() * 3)];
    const embedUrl = `https://tarjetarojaenvivo.lat/player/${randomOption}/${path}`;
    
    // Configure JW Player with VAST
    var playerInstance = jwplayer('player-container').setup({
        width: '100%',
        height: '100%',
        advertising: {
            client: 'vast',
            tag: 'https://grounded-flight.com/demQF/z.dZGiNJvOZGGvUb/DeLm/9MufZUU/l/keP/TSYlwFMyzpUi4eN/DDEatDNUjWAtzYNpT/gp0xMbi/Z-sdaZWF1/p/d/Dq0DxI',
            skipoffset: 8,
            admessage: "The ad will end in xx seconds.",
            cuetext: "Ad",
            skipmessage: "Skip ad in xx seconds",
            skiptext: "Skip",
            vpaidmode: "enabled"
        },
        playlist: [{
            sources: [{
                file: 'https://t.m3u8',
                type: 'application/x-mpegURL'
            }]
        }]
    });

    // After the ad finishes, remove player and display iframe
    playerInstance.on('adComplete', function() {
        document.getElementById('player-container').remove();
        document.getElementById('embed-container').style.display = 'block';
        document.getElementById('embed-container').innerHTML = `<iframe allowfullscreen='true' frameborder='0' sandbox='allow-same-origin allow-scripts allow-top-navigation' src='${embedUrl}'/>`;
    });

    // If the ad is skipped, remove player and display iframe
    playerInstance.on('adSkipped', function() {
        document.getElementById('player-container').remove();
        document.getElementById('embed-container').style.display = 'block';
        document.getElementById('embed-container').innerHTML = `<iframe allowfullscreen='true' frameborder='0' sandbox='allow-same-origin allow-scripts allow-top-navigation' src='${embedUrl}'/>`;
    });
})();
