import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import image1 from "./saqi.jpg";
import image2 from "./hasnain.jpg";
import image3 from "./sajjad.jpg";

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
        {imageName == 2 && <img src={image2} alt="hasnain" />}
        {imageName == 3 && <img src={image3} alt="sajjad" />}
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
        </Tabs>
      </Paper>
    </div>
  );
}
