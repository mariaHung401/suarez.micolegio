import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import LocationOn from "@material-ui/icons/LocationOn";
import Carousel from "react-slick";

import image1 from "assets/img/colegio/niño.jpg";
import image2 from "assets/img/colegio/salon.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";

const useStyles = makeStyles(styles);

export default function SectionLogin() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
      <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img src={image2} alt="First slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Warning>
              <strong>OBJETO</strong>
            </Warning>
            <h4>
              El estudiante debe aprender a hacerse responsable de su desarrollo, conocer su realidad y desde ahí, animado por el amor a la versas, al conocimiento critico y a la investigación tenaz, asumir activamente la libertad para aportar a la sociedad.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
