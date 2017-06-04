var searchYouTube = (options, callback) => {
  options.query = options.query;
  options.max = options.max;
  options.key = options.key || window.YOUTUBE_API_KEY;
  
  $.ajax({
    // url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + options.query + '&type=video&key=' + options.key + '&maxResults=' + options.max + '&videoEmbeddable=true',
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query,
      part: 'snippet',
      key: options.key,
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: 'true'
    },
     // type: 'GET',
    contentType: 'application/json',
    
    success: function(data) {
      console.log('data which I am getting: ', data.items);
      callback(data.items);
    },
    error: function(data) {
      console.error('failed to get video', data);
    }
  });
};

window.searchYouTube = searchYouTube;
