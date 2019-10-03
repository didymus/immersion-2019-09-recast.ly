class Search extends React.Component {
  constructor(){
    super();
    this.state = {
      term: ''
    };
  }

  search(event){
    window.searchYouTube({query: this.state.term}, this.props.searchCallback);
  }

  render(){
    return (
  <div className="search-bar form-inline" onSubmit={this.search.bind(this)}>
    <input className="form-control" type="text" />
    <button className="btn hidden-sm-down" type="submit">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
