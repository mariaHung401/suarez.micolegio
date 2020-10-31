import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLeft from "components/Header/HeaderLeft.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import stylesComp from "assets/jss/material-kit-react/views/components.js";

import logo from "assets/img/colegio/logo.png";

const useStyles = makeStyles(styles);
const useStylesComp = makeStyles(stylesComp);

export default function Page1(props) {
  const classes = useStyles();
  const classesComp = useStylesComp();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand={<HeaderLeft />}
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
        changeColorOnScroll={{
          height: 400,
          color: "info",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/colegio/fondo-ondas.jpg")}>
        <div className={classesComp.container}>
          <GridContainer>
            <GridItem>
              <div className={classesComp.brand}>
                <h2>
                  <strong> U. E. P. Donaldo García López</strong>
                </h2>
              </div>
            </GridItem>
            <GridItem>
              <div className={classesComp.brand}>
                <img src={logo} />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    </div>
  );
}