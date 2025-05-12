import Navbar from "./components/navbar/index.jsx";
import Filers from "./components/filters/index.jsx";
import JobListings from "./components/joblistings/index.jsx";
import { useEffect } from "react";
import axios from "axios";
function App() {

useEffect(() => {
  async function fetchJobs() {
    const response = await axios.post("http://localhost:5002/api/get-job");
    const data = response.data.data;

    console.log(data);
  }
  fetchJobs();
}, []);

  return (
  <>
    <Navbar></Navbar>
    <Filers></Filers>
    <JobListings></JobListings>
  </>
  )
}

export default App;