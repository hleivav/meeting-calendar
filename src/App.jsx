import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import MeetingForm from "./components/MeetingForm";
import MeetingList from "./components/MeetingList"; 
import Footer from "./components/Footer";
import axios from "axios";

const apiUrl = "/api/meetings"; 

console.log("app loaded"); 

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
      setMeetings(prev =>
        prev.map(m => (m.id === meetingData.id ? meetingData : m))
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
      setMeetings(prev => prev.filter(m => m.id !== id));
    } catch (error) {
      console.error("Error deleting meeting:", error);
    }
  };

  // Function for adding a new meeting.
  const addMeeting = async (meetingData) => {
     console.log("Data skickas till backend:", meetingData);
    try {
      const response = await axios.post(apiUrl, meetingData);
      setMeetings(prev => [...prev, response.data]);
    } catch (error) {
      console.error("Error adding meeting:", error);
    }
  };

  return (
    <>
      <div className="container">
        <Navbar />
        <div className="row mt-3">
          <Sidebar />
          <div className="col-md-9">
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
          </div>
        </div>
      </div>
      <Footer /> 
    </>
  );
};


export default App;

