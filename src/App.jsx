import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import MeetingForm from "./components/MeetingForm";
import MeetingList from "./components/MeetingList"; 
import Footer from "./components/Footer";

console.log("app loaded"); 

const App = () => {
  const [meetings, setMeetings] = useState([]); 
  const [editingMeeting, setEditingMeeting] = useState(null); 
  
  //Function for updating a meetring
  const updateMeeting = (updateMeeting)=>{
    setMeetings(prevMeetings =>
      prevMeetings.map(meetting =>
        meetting.id === updateMeeting.id ? updateMeeting: meetting
      )
    ); 
  }; 

  // Function for deleting a meeting
  const deleteMeeting = (id) => {
    setMeetings(prevMeetings => prevMeetings.filter(meeting => meeting.id !==id)); 
  }; 

  // Function for adding a new meeting.
  const addMeeting = (meeting) =>{
    setMeetings(prevMeetings => [
      ...prevMeetings,
      { ...meeting, id: prevMeetings.length + 1 }
    ]);
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

