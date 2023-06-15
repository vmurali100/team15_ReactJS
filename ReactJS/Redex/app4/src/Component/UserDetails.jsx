import React from "react";

const UserDetails = () => {
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>FatherName</th>
            <th>MotherName</th>
            <th>PhoneNumber</th>
            <th>Email</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Address</th>
            <th>Blood Group</th>
            <th>Department</th>
            <th>Courses</th>

            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};
export default UserDetails;
