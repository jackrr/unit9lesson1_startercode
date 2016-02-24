var giphySearchUrl = function(str){
    return "https://api.giphy.com/v1/gifs/search?q="+str+"&api_key=dc6zaTOxFJmzC"
}


var render = function(data){
    $('img#gif').attr('src', data.data[0].images.original.url)
}

var load = function(){
    var pName = window.location.pathname;
    var musician = pName.split('/').pop()
    musician = musician.match(/^\w+/)[0]
    $.get(giphySearchUrl(musician), render)
}

$(document).ready(load)