import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Carousel from "react-slick";

import image1 from "assets/img/colegio/instituto1.jpg";
import image2 from "assets/img/colegio/instituto2.jpg";
import image3 from "assets/img/colegio/instituto3.jpg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h3 className={classes.title}>Reseña Histórica del Plantel</h3>
        </GridItem>
        <GridItem xs={12} sm={12} md={7} className={classes.marginAuto}>
          <Card plain carousel>
            <Carousel {...settings}>
              <div>
                <GridItem>
                  <h5>
                    <strong>
                      La Empresa Educativa“Rubén Gonzalo Suárez Valera”
                    </strong>
                    , nace del sueño de sus fundadores: Laura Aguilar, Teresa
                    Albarrán y Julio Perozo, de crear una institución Educativa,
                    bajo la cual se formarán ciudadanos para el mundo con una
                    excelente preparación académica, espiritual, humana,
                    familiar y con sensibilidad artística.
                  </h5>
                </GridItem>
                <GridItem>
                  <h5>
                    Se fundó hace 43 años como el inicio de un gran proyecto
                    educativo, laborando como «Guardería Blanca Nieves», al
                    convertirse en una institución de educación preescolar se
                    registró en el Ministerio de Educación con el nombre de
                    “Centro Educativo Blanca Nieves”. Este centro educativo,
                    destinado entonces a la formación de niños entre 3 y 6 años,
                    posteriormente dio respuesta a la demanda educativa de
                    entonces y extendió su nivel de formación hasta el 4to, 5to
                    y 6to. Grado adquiriendo el nombre de U.E. “Blanca Nieves”.
                  </h5>
                </GridItem>
              </div>
              <div>
                <GridItem>
                  <h5>
                    Nuestra amada Lcda. Keila Perozo Keila Perozo con autoridad
                    de conocimiento en el mundo de las artes plástica con titulo
                    que acredita, para dar cumplimiento a la Resolución del
                    Ministerio de Educación que establecía que todas las
                    instituciones educativas deberían identificarse con el
                    epónimo de una personalidad con trayectoria política, social
                    y educativa procedió entonces a cambiar el nombre de la
                    institución, de Unidad Educativa Blanca Nieves a U.E.“Rubén
                    Gonzalo Suárez Valera”; cuyo nombre corresponde a un
                    excelente maestro, inventor y artista plástico Zuliano de
                    reconocidos valores y trayectoria.
                  </h5>
                </GridItem>
                <GridItem>
                  <h5>
                    A partir del año escolar 1993-1994 la institución decide
                    extender el nivel de formación hasta la tercera etapa de
                    Educación Básica (7mo, y 8vo Grado), Siendo Jorge Bermúdez
                    pilar fundamental para el proceso de crecimiento
                    institucional. Posteriormente, la institución amplía su
                    oferta educativa hasta el quinto año de Educación Media
                    Diversificada, lo que le permite egresar en el año 1997, la
                    primera Promoción de Bachilleres mención Ciencias.
                  </h5>
                </GridItem>
              </div>
              <div>
                <GridItem>
                  <h5>
                    Actualmente somos una institución que posee múltiples
                    servicios, nos caracterizamos por impulsar el placer por las
                    artes y proyectos de vanguardia con un carácter
                    multidisciplinario, que ha brindado sus frutos en su
                    recorrer de 43 años en el que hacer educativo. Así lo
                    refieren las promociones; XLI de Educación Inicial, XXXI de
                    Educación Primaria y XXIII de Educación Media General.
                  </h5>
                </GridItem>
                <GridItem>
                  <h5>
                    Así mismo, en nuestro recorrido vivencial hemos obteniendo
                    diversos reconocimientos en el ámbito educativo, cultural y
                    deportivo, tales como: Gran Águila de Venezuela y la
                    nominación durante10años consecutivos al Premio
                    Iberoamericano a la Excelencia Educativa y a la Gerencia
                    Educativa. Hoy tenemos así, la satisfacción de cumplir con
                    Dios, la Sociedad y el Estado Zulia.
                  </h5>
                </GridItem>
              </div>
            </Carousel>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={7} className={classes.marginAuto}>
          <Card plain carousel>
            <Carousel {...settings}>
              <div>
                <img src={image1} alt="First slide" className="slick-image" />
              </div>
              <div>
                <img src={image2} alt="First slide" className="slick-image" />
              </div>
              <div>
                <img src={image3} alt="First slide" className="slick-image" />
              </div>
            </Carousel>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
