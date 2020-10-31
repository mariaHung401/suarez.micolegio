import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import SectionFeed from "./SectionFeed";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <h2>Mira Nuestro Instagram</h2>
            <Button
              color="google"
              href="https://www.instagram.com/uedonaldog/"
              target="_blank"
            >
              <i className={classes.socialIcons + " fab fa-instagram"} />
              Instagram
            </Button>
          </GridItem>
          <GridItem xs={12} sm={10} md={10} className={classes.marginAuto}>
            <SectionFeed account="uedonaldog" numberOfMediaElements={4} />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
