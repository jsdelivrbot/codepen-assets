simply.title('Hello World!');
ajax({
 type: 'GET',
 url: 'https://api.twitch.tv/kraken/channels/twitch',
 headers: {
   'Client-ID': '9vd07462fvgwhjxb4767tv020zrriv'
 },
 success: function(data) {
   simply.body(data);
 }
});
