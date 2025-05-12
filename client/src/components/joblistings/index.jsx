import {Card , Group , Text , Badge,Button , Container, Flex} from "@mantine/core"
import amazon from "../../assets/Amazon.png"
import { IconSearch } from '@tabler/icons-react';

function JobListings() {
    return ( 
<Container size="xxl" style={{ marginTop: '30px' }}>
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
    {[1, 2, 3, 4,5,6].map((item) => (
      <Card
        key={item}
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
        <h3>Full Stack Developer</h3>
        <Flex
        style={{color: "#555555"}}
        direction="row"
        justify="center"
        align="center"
        gap="30px"
        >
<div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
  <IconSearch width="18px"/>
  <span style={{ marginLeft: '3px' }}>efsf</span>
</div>
<div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
  <IconSearch width="18px"/>
  <span style={{ marginLeft: '3px' }}>efsf</span>
</div>
<div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
  <IconSearch width="18px"/>
  <span style={{ marginLeft: '3px' }}>efsf</span>
</div>

        </Flex>
<ul style={{ paddingLeft: '13px', fontSize: '13px' , color:"gray" }}>
  <li>Lorem ipsum dolor sit, ametgfgfd cons</li>
  <li>Lorem ipsum dolor sit, amete dgfg  dfg  quae eum.</li>
</ul>        <Button color="blue" fullWidth mt="md" radius="md">
          Apply Now
        </Button>
      </Card>
    ))}
  </div>
</Container>
     
     );
}

export default JobListings;