import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import Danger from "components/Typography/Danger.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <Danger>
              <h3>
                <strong>El Arte de Educar</strong>
              </h3>
            </Danger>
          </GridItem>
          <GridItem xs={12} sm={12} md={8} justify="center">
            <h3>Siguenos!!</h3>
            <Button
              color="google"
              href="https://www.instagram.com/uerubensuarez/"
              target="_blank"
            >
              <i className={classes.socialIcons + " fab fa-instagram"} />
              Instagram
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
