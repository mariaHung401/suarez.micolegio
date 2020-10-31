import React from "react";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import HeaderLinks from "components/Header/HeaderLinks.js";
import HeaderLeft from "components/Header/HeaderLeft.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";

import ProductSection from "views/LandingPage/Sections/ProductSection.js";
import TeamSection from "views/LandingPage/Sections/TeamSection.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand={<HeaderLeft />}
        color="transparent"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "danger",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/colegio/fondo-azulRojo.jpg")}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem justify="center" xs={12} sm={12} md={12}>
              <div className={classes.brand}>
                <h6>Escuela y Liceo</h6>
                <h2>
                  <strong>
                    Empresa Educativa <br />
                    “Rubén Gonzalo Suárez Valera”
                  </strong>
                </h2>
              </div>
              {/* <div className={classes.brand}>
                <img src={logo} />
              </div> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <ProductSection />
        <TeamSection />
        <SectionCompletedExamples />
        <SectionLogin />
        <SectionDownload />
      </div>
      <Footer />
    </div>
  );
}
