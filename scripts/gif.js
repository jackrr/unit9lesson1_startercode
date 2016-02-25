var giphySearchUrl = function(str){
    return "https://api.giphy.com/v1/gifs/search?q="+str+"&api_key=dc6zaTOxFJmzC"
}

var localGifUrl = function(str){
    return '../images/'+str+'.gif'
}

var renderLocal = function(){
    var url = localGifUrl(getMusicianName())
    $('img#gif').attr('src', url)
}

var getMusicianName = function(){
    var pName = window.location.pathname;
    var musician = pName.split('/').pop()
    return musician.match(/^\w+/)[0]
}


var render = function(data){
    $('img#gif').attr('src', data.data[0].images.original.url)
}

var load = function(){
    var musician = getMusicianName()
    $.get(giphySearchUrl(musician), render)
}

$(document).ready(renderLocal)