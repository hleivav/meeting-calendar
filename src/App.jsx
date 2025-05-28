import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import MeetingForm from "./components/MeetingForm";
import MeetingList from "./components/MeetingList"; 
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="row mt-3">
          <Sidebar />
          <div className="col-md-9">
            <MeetingForm />
            <MeetingList />
          </div>
        </div>
      </div>
      <Footer /> 
    </>
  );
};


export default App;

