class App extends React.Component {
  constructor(){
    super();

    this.state = {
      videoList: [],
      currentVideo: null
    };

  this.window.searchYouTube({query: 'simulation theory'}, videos => {
    this.setState({
      videoList: videos.slice(1),
      currentVideo: videos[0]
    });
  });
  }
  
  updateVideo(video){
    this.setState({currentVideo: video});
  }

  updateVideoList(videos){
    this.setState({videoList: videos});
  }

  render(){
    if(this.state.currentVideo){  
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchCallback={this.updateVideoList.bind(this)} />
          </div>
        </nav>
        <div>Loading...</div>
      </div>
    );
  }
  
  return ( 
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search searchCallback={this.updateVideoList.bind(this)} />
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
