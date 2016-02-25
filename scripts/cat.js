var giphySearchUrl = "https://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC"

var localGifUrl = function(str){
    return './images/'+str+'.gif'
}

var renderLocal = function(){
    var url = localGifUrl('cat')
    $('img#gif').attr('src', url)
}

var render = function(data){
    $('img#gif').attr('src', data.data[0].images.original.url)
}

var load = function(){
    $.get(giphySearchUrl, render)
}

$(document).ready(renderLocal)