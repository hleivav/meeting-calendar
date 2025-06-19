import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="col-md-3">
      {/* Dashboard-shadowed card */}
      <div className="card shadow rounded">
        <div className="card-header bg-primary text-white">
          <h3>
            <i className="fas fa-tachometer-alt me-2"></i> Dashboard
          </h3>
        </div>
        <div className="card-body p-0">
          <ul className="list-group">
            <li className="list-group-item d-flex align-items-center">
              <i className="fas fa-calendar-alt me-2"></i>
              <Link to="/dashboard/meetings" className="text-decoration-none ms-2">Meetings</Link>
            </li>
            <li className="list-group-item d-flex align-items-center">
              <i className="fas fa-users me-2"></i>
              <Link to="/dashboard/users" className="text-decoration-none ms-2">Users</Link>
            </li>
            <li className="list-group-item d-flex align-items-center">
              <i className="fas fa-calendar me-2"></i>
              <Link to="/dashboard/calendar" className="text-decoration-none ms-2">Calendar</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
