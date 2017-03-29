simply.title('Hello World!');
var xhrRequest = function (url, type, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText);
  };
  xhr.setRequestHeader("Client-ID", "9vd07462fvgwhjxb4767tv020zrriv")
  xhr.open(type, url);
  xhr.send();
};
