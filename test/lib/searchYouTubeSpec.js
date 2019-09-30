window.expect = chai.expect;

window.getURLSearchParams = function(url) {
  return url
    .split('?')[1]
    .split('&')
    .reduce((map, params) => {
      const [key, value] = params.split('=');
      map[key] = value;
      return map;
    }, {});
};

describe('searchYouTube', function() {
  let server;

  // Sinon temporarily hijacks all outgoing AJAX requests
  // letting us synchronously inspect any request made by `searchYouTube`
  beforeEach(function() {
    server = sinon.fakeServer.create();
    server.respondWith('GET', /google/gi, [
      200,
      { 'Content-Type': 'application/json' },
      JSON.stringify({ items: window.exampleVideoData }),
    ]);
  });

  afterEach(function() {
    server.restore();
  });

  it('should send a GET request', function() {
    searchYouTube({}, () => {});

    expect(server.requests[0].method).to.equal('GET');
  });

  it('should accept `key`, `query`, and `max` options and send them in GET request', function() {
    searchYouTube({ key: 'API_KEY', query: 'cats', max: 10 }, () => { });

    const params = getURLSearchParams(server.requests[0].url);
    expect(params.key).to.equal('API_KEY');
    expect(params.q).to.equal('cats');
    expect(params.maxResults).to.equal('10');
  });

  it('should call the callback with the videos', function() {
    const callback = sinon.spy();

    searchYouTube({ key: 'API_KEY', query: 'cats', max: 10 }, callback);

    server.respond();

    sinon.assert.calledOnce(callback);
    sinon.assert.calledWith(callback, window.exampleVideoData);
  });
});