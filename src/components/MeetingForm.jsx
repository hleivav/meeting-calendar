import React from "react";

const MeetingForm = () => {
  return (
    <div className="col-md-9">
      <div className="card shadow p-4">
        <h3 className="mb-4">Schedule a New Meeting</h3>

        <form>
          {/* Meeting Title */}
          <div className="mb-3">
            <label className="form-label">Meeting Title</label>
            <input type="text" className="form-control" placeholder="Enter meeting title" />
          </div>

          {/* Meeting Date & Time */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Meeting Date</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Meeting Time</label>
              <input type="time" className="form-control" />
            </div>
          </div>

          {/* Meeting Level */}
          <div className="mb-3">
            <label className="form-label">Meeting Level</label>
            <select className="form-select">
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>

          {/* Participants */}
          <div className="mb-3">
            <label className="form-label">Participants</label>
            <input type="text" className="form-control" placeholder="Enter participants" />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" rows="3" placeholder="Enter meeting details"></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">+ Create Meeting</button>
        </form>
      </div>
    </div>
  );
};

export default MeetingForm;
