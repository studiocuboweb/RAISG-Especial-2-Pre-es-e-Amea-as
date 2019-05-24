import React from "react";
import { Helmet } from "react-helmet";
import Container from "components/blocks/Container";
import StoryMedia from "components/StoryMedia";
import ExternalLink from "components/ExternalLink";
import FileLink from "components/FileLink";
import Paragraph from "components/blocks/Paragraph";
import FullBlock from "components/blocks/Full";
import ImageBlock from "components/blocks/Image";
import Title from "components/blocks/Title";
import Quote from "components/blocks/Quote";
import FeaturedText from "components/blocks/FeaturedText";
import Note from "components/blocks/Note";
import EndChapter from "components/blocks/EndChapter";
import Table from "components/blocks/Table";

export default () => (
  <article>
    <Helmet>
      <title>Introducción | Amazonía en la encrucijada socioambiental</title>
    </Helmet>
    <Container>
      <Title as="h2">Introducción</Title>
      <Note>
        <p>
          La Pan Amazonía resguarda el bosque tropical más extenso del mundo, representa el 40% de la extensión de Sudamérica. En ella habitan pueblos indígenas que cubren el 28% del territorio y una mega-biodiversidad en áreas protegidas que representan el 23% de la región. Ahora, más que nunca, esta gran riqueza cultural y natural afronta diversos retos.
        </p>
      </Note>

      <Paragraph>
        La <ExternalLink href="https://www.amazoniasocioambiental.org/es/" language="es">Red Amazónica de Información Socioambiental Georreferenciada (RAISG)</ExternalLink>{" "}grupo técnico formado por organizaciones de seis países de la región, publicó la más reciente colección de mapas con las presiones y amenazas que enfrenta la Amazonía.
      </Paragraph>

      <Paragraph>
        La <ExternalLink href="https://www.amazoniasocioambiental.org/es/mapas/#!/presiones" language="es">publicación, actualizada al 2018</ExternalLink>{" "}, aborda las intervenciones en infraestructura de transporte, energía e industrias extractivas, además de hacer un seguimiento a la frecuencia de quemas e incendios. Los resultados indican que <StoryMedia
        icon="map"
        media={{
        id: "map_01",
        type: "mapbox",
          data: {
            map: "map1",
            legend:"legend1",
            update: "map1_1",
            showExtraLayers: [],
            coordinates: [-61.480337,-5.080136],
            zoomNumber: 4,
            zoomMin: 4,
            zoomMax: 10
          }
        }}> 68% de las áreas naturales protegidas y territorios indígenas de la región tienen superposición con proyectos de infraestructura y planes de inversión</StoryMedia>.
      </Paragraph>

      <Paragraph>
        La RAISG muestra que, sólo considerando minería y  petróleo, 87,2 millones de hectáreas o el 22% de los 390 millones de hectáreas dedicadas a la conservación y a territorios indígenas están sujetas a algún tipo de amenaza o presión.
      </Paragraph>

      <Paragraph>
        Sus mapas también revelan la presencia de hidroeléctricas y carreteras en áreas naturales protegidas y en territorios indígenas. En este sentido, de las 272 grandes centrales hidroeléctricas en la región amazónica - sean planificadas, en construcción o en operación - 78 están dentro de territorios indígenas y 84 se hallan en conflicto con áreas naturales protegidas. Con  relación a las carreteras y vías, de los 136 mil kilómetros mapeados en la región, aproximadamente 20% (26 mil km) están superpuestos con áreas naturales protegidas y territorios indígenas.
      </Paragraph>

      <Quote author="Richard C. Smith, director del Instituto Bien Común, del Perú">
        Actualmente, no existe una política nacional para la Amazonía que nos permita trazar una visión integral, coherente y de largo plazo para la región. Por consiguiente, una estrategia clara de desarrollo territorial tampoco está en vigor. De hecho, la orientación de las decisiones políticas depende principalmente de las circunstancias y de la voluntad de los actuales gobernantes
      </Quote>
    </Container>
  </article>
);
