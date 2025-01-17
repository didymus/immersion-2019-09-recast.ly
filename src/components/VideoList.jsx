const VideoList = (props) => (

  <div className="video-list">
    {props.videos.map(video => (
      <VideoListEntry key={video.id.videoId} video={video} onClick={props.onClick} />
      ))}
      </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
  onClick: PropTypes.func
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
