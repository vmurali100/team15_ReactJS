/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const handleDelete = (usr) => {
  const newUsers = users.filter((user) => user !== usr);
  setUsers(newUsers);
};
