import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import image1 from "./saqi.jpg";
import image2 from "./hasnain.jpg";
import image3 from "./sajjad.jpg";
import image4 from "./azhar.jpg";
import image5 from "./toheed.jpg";
import image6 from "./ahsan.jpg";
import image7 from "./sohail.jpg";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  images: {
    textAlign: "center",
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //now for images
  const [imageName, setImageName] = useState(1);

  return (
    <div>
      <div className={classes.images}>
        {imageName == 1 && (
          <img src={image1} alt="saqi" width="320px" height="320px" />
        )}
        {imageName == 2 && (
          <img src={image2} alt="hasnain" width="320px" height="320px" />
        )}
        {imageName == 3 && (
          <img src={image3} alt="sajjad" width="320px" height="320px" />
        )}
        {imageName == 4 && (
          <img src={image4} alt="azhar" width="320px" height="320px" />
        )}
        {imageName == 5 && (
          <img src={image5} alt="toheed" width="320px" height="320px" />
        )}
        {imageName == 6 && (
          <img src={image6} alt="ahsan" width="320px" height="320px" />
        )}
        {imageName == 7 && (
          <img src={image7} alt="sohail" width="320px" height="320px" />
        )}
      </div>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab
            label="Saqib Kayani"
            onClick={() => {
              setImageName(1);
            }}
          />
          <Tab
            label="Hasnain Mughal"
            onClick={() => {
              setImageName(2);
            }}
          />
          <Tab
            label="Sajjad Anwar"
            onClick={() => {
              setImageName(3);
            }}
          />
          <Tab
            label="Azhar Ali"
            onClick={() => {
              setImageName(4);
            }}
          />
          <Tab
            label="Malik Charsi"
            onClick={() => {
              setImageName(5);
            }}
          />
          <Tab
            label="Ahsan Khaba"
            onClick={() => {
              setImageName(6);
            }}
          />
          <Tab
            label="Sohail Sheeda"
            onClick={() => {
              setImageName(7);
            }}
          />
        </Tabs>
      </Paper>
    </div>
  );
}
