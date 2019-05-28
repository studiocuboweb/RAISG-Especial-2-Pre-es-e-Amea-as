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
import TableIntro from "components/blocks/TableIntro";

export default () => (
  <article>
    <Helmet>
      <title>Introducción | Amazonía en la encrucijada</title>
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
        La <ExternalLink href="https://www.amazoniasocioambiental.org/es/mapas/#!/presiones" language="es">publicación, actualizada al 2018</ExternalLink>{" "}, aborda seis temas: intervenciones en infraestructura de transportes (vías), energía (hidroeléctricas) e industrias extractivas (minería y petróleo), además de hacer un seguimiento a la frecuencia de quemas y deforestación. Los resultados indican que <StoryMedia
        icon="map"
        media={{
        id: "map_01",
        type: "mapbox",
          data: {
            map: "map1",
            legend:"legend_group1",
            update: "map1_1",
            showExtraLayers: [],
            coordinates: [-61.480337,-6.435536],
            zoomNumber: 4,
            zoomMin: 4,
            zoomMax: 10
          }
        }}> 68% de las áreas naturales protegidas y territorios indígenas de la región tienen superposición con proyectos de infraestructura y planes de inversión</StoryMedia>.
      </Paragraph>

      <Paragraph>
        <strong>Total de presiones y amenazas - Qtd de temas analizados que se superponen a territorios indígenas (TIs) y áreas naturales protegidas (ANPs)</strong>
      </Paragraph>

      <TableIntro>
        <table>
          <tr>
            <th># temas</th>
            <th># TI</th>
            <th></th>
            <th></th>
            <th># temas</th>
            <th># ANP</th>
            <th></th>
          </tr>
          <tr>
            <td>0</td>
            <td>523</td>
            <td>8,20%</td>
            <th></th>
            <td>0</td>
            <td>63</td>
            <td>9,10%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2584</td>
            <td>40,70%</td>
            <th></th>
            <td>1</td>
            <td>141</td>
            <td>20,38%</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2042</td>
            <td>32,20%</td>
            <th></th>
            <td>2</td>
            <td>188</td>
            <td>27,17%</td>
          </tr>
          <tr>
            <td>3</td>
            <td>877</td>
            <td>13,80%</td>
            <th></th>
            <td>3</td>
            <td>193</td>
            <td>27,89%</td>
          </tr>
          <tr>
            <td>4</td>
            <td>279</td>
            <td>4,40%</td>
            <th></th>
            <td>4</td>
            <td>90</td>
            <td>13,01%</td>
          </tr>
          <tr>
            <td>5</td>
            <td>35</td>
            <td>0,60%</td>
            <th></th>
            <td>5</td>
            <td>15</td>
            <td>2,17%</td>
          </tr>
          <tr>
            <td>6</td>
            <td>5</td>
            <td>0,10%</td>
            <th></th>
            <td>6</td>
            <td>2</td>
            <td>0,29%</td>
          </tr>
          <tr>
            <th>Total TI</th>
            <th>6345</th>
            <th>100%</th>
            <th></th>
            <th>Total ANP</th>
            <th>692</th>
            <th>100%</th>
          </tr>
        </table>
      </TableIntro>

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
