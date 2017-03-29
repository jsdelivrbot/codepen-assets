simply.title('Hello World3');
ajax({
 type: 'GET',
 url: 'https://api.twitch.tv/kraken/streams/twitchplayspokemon',
 headers: {
   'Client-ID': '9vd07462fvgwhjxb4767tv020zrriv'
 },
}, function(data) {
   simply.body(data.stream);
}, function(data) {
   simply.body(data.stream.preview.medium);
});
