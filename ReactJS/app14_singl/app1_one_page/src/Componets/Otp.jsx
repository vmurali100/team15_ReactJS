import React, { useState } from "react";
import QRCode from "qrcode.react";

const QRCodeDisplay = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      {text && <QRCode value={text} />}
    </div>
  );
};

export default QRCodeDisplay;
