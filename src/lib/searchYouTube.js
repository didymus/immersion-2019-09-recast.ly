const searchYouTube = ({key = YOUTUBE_API_KEY, query = '', max = 5}, callback) => { // check this shit later
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  }).done(data => callback(data.items))
    .fail(err => console.log('GET failed', err));
}; // the GET request for the Google YouTube API

window.searchYouTube = searchYouTube;