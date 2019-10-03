class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      videoList: [],
      currentVideo: {snippet: {title: '', description: ''}, id: {videoId: ''}}
    };

    // default search
    props.searchYouTube({key: window.YOUTUBE_API_KEY, max: 5, query: 'jean baudrillard'}, videos => {
    this.setState({
      // don't show first video in list
      videoList: videos.slice(1),
      // display first video in player
      currentVideo: videos[0]
    });
  });
  }
  // updates video
  updateVideo(video){
    // set state of currentVideo
    this.setState({currentVideo: video});
  }
  // updates video list
  updateVideoList(videos){
    // set state of videoList
    this.setState({videoList: videos});
  }

  render(){  
  return ( 
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search callback={this.updateVideoList.bind(this)} />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} onClick={this.updateVideo.bind(this)} />
        </div>
      </div>
    </div>
    );
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;