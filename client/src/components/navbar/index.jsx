import {Container, Modal,Title, TextInput, Select, NumberInput, Textarea, Button, Group } from '@mantine/core';
import { DatePickerInput , DateInput  } from '@mantine/dates';
import '@mantine/dates/styles.css';
import axios from "axios";

import "../../assets/navbar.css";
import { RxDoubleArrowRight ,RxDoubleArrowDown } from "react-icons/rx";
import { useRef, useState } from 'react';
import Logo from "../../assets/logo.png";
import { useDisclosure, useElementSize } from "@mantine/hooks";
function Navbar() {
  // const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);

  const [jobData, setJobData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    jobType: "",
    salaryRangeMin: "",
    salaryRangeMax: "",
applicationDeadline: new Date(),     jobDescription: "",
  });
  const handleDateChange = (value) => {
    setJobData((prevData) => ({
      ...prevData,
      applicationDeadline: value
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(jobData);
  };

    const handleLocationChange = (value) => {
    setJobData((prevData) => ({
      ...prevData,
      location: value,
    }));
  };
  
  const handleJobTypeChange = (value) => {
    setJobData((prevData) => ({
      ...prevData,
      jobType: value,
    }));
  };

    const handleSubmit = async () => {
    try {
      console.log({ ...jobData });

      const response = await axios.post(
        "https://cybermind-works-l4t9.vercel.app/api/create-job",
        {
          data: jobData,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response)

      if (response.data.success) {
          close()
        alert("Job posted successfully");
        setJobData({
    jobTitle: "",
    companyName: "",
    location: "",
    jobType: "",
    salaryRangeMin: "",
    salaryRangeMax: "",
applicationDeadline: new Date(),     jobDescription: "",
        });
      }
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };


  return (
    <>
    <div
      style={{

        padding: "20px 0",

        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container
        size="xxl"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 8px 2px",
          borderRadius: "50px",
          padding: "1px 20px",  
        }}
      >
        <Group
          mah={140}
          className="navbar"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <div style={{}}>
            <img src={Logo}  alt="Logo" className="logo" />
          </div>

          <Group className="nav-links">
            <a href="#">Home</a>
            <a href="#">Find Jobs</a>
            <a href="#">Find Talents</a>
            <a href="#">About Us</a>
            <a href="#">Testimonials</a>
          </Group>

          <Button
          onClick={open}
            radius="xl"
            style={{
              width: "120px",
              backgroundImage: "linear-gradient(to right, #7f00ff, #e100ff)",
            }}
          >
            Create Job
          </Button>
        </Group>
      </Container>
    </div>

      <Modal
        opened={opened}
         onClose={close}
        centered
          withCloseButton={false} 
        size="xl"
  styles={{
    content: {
      padding: '20px',
      border: '1px solid rgb(0, 0, 0)',
      borderRadius: '16px',
    },
  }}
      >
    
      <Title order={2} align="center" mb="xl">
        Create Job Opening
      </Title>

      <form>
        <Group grow mb="md">
          <TextInput
            maw={376}
            name="jobTitle"
            value={jobData.jobTitle}
            onChange={handleInputChange}
            label="Job Title"
            placeholder="Full Stack Developer"
              styles={{
    label: {
      marginBottom: '6px', // 👈 adds space between label and input
    },
  }}
          />
          <TextInput
            name="companyName"
            value={jobData.companyName}
            onChange={handleInputChange}
              styles={{
    label: {
      marginBottom: '6px', // 👈 adds space between label and input
    },
  }}
            label="Company Name"
            placeholder="Amazon, Microsoft, Swiggy"
          />
        </Group>

        <Group grow mb="md">
          <Select 
            label="Location"
              styles={{
    label: {
      marginBottom: '6px', // 👈 adds space between label and input
    },
  }}
            data={[
              { value: "chennai", label: "Chennai" },
              { value: "coimbatore", label: "Coimbatore" },
              { value: "mumbai", label: "Mumbai" },
              { value: "delhi", label: "Delhi" },
            ]}
            placeholder="Select Location"
            value={jobData.location}
            onChange={handleLocationChange}
          />
          <Select
            label="Job Type"
              styles={{
    label: {
      marginBottom: '6px', // 👈 adds space between label and input
    },
  }}
            data={[
              { value: "FullTime", label: "FullTime" },
              { value: "PartTime", label: "PartTime" },
              { value: "Contract", label: "Contract" },
              { value: "Internship", label: "Internship" },
            ]}
            placeholder="Select Job Type"
            value={jobData.jobType}
            onChange={handleJobTypeChange}
          />
        </Group>

        <Group grow mb="md">
          <Group grow>
            <TextInput
              name="salaryRangeMin"
              value={jobData.salaryRangeMin}
              onChange={handleInputChange}
              label="Salary Range (Min)"
              // leftSection={<IconArrowsSort />}
              placeholder="₹ 0"
                styles={{
    label: {
      marginBottom: '6px', // 👈 adds space between label and input
    },
  }}
            />
            <TextInput
              name="salaryRangeMax"
              value={jobData.salaryRangeMax}
              onChange={handleInputChange}
              label="Salary Range (Max)"
              // leftSection={<IconArrowsSort />}
              placeholder="₹ 12,00,000"
                styles={{
    label: {
      marginBottom: '6px', // 👈 adds space between label and input
    },
  }}
            />
          </Group>
            <DateInput
              name="applicationDeadline"
              label="Application Deadline"
              placeholder="Pick date"
              value={jobData.applicationDeadline}
              onChange={handleDateChange}
              clearable
              required
              minDate={new Date()} // Ensures the date is today or later
            />

        </Group>

        <Textarea
          name="jobDescription"
          value={jobData.jobDescription}
          onChange={handleInputChange}
          label="Job Description"
            styles={{
    label: {
      marginBottom: '6px', // 👈 adds space between label and input
    },
  }}
          placeholder="Please share a description to let the candidate know more about the job role"
          minRows={4}
          mb="md"
        />

        <Group justify="space-between" mt="xl">
          <Button
            rightSection={<RxDoubleArrowDown  />}
            variant="outline"
            radius="md"
            size="md"
            style={{
              border: " 1px solid #222222",
              color: "#222222",
              width: 160,
            }}
          >
            Save Draft
          </Button>
          <Button
            rightSection={<RxDoubleArrowRight />}
            radius="md"
            size="md"
            style={{
              width: 160,
              backgroundColor: "#00AAFF",
            }}
            type="button"
            onClick={() => handleSubmit()}
          >
            Publish
          </Button>
        </Group>
      </form>
      </Modal>
    </>
  );
}

export default Navbar;