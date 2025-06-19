import React, { useEffect, useState } from "react";

const MeetingForm = ({
  onAddMeeting,
  onUpdateMeeting,
  editingMeeting,
  setEditingMeeting,
}) => {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [dateTimeError, setDateTimeError] = useState("");

  const [level, setLevel] = useState("Beginner");
  const [description, setDescription] = useState("");
  const [participants, setParticipants] = useState("");

  useEffect(() => {
    if (editingMeeting) {
      setTitle(editingMeeting.title || "");
      setDate(editingMeeting.meetingDate || "");
      setTime(editingMeeting.meetingTime || "");
      setLevel(editingMeeting.level || "Beginner");
      setDescription(editingMeeting.description || "");
      setParticipants(editingMeeting.participants || "");
    }
  }, [editingMeeting]);

  //this function handels when changing the title
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setTitleError("");
  };

  //this functions handels when changing the date and time
  const handleDateChange = (e) => {
    setDate(e.target.value);
    setDateTimeError("");
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    setDateTimeError("");
  };

  function isMeetingTimeValid(selectedDate, selectedTime) {
    if (!selectedDate || !selectedTime) {
      return false;
    }
    const now = new Date();
    const meetingDateTime = new Date(`${selectedDate}T${selectedTime}`);
    return meetingDateTime >= now;
  }

  // this function connects the "onSubmit" event
  const handleSubmit = (e) => {
    //preventdefault prevents the form's default behaviour to reload the page when sending the form.
    e.preventDefault();
    // validation of the input field
    if (title.length < 3) {
      setTitleError("The title must have at least 3 characters");
      return;
    }
    if (title.length > 50) {
      setTitleError("The title can't have more than 50 characters");
      return;
    }
    // Date and time validation
    if (!date || !time) {
      setDateTimeError("Both date and time must be provided");
      return;
    }
    if (!isMeetingTimeValid(date, time)) {
      setDateTimeError("Meeting time cannot be earlier than the current time");
      return;
    }

    const meetingData = {
      title,
      description,
      meetingDate: date,
      meetingTime: time,
      participants: participants,
      level,
    };

    if (editingMeeting) {
      onUpdateMeeting({ ...meetingData, id: editingMeeting.id });
    } else {
      onAddMeeting(meetingData);
    }

    //clear the fields in case they show former errors and to prepare for new data.
    setTitleError("");
    setDateTimeError("");
    setTitle("");
    setDate("");
    setTime("");
    setDescription(""); 
    setParticipants(""); 

    ///////////// if validation succeds, do the saving /////////////
  };

  return (
    <div className="col-md-9">
      <div className="card shadow p-4">
        <h3 className="mb-4">Schedule a New Meeting</h3>

        <form onSubmit={handleSubmit}>
          {/* Meeting Title */}
          <div className="mb-3">
            <label className="form-label">Meeting Title</label>
            <input
              type="text"
              className={`form-control ${titleError ? "is-invalid" : ""}`}
              placeholder="Enter meeting title"
              value={title}
              onChange={handleTitleChange}
              // minLength={3}
              // maxLength={50}
              // required
            />
            {titleError && (
              <div className="invalid-feedback"> {titleError}</div>
            )}
          </div>

          {/* Meeting Date & Time */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Meeting Date</label>
              <input
                type="date"
                className={`form-control ${dateTimeError ? "is-invalid" : ""}`}
                value={date}
                onChange={handleDateChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Meeting Time</label>
              <input
                type="time"
                className={`form-control ${dateTimeError ? "is-invalid" : ""}`}
                value={time}
                onChange={handleTimeChange}
              />
            </div>
          </div>

          {dateTimeError && (
            <div className="invalid-feedback d-block">{dateTimeError}</div>
          )}

          {/* Meeting Level */}
          <div className="mb-3">
            <label className="form-label">Meeting Level</label>
            <select
              className="form-select"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>

          {/* Participants */}
          <div className="mb-3">
            <label className="form-label">Participants</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter participants (comma separeted)" 
              value={participants}
              onChange={(e => setParticipants(e.target.value))}
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Enter meeting details"
              value={description}
              onChange={e => setDescription(e.target.value)}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            {editingMeeting ? "Update Meeting" : "Create Meeting"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MeetingForm;
