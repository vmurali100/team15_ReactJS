import React from "react";

export const ViharikaForm = () => {
  return (
    <div>
      <form>
        <label htmlFor="id">Id:</label>
        <input
          type="text"
          name="id"
          value={this.state.user.id}
          onChange={this.handlechange}
        />{" "}
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input 
          type="email"
          name="email"
          value={this.state.user.email}
          onChange={this.handlechange}
        />
        <br />
        <br />
        <label htmlFor="username">UserName:</label>
        <input
          type="text"
          name="username"
          value={this.state.user.username}
          onChange={this.handlechange}
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          value={this.state.user.password}
          onChange={this.handlechange}
        />
        <br />
        <br />
        {this.state.isEdit ? (
          <button type="button" onClick={this.handleUpdate}>
            UpdateUser
          </button>
        ) : (
          <button type="button" onClick={this.handleAdd}>
            AddUser
          </button>
        )}
      </form>
    </div>
  );
};
