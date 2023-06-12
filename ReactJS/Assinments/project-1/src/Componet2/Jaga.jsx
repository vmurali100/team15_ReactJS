import React, { Component } from 'react'
import axios from 'axios'
import { JagaContextProvider } from './JagaContext';
import { JagaDate } from './JagaDate';


export default class Jaga extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       users:{}
    }
  }
  handledit=()=>{}
  
  handldelete=()=>{}
  render() {
    return (
      <div>
       <JagaContextProvider value={this.state.users}>
           <JagaDate/>
       </JagaContextProvider>
      </div>
    );
  }
  componentDidMount(){
  axios.get("http://filltext.com/?rows=5&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true").then((res)=>{
    console.log(res.data)
    this.setState({users:res.data})
  })
  }
}
