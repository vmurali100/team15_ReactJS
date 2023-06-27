import React from "react";
import QRCode from "qrcode.react";

const ProfileQRCode = () => {
  const userProfile = {
    name: "Prince",
    email: "Prince232@gmail.com",
    website: "https://www.example.com",
  };

  const profileURL = `https://example.com/profile/${userProfile.name}`;

  return (
    <div>
      <h1>User Profile QR Code</h1>
      <p>Name: {userProfile.name}</p>
      <p>Email: {userProfile.email}</p>
      <p>Website: {userProfile.website}</p>
      <QRCode value={profileURL} />
    </div>
  );
};
export default ProfileQRCode;
