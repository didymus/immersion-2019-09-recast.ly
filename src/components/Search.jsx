class Search extends React.Component {
  constructor(){
    super();
    this.state = {
      term: ''
    };
  }

  searchVideo(event){
    event.preventDefault();
    event.stopPropagation(); 
    window.searchYouTube({query: this.state.term}, this.props.searchCallback);
  }

  render(){
    return (
  <form className="search-bar form-inline" onSubmit={this.searchVideo.bind(this)}>
    <input className="form-control" type="text" 
    onChange={event => this.setState({term: event.target.value})} />
    <button className="btn hidden-sm-down" type="submit">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </form>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
