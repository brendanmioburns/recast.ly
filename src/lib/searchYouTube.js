var searchYouTube = (options, callback) => {
  options.query = options.query || 'cats';
  options.max = options.max || 10;
  options.key = options.key || window.YOUTUBE_API_KEY;
  
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + options.query + '&type=video&key=' + options.key + '&maxResults=' + options.max + '&videoEmbeddable=true',
    type: 'GET',
    contentType: 'application/json',
    
    success: function(data) {
      console.log(data.items);
      callback(data.items);
    },
    error: function(data) {
      console.error('failed to get video', data.items);
    }
  });
};

window.searchYouTube = searchYouTube;
