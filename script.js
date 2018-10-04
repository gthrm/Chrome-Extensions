var photo = document.getElementById('pv_photo');
var url = photo.childNodes[0].src;
var title = document.getElementsByClassName('rel_date')[0].innerHTML;
var place = document.getElementById('pv_place');

place.innerHTML += "<button id='butForSend' style='z-index: 9999;'>Добавить в базу</button>";

document.getElementById('butForSend').onclick = function() {
    var request = new XMLHttpRequest();
    console.log('title: ', title, 'url: ', url);
    
    var body = JSON.stringify({
        title: title,
        url: url
    });

    request.open("POST", 'http://krasnail.ru:8080/imges', true);
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    console.log('body: ', body);
    console.log('typeof body: ', typeof body);
    request.send(body);
}



