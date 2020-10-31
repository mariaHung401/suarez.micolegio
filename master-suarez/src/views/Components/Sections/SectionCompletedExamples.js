import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Danger from "components/Typography/Danger.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h3 className={classes.title}>
              <strong>Filosofía de gestión:</strong>
            </h3>
            <h4>
              Funcionamos como un equipo social institucionalizado, acoplado a una plataforma digital basada en  amor filial; donde la corresponsabilidad, la integración de los valores éticos, morales - espirituales  y el empoderamiento de una misión y visión compartida; nos permiten a todos sus aliados, transitar felizmente  bajo la guía de Dios. en el camino de la calidad y excelencia.
            </h4>
            <h3 className={classes.title}>
              <strong>Sistema de valores éticos y espirituales</strong>
            </h3>
            <h4>
              <Danger>
                <strong>
                  Nuestra casa de estudio se sustenta en los siguientes valores:
                </strong>
              </Danger>
              concebidos estos como estados ideales de conciencia Rubencista:
              <br />
              Fe en Dios, amor, empatía, paz y humildad.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
