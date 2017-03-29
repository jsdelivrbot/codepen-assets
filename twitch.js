simply.title('Hello World3');
ajax({
 type: 'GET',
 url: 'https://api.twitch.tv/kraken/channels/twitch',
 headers: {
   'Client-ID': '9vd07462fvgwhjxb4767tv020zrriv'
 },
}, function(data) {
   simply.body(data);
}, function(data) {
   simply.body(data);
});
