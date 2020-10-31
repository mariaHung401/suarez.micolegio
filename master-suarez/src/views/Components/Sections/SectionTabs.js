import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Card from "components/Card/Card.js";

import Carousel from "react-slick";

// import image1 from "assets/img/colegio/actividad2.jpg";
// import image2 from "assets/img/colegio/actividad.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <GridContainer justify="center">
            <h3>
              <strong>Objetivo Institucional</strong>
            </h3>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <CustomTabs
                headerColor="warning"
                tabs={[
                  {
                    tabName: "Afectividad",
                    tabIcon: Face,
                    tabContent: (
                      <h5 className={classes.textCenter}>
                        Se procura cultivar los afectos, sentimientos y manifestaciones. Ayuda a tener conciencia de si mismo
                      </h5>
                    )
                  },
                  {
                    tabName: "Intelectualidad",
                    tabIcon: Chat,
                    tabContent: (
                      <h5 className={classes.textCenter}>
                        A través de las diversas actividades y situaciones propias de la educación personalizada se propicia una solida formación de la inteligencia, se busca enseñar a pensar a través de estrategias concretas que se aprenden en el trabajo diario.
                      </h5>
                    )
                  },
                  {
                    tabName: "Trascendencia",
                    tabIcon: Build,
                    tabContent: (
                      <h5 className={classes.textCenter}>
                        En las diversas actividades propias de nuestra institucion se procura la formación coherente de vida y doctrina.
                      </h5>
                    )
                  }
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  {/* <div>
                    <img src={image1} alt="First slide" className="slick-image" />
                  </div>
                  <div>
                    <img src={image2} alt="First slide" className="slick-image" />
                  </div> */}
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
