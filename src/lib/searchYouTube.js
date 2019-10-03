const searchYouTube = (options, callback) => { // check this shit later
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: options.key,
    q: options.query,
    maxResults: options.max,
    type: 'video',
    videoEmbeddable: 'true'
  }).done(data => callback(data.items))
    .fail(err => console.log('GET failed', err));
}; // the GET request for the Google YouTube API

window.searchYouTube = searchYouTube;