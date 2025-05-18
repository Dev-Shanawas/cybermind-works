import Navbar from "./components/navbar/index.jsx";
import Filers from "./components/filters/index.jsx";
import JobListings from "./components/joblistings/index.jsx";
import { useEffect } from "react";
import axios from "axios";
import axiosInstance from "./api/axiosInstance.js";
import { useState } from "react";
function App() {



  return (
  <>
    <Navbar></Navbar>
    <JobListings ></JobListings>
  </>
  )
}

export default App;