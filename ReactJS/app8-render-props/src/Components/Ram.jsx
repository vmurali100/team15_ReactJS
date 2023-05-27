import React from "react";

const Ram = ({ hanldeSayHello,displaySuresh }) => {
  return (
    <div>
      {/* <h2 onClick={hanldeSayHello}>Welcone Ram Component !!</h2> */}
      {hanldeSayHello()}
      {displaySuresh()}
    </div>
  );
};

export default Ram;
