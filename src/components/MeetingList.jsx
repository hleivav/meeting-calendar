import React, { useState } from "react";
import { Table, Pagination } from "react-bootstrap";

const MeetingList = ({meetings, onDeleteMeeting, onEditMeeting}) => {


  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(meetings.length / itemsPerPage);

  // function to change side
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="col-md-9 mt-4">
      <div className="card shadow p-4">
        <h3 className="mb-4">List of Created Meetings</h3>

        {/* scrolling the table */}
        <div className="table-responsive" style={{ maxHeight: "300px", overflowY: "auto" }}>
          <Table striped bordered hover>
            <thead className="bg-primary text-white">
              <tr>
                <th>#</th>
                <th>Meeting Title</th>
                <th>Date</th>
                <th>Time</th>
                <th>Level</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {meetings.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((meeting) => (
                <tr key={meeting.id}>
                  <td>{meeting.id}</td>
                  <td>{meeting.title}</td>
                  <td>{meeting.meetingDate}</td>
                  <td>{meeting.meetingTime}</td>
                  <td>{meeting.level}</td>
                  <td>
                    <button className="btn btn-warning btn-sm me-2"
                      onClick={()=> onEditMeeting(meeting)}
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn btn-danger btn-sm"
                    onClick={() => onDeleteMeeting(meeting.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        {/* Pagening */}
        <Pagination className="justify-content-center mt-3">
          {[...Array(totalPages)].map((_, i) => (
            <Pagination.Item key={i} active={i + 1 === currentPage} onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  );
};

export default MeetingList;
