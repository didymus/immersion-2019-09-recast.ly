describe ('VideoPlayer', function() {
  const {
    renderIntoDocument,
    findRenderedDOMComponentWithClass
  } = ReactTestUtils;

  let cuteCatVideo;
  let superCuteCatVideo;
  let hackReactorVideo;

  // In order to leverage React's test utility function `findRenderedDOMComponentWithClass`
  // for stateless functional components, we must wrap them in a class component
  // Wrapper.jsx defined a Wrapper component to use in our tests
  // Read more here: https://github.com/facebook/react/issues/4972

  beforeEach(function() {
    cuteCatVideo = renderIntoDocument(
      <Wrapper>
        <VideoPlayer video={window.fakeVideoData[0]} />
      </Wrapper>
    );

    superCuteCatVideo = renderIntoDocument(
      <Wrapper>
        <VideoPlayer video={window.fakeVideoData[1]} />
      </Wrapper>
    );

    hackReactorVideo = renderIntoDocument(
      <Wrapper>
        <VideoPlayer video={window.fakeVideoData[2]} />
      </Wrapper>
    );
  });

  it('should be a stateless functional component', function() {
    expect(React.Component.isPrototypeOf(VideoPlayer)).to.be.false;
  });

  it('should dynamically render a video', function() {
    const cuteCatVideoIFrameElement = findRenderedDOMComponentWithClass(cuteCatVideo, 'embed-responsive-item');
    const superCuteCatVideoIFrameElement = findRenderedDOMComponentWithClass(superCuteCatVideo, 'embed-responsive-item');
    const hackReactorVideoIFrameElement = findRenderedDOMComponentWithClass(hackReactorVideo, 'embed-responsive-item');

    expect(cuteCatVideoIFrameElement.src).to.equal('https://www.youtube.com/embed/000001');
    expect(superCuteCatVideoIFrameElement.src).to.equal('https://www.youtube.com/embed/000002');
    expect(hackReactorVideoIFrameElement.src).to.equal('https://www.youtube.com/embed/000003');
  });

  it('should dynamically render a video\'s title', function() {
    const cuteCatVideoTitleElement = findRenderedDOMComponentWithClass(cuteCatVideo, 'video-player-details');
    const superCuteCatVideoTitleElement = findRenderedDOMComponentWithClass(superCuteCatVideo, 'video-player-details');
    const hackReactorVideoTitleElement = findRenderedDOMComponentWithClass(hackReactorVideo, 'video-player-details');

    expect(cuteCatVideoTitleElement.children[0].innerHTML).to.equal('Cute cat video');
    expect(superCuteCatVideoTitleElement.children[0].innerHTML).to.equal('Super cute cat video');
    expect(hackReactorVideoTitleElement.children[0].innerHTML).to.equal('Hack Reactor opens extension school on Mars');
  });

  it('should dynamically render a video\'s description', function() {
    const cuteCatVideoDescriptionElement = findRenderedDOMComponentWithClass(cuteCatVideo, 'video-player-details');
    const superCuteCatVideoDescriptionElement = findRenderedDOMComponentWithClass(superCuteCatVideo, 'video-player-details');
    const hackReactorVideoDescriptionElement = findRenderedDOMComponentWithClass(hackReactorVideo, 'video-player-details');

    expect(cuteCatVideoDescriptionElement.children[1].innerHTML).to.equal('The best cat video on the internet!');
    expect(superCuteCatVideoDescriptionElement.children[1].innerHTML).to.equal('Better than the best cat video on the internet!');
    expect(hackReactorVideoDescriptionElement.children[1].innerHTML).to.equal('Watch the ribbon cutting of the first coding bootcamp in space');
  });
});