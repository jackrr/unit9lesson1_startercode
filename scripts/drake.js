var giphySearchUrl = "https://api.giphy.com/v1/gifs/search?q=drake&api_key=dc6zaTOxFJmzC"

var render = function(data){
    $('img#gif').attr('src', data.data[0].images.original.url)
}

var load = function(){
    $.get(giphySearchUrl, render)
}

$(document).ready(load)