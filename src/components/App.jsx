class App extends React.Component {
  constructor(){
    super();

    this.state = {
      videoList: [],
      currentVideo: null
    };

    // probably have to put something else here using decontruction
  }
  
  updateVideo(video){
    this.setState({currentVideo: video});
  }

  updateVideoList(videos){
    this.setState({videoList: videos});
  }

  render(){
    // probably some kind of if then...  
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            {/* put search here */}
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
          // update with new search function
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          // update with new video player
        </div>
        <div className="col-md-5">
          // update with new video list
        </div>
      </div>
    </div>
  );

};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
