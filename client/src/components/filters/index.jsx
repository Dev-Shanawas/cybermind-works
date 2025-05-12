import { Container, Flex, Input , RangeSlider , Divider , Select} from "@mantine/core";
import { useState } from "react";
import { IconSearch , IconLocation   } from '@tabler/icons-react';
    import { HiOutlineInboxStack } from "react-icons/hi2";

function Filers() {
    const [startValue , setStartValue] = useState(0);
    const [endValue , setEndValue] = useState(30)
    return ( 
        <>
<div style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
  <Flex
    style={{ padding: "30px 20px", width: "100%" }}
    direction="row"
    gap={0} // no gap, we'll control spacing with divider
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
              leftSection={<IconLocation size={16} />}

      style={{ flex: 1, border: "none", outline: "none" }}
      variant="unstyled"

      placeholder="Location"
      data={['Chennai', 'Coimbatore', 'Delhi', 'Mumbai']}
    />
    <Divider orientation="vertical" />
    <Select
              leftSection={<HiOutlineInboxStack  size={16} />}

      style={{ flex: 1, border: "none", outline: "none" }}
      variant="unstyled"

      placeholder="Job Type"
      data={['FullTime', 'PartTime', 'Vue', 'Svelte']}
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


        </>
     );
}

export default Filers;