import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    //imgSrc: "https://picsum.photos/200",
    //tags: [],
  };

  /* styles = {
    fontSize: 20,
    fontWeight: 'bold',
  }; */

  /* renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  } */

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = (product) => {
    // this.state.count++;
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  render() {
    // React.createElement()
    // let classes = this.getBadgeClasses();
    // {this.state.tags.length === 0 && "Please create a new tag!"}
    // {this.renderTags()}

    // console.log("props", this.props);

    return (
      <div>
        <spam className={this.getBadgeClasses()}>{this.formatCount()}</spam>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    //const x = <h1>Zero</h1>;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
