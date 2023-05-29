import { Component } from "react";

export default class HandelCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handelincrement=()=>{
    this.setState({ count: this.state.count + 1 });

    

  }
  handelDecrement=()=>{
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return <div>
       {this.props.render(this.state.count,this.handelincrement,this.handelDecrement)}
    </div>;
  }
}
