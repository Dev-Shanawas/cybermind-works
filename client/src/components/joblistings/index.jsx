import {Card , Group , Text , Badge,Button , Container, Flex , Input , RangeSlider , Divider , Select} from "@mantine/core"
import amazon from "../../assets/Amazon.png"
import { IconSearch } from '@tabler/icons-react';
import { BsBuildingAdd } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { TbStack2 } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { useEffect, useState } from "react";
import {  IconLocation   } from '@tabler/icons-react';
  import { HiOutlineInboxStack } from "react-icons/hi2";
import axiosInstance from "../../api/axiosInstance";

function JobListings() {

    const [startValue , setStartValue] = useState(0);
    const [endValue , setEndValue] = useState(30)
    const [location , setLocation] = useState(null)



    const [jobs, setJobs] = useState([]); // filtered jobs
const [allJobs, setAllJobs] = useState([]); // original full list

 async function fetchJobs() {
    const response = await axiosInstance.get("/api/get-job");
    console.log(response)
    console.log("This is res")
    const data = response.data.data;
    setAllJobs(data);
    setJobs(data); 
}

    useEffect(() => {
 
  fetchJobs();
}, []);

function filerLocation(e){
    if(e == null){
      fetchJobs()
      return
  }
 setLocation(e);
  const filtered = allJobs.filter(
    (job) => job.location.toLowerCase() === e.toLowerCase()
  );
  setJobs(filtered);
}

function filerJobType(e){
  if(e == null){
      fetchJobs()
      return
  }
    const filtered = allJobs.filter(
    (job) => job.jobType.toLowerCase() === e.toLowerCase()
  );
  setJobs(filtered)

}

console.log(location)
    return ( 

<>

      <div style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
  <Flex
    style={{ padding: "30px 20px", width: "100%" }}
    direction="row"
    gap={0} 
    justify="center"
    align="center"
  >
    <Input
      placeholder="Search"
      leftSection={<IconSearch size={16} />}
      style={{ flex: 1, border: "none", outline: "none" }}
      variant="unstyled" // <<< invisible border
    />
    <Divider orientation="vertical" />
    <Select
    onChange={(e) => filerLocation(e)}
              leftSection={<IconLocation size={16} />}

      style={{ flex: 1, border: "none", outline: "none" }}
      variant="unstyled"

      placeholder="Location"
      data={['Chennai', 'Coimbatore', 'Delhi', 'Mumbai']}
    />
    <Divider orientation="vertical" />
    <Select
              leftSection={<HiOutlineInboxStack  size={16} />}
              onChange={(e) => filerJobType(e)}

      style={{ flex: 1, border: "none", outline: "none" }}
      variant="unstyled"

      placeholder="Job Type"
      data={['FullTime', 'PartTime', 'Contract', 'Internship']}
    />
    <Divider orientation="vertical" />
    <Flex
      direction="column"
      justify="center"
      gap="sm"
      align="center"
      style={{ flex: 1.5, width: '100%' }}
    >
      <p style={{ margin: "0px", fontSize: "14px" , color:"gray" }}>Salary Range - ₹{startValue}K - ₹{endValue}K</p>
      <RangeSlider
        style={{ width: "70%" , marginBottom:"20px"}}
        color="black"
        size={2}
        defaultValue={[startValue, endValue]}

        onChange={(values) => {
          setStartValue(values[0]);
          setEndValue(values[1]);
        }}
      />
    </Flex>
  </Flex>
</div>

<Container size="xxl" style={{ marginTop: '30px' }}>
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
    {jobs.map((item , index) => (
      <Card
        key={index + 1}
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        style={{ flex: '1 1 316px', maxWidth: '316px' }}
      >
        <Flex
        direction="row"
        justify="space-between"
        >
            <img src={amazon} style={{height: "60px" , width:"60px"}} ></img>
            <Badge>24h Ago</Badge>
        </Flex>
        <h3>{item.jobTitle}</h3>
        <Flex
        style={{color: "#555555"}}
        direction="row"
        justify="center"
        align="center"
        gap="30px"
        >
<div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
  <GoPeople width="18px"/>
  <span style={{ marginLeft: '3px' , fontSize:"14px" }}>1-3 yr</span>
</div>
<div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
  <BsBuildingAdd width="18px"/>
  <span style={{ marginLeft: '3px', fontSize:"14px" }}>{item.jobType}</span>
</div>
<div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
  <TbStack2 width="18px"/>
  <span style={{ marginLeft: '3px' , fontSize:"14px" }}>12LPA</span>
</div>

        </Flex>
<ul style={{ paddingLeft: '13px', fontSize: '13px' , color:"gray" }}>
  <li>{item.jobDescription}</li>
  <li>Lorem ipsum dolor sit, amete dgfg  dfg  quae eum.</li>
</ul>        <Button color="blue" fullWidth mt="md" radius="md">
          Apply Now
        </Button>
      </Card>
    ))}
  </div>
</Container>
     </>
     );
}

export default JobListings;