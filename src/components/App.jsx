// var App = (props) => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer player={props.videoData[0]} />
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={props.videoData} />
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: props.videoData[0],
      videos: props.videoData
    };
    this.onTitleClick = this.onTitleClick.bind(this);
  }

  onTitleClick(clickedVid) {
    console.log('video clicked !!!');
    this.setState({
      currentVideo: clickedVid
    });
  }  
  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.props.videoData} clickFun={this.onTitleClick} />
        </div>
      </div>
    );
  }

}

window.App = App;
