import { Component } from "react";

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: "",
        email: "",
        password: "",
      },
      isEdit: false,
      users: [],
      gIndex: 0,
    };
  }
  adduser = () => {
    var alluserscopy = [...this.state.users];
    alluserscopy.push({ ...this.state.user });
    this.setState({ users: alluserscopy });
  };
  hadlechange = (e) => {
    var propname = e.target.name;
    var newperson = { ...this.state.user };
    newperson[propname] = e.target.value;
    this.setState({ user: newperson });
    // this.setState({...this.state.user,[e.target.name]:e.target.value})
  };
  handleEdit = (usr, i) => {
    this.setState({ user: usr, isEdit: true, gIndex: i });
  };
  handledelete = (i) => {
    var deleteuser = this.state.users.filter((usr, index) => {
      return index !== i;
    });
    this.setState({ users: deleteuser });
  };
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={this.state.user.name}
            onChange={this.hadlechange}
          />
          <br />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={this.state.user.email}
            onChange={this.hadlechange}
          />
          <br />
          <br />
          <label htmlFor="password"></label>
          <br />
          <input
            type="password"
            name="password"
            value={this.state.user.password}
            onChange={this.hadlechange}
          />
          <br />
          <br />
          <button type="submit" onClick={this.adduser}>Adduser</button>
        </form>
        <br />
        <hr />
        <table border={3}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users && this.state.users.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.name}</td>
                  <td>{usr.email}</td>
                  <td>{usr.password}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleEdit(usr, i);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.handledelete(i);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
