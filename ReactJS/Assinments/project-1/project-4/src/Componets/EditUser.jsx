import React from "react";
import { UserContextConsumer } from "./userCotest";


const EditUser = () => {
  return (
    <div>
      <UserContextConsumer>
        {(value) => {
          console.log(value);
          return (
            <form>
              <label htmlFor="id"> Id :</label>
              <input
                type="text"
                name="Id"
                value={value.user.id}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="userId"> UserId :</label>
              <input
                type="text"
                name="userId"
                value={value.user.userId}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="Date"> Date :</label>
              <input
                type="text"
                name="Date"
                value={value.user.date}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">
                <b>products : </b>
              </label>
              <br />
              <label htmlFor="">productId:</label>
              <input
                type="text"
                name="products.productId"
                value={value.user.products.productId}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">quantity :</label>
              <input
                type="text"
                name="Products.quantity"
                value={value.user.Products.quantity}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <label htmlFor="__v"> __v:</label>
              <input
                type="text"
                name="__v"
                value={value.user.__v}
                onChange={(e) => {
                  value.hanldeChange(e);
                }}
              />{" "}
              <br />
              <br />
              <button type="button" onClick={value.handleUpdate}>
                Update User
              </button>
              <button type="button" onClick={value.createUser}>
                add User
              </button>
            </form>
          );
        }}
      </UserContextConsumer>
    </div>
  );
};

export default EditUser;
