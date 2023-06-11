import React, { useState } from "react";
import { DilliContextConsumer } from "./DilliContext";

export const DilliTable = () => {
  const entriesPerPage = 5; // Number of entries to show per page
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <DilliContextConsumer>
        {(value) => {
          console.log(value);
          const startIndex = (currentPage - 1) * entriesPerPage;
          const endIndex = startIndex + entriesPerPage;
          const entriesToShow = value.data.slice(startIndex, endIndex);

          const totalPages = Math.ceil(value.data.length / entriesPerPage);
          const pageNumbers = Array.from(
            { length: totalPages },
            (_, index) => index + 1
          );

          return (
            <div>
              <table className="table table-dark table-striped">
                <thead style={{ background: "#212529" }}>
                  <tr>
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {entriesToShow.map((usr, i) => (
                    <tr key={i}>
                      <td>{usr.userId}</td>
                      <td>{usr.id}</td>
                      <td>{usr.title}</td>
                      <td>{usr.body}</td>
                      <td>
                        <button
                          onClick={() => {
                            value.handleEdit(usr, i);
                          }}
                          id="di1"
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            value.handleDelete(usr, i);
                          }}
                          id="id2"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <ul className="pagination">
                  {pageNumbers.map((pageNumber) => (
                    <li
                      key={pageNumber}
                      className={`page-item ${
                        pageNumber === currentPage ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(pageNumber)}
                      >
                        {pageNumber}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        }}
      </DilliContextConsumer>
    </div>
  );
};
