describe('VideoList', function() {
  const { createRenderer } = ReactShallowRenderer;

  // When testing a React component that renders other nested components,
  // it's a common practice to "shallow render" the component, or render
  // only a single level deep. This isolates the component from it's children
  // See more: https://facebook.github.io/react/docs/test-utils.html#shallow-rendering

  it('should be a stateless functional component', function() {
    expect(React.Component.isPrototypeOf(VideoList)).to.be.false;
  });

  it('should render one `VideoListEntry` when given one video', function() {
    const shallowRenderer = createRenderer();

    const oneFakeVideo = window.fakeVideoData.slice(-1);
    shallowRenderer.render(
      <VideoList videos={oneFakeVideo} />
    );

    const videoList = shallowRenderer.getRenderOutput();
    expect(videoList.props.children).to.have.length(1);
    videoList.props.children.forEach(child => expect(child.type).to.equal(VideoListEntry));
  });

  it('should render three `VideoListEntry` when given three videos', function() {
    const shallowRenderer = createRenderer();

    const threeFakeVideos = window.fakeVideoData.slice(-3);
    shallowRenderer.render(
      <VideoList videos={threeFakeVideos} />
    );

    const videoList = shallowRenderer.getRenderOutput();
    expect(videoList.props.children).to.have.length(3);
    videoList.props.children.forEach(child => expect(child.type).to.equal(VideoListEntry));
  });

  it('should render five `VideoListEntry` when given five videos', function() {
    const shallowRenderer = createRenderer();

    const fiveFakeVideos = window.fakeVideoData.slice(-5);
    shallowRenderer.render(
      <VideoList videos={fiveFakeVideos} />
    );

    const videoList = shallowRenderer.getRenderOutput();
    expect(videoList.props.children).to.have.length(5);
    videoList.props.children.forEach(child => expect(child.type).to.equal(VideoListEntry));
  });
});