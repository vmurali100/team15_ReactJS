import { Component } from "react";
import User from "./User";

class Student extends Component{
    render(){
        return <div>
            <h2>Hello From Student Component</h2>
            <User/>
        </div>
    }
}

export default Student