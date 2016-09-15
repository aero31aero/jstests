var destination = document.querySelector("#container");

var HelloWorld = React.createClass({
 render: function() {
    return (
      <p>Hello, {this.props.greetTarget}!</p>
    );
  }
});

var Buttonify = React.createClass({
  render: function() {
    return (
      <div>
        <button type={this.props.behavior}>{this.props.children}</button>
      </div>
    );
  }
});

ReactDOM.render(
  <div>
    <Buttonify behavior="Submit">SEND DATA</Buttonify>
  </div>,
  document.querySelector("#container")
);