import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import MeetingForm from "./components/MeetingForm";
import MeetingList from "./components/MeetingList";
import Footer from "./components/Footer";
import axios from "axios";

import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import ContactPage from "./components/ContactPage";
import UsersPage from "./components/UsersPage";
import CalendarPage from "./components/CalendarPage";

const apiUrl = "/api/meetings";

const App = () => {
  const [meetings, setMeetings] = useState([]);
  const [editingMeeting, setEditingMeeting] = useState(null);

  //Function for fetching all meetings
  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await axios.get(apiUrl);
        setMeetings(response.data);
      } catch (error) {
        console.error("Error fetching meetings:", error);
      }
    };
    fetchMeetings();
  }, []);

  //Function for updating a meetring
  const updateMeeting = async (meetingData) => {
    console.log("Data skickas till backend:", meetingData);
    try {
      await axios.put(`${apiUrl}/${meetingData.id}`, meetingData);
      setMeetings((prev) =>
        prev.map((m) => (m.id === meetingData.id ? meetingData : m))
      );
      setEditingMeeting(null);
    } catch (error) {
      console.error("Error updating meeting:", error);
    }
  };

  // Function for deleting a meeting
  const deleteMeeting = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setMeetings((prev) => prev.filter((m) => m.id !== id));
    } catch (error) {
      console.error("Error deleting meeting:", error);
    }
  };

  // Function for adding a new meeting.
  const addMeeting = async (meetingData) => {
    console.log("Data skickas till backend:", meetingData);
    try {
      const response = await axios.post(apiUrl, meetingData);
      setMeetings((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Error adding meeting:", error);
    }
  };

  // DashboardLayout för att visa Sidebar och innehåll till höger
  const DashboardLayout = () => (
    <div className="container">
      <Navbar />
      <div className="row mt-3">
        <Sidebar />
        <div className="col-md-9">
          <Outlet /> {/* Här visas innehållet för Dashboard-undersidor */}
        </div>
      </div>
      <Footer />
    </div>
  );

  // MeetingsPage för att gruppera möteshantering
  const MeetingsPage = () => (
    <>
      <MeetingForm
        onAddMeeting={addMeeting}
        onUpdateMeeting={updateMeeting}
        editingMeeting={editingMeeting}
        setEditingMeeting={setEditingMeeting}
      />
      <MeetingList
        meetings={meetings}
        onDeleteMeeting={deleteMeeting}
        onEditMeeting={setEditingMeeting}
      />
    </>
  );

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="row mt-3">
          <Sidebar />
          <div className="col-md-9">
            <Routes>
              {/* Publika sidor */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Dashboard med undersidor */}
              <Route path="/dashboard/meetings" element={<MeetingsPage />} />
              <Route path="/dashboard/users" element={<UsersPage />} />
              <Route path="/dashboard/calendar" element={<CalendarPage />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
