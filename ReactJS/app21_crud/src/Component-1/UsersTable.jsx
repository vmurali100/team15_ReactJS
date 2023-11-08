const UsersTable = ({ Student, handleEdit, handleDelete }) => {
    return (
      <div>
        <table border={3}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Contact</th>
              <th>Degree</th>
              <th>Engineering</th>
              <th>Hobbies</th>
              <th>Address</th>
              <th>Attach Resume</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Student.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.name}</td>
                  <td>{usr.email}</td>
                  <td>{usr.password}</td>
                  <td>{usr.gender}</td>
                  <td>{usr.contact}</td>
                  <td>{usr.degree}</td>
                  <td>{usr.engineering}</td>
                  <td>{usr.hobbies}</td>
                  <td>{usr.address}</td>
                  <td>{usr.resume}</td>
                  <td>
                    <button onClick={() => { handleEdit(usr, i) }}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => { handleDelete(usr, i) }}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default UsersTable;
  