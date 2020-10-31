import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";
import SectionFeed from "./SectionFeed";

const useStyles = makeStyles(styles);

export default function SectionLogin() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem sm={12} md={8}>
            <Card>
              <SectionFeed account="uerubensuarez" numberOfMediaElements={4} />
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
