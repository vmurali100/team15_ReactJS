import React, { Component } from "react";
import axios from "axios";

class CreditCardValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: "",
      cardType: "",
      error: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      cardNumber: event.target.value,
    });
  };

  validateCard = () => {
    const cardNumber = this.state.cardNumber;

    axios
      .post("http://localhost:3000/student", {
        cardNumber: cardNumber,
      })
      .then((response) => {
        const { cardType, error } = response.data;
        this.setState({
          cardType: cardType,
          error: error,
        });
      });
  };

  render() {
    const { cardNumber, cardType, error } = this.state;

    return (
      <div>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={cardNumber}
          onChange={this.handleChange}
        />
        <p>Card Type: {cardType}</p>
        <p>{error}</p>
        <button onClick={this.validateCard}>Validate</button>
      </div>
    );
  }
}

export default CreditCardValidation;
