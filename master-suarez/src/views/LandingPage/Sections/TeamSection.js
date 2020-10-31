import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h3 className={classes.title}>Filosofía Institucional</h3>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={5}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Misión
                <br />
              </h4>
              <CardBody>
                <h5>
                  Nuestro compromiso es preparar a niños, niñas y adolescentes
                  competentes para interpretar el presente y afrontar los
                  desafíos del futuro, con longanimidad, basado en el amor,
                  egresando alumnos felices y de éxito.
                </h5>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={8} md={5}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Visión
                <br />
              </h4>
              <CardBody>
                <h5>
                  Llegaremos a ser, un modelo de Corporación educativa en donde
                  la siembra de valores germinará cada día como ciudadanos
                  autotélicos con empoderamiento hacia la vanguardia
                  tecnológica.
                </h5>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
