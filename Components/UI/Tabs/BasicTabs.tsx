import * as React from "react";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paragraph from "@Components/Elements/Paragraph/Paragraph";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1.2, minHeight: "100px" }}>
          <Paragraph text={children} />
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ border: "1px solid rgba(54, 16, 106, 0.2)", borderRadius: 2 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          orientation="horizontal"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
            borderBottom: "1px solid #f6f6f6",
            width: { xs: 400, sm: 700, md: "100%", lg: "100%" },
          }}
        >
          <Tab label="Tata Safari Specifications" {...a11yProps(0)} />
          <Tab label="Tata Safari Price" {...a11yProps(0)} />
          <Tab label="On-road prices" {...a11yProps(1)} />
          <Tab label="Item Four" {...a11yProps(2)} />
        </Tabs>

        <CustomTabPanel value={value} index={0}>
          One Paragraph is here
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Second paragraph is here
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maiores quo inventore corporis perspiciatis
          dignissimos expedita officiis ab praesentium! Exercitationem!
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}></CustomTabPanel>
      </Box>
    </>
  );
}
