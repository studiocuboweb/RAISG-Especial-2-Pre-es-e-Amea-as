import React from "react";
import { Helmet } from "react-helmet";
import Container from "components/blocks/Container";
import StoryMedia from "components/StoryMedia";
import ExternalLink from "components/ExternalLink";
import Paragraph from "components/blocks/Paragraph";
import Title from "components/blocks/Title";
import Quote from "components/blocks/Quote";
import Note from "components/blocks/Note";
import TableIntro from "components/blocks/TableIntro";

export default () => (
  <article>
    <Helmet>
      <title>Introduction | Amazonia at the crossroads</title>
    </Helmet>
    <Container>
      <Note>
        <p>
          The Pan-Amazonia region protects the world's largest rainforest, accounting for 40% of South America. It contains indigenous peoples covering 28% of the territory and mega biodiversity in protected areas that represent 23% of the region. Now, more than ever, this great cultural and natural wealth faces many challenges.
        </p>
      </Note>

      <Paragraph>
        The <ExternalLink href="https://www.amazoniasocioambiental.org/en/" language="en">Amazonian Georeferenced Socio-Environmental Information Network (RAISG)</ExternalLink>{" "}a technical group formed by organizations from six countries in the region, has published its latest collection of maps on the pressures and threats faced by the Amazonia.
      </Paragraph>

      <Paragraph>
        The <ExternalLink href="https://www.amazoniasocioambiental.org/es/mapas/#!/presiones" language="es">publication, updated in 2018</ExternalLink>{" "}, addresses six themes: interventions in transport infrastructure (roads, waterways, railways), energy (hydroelectric projects) and extractive industries (mining and oil), as well as monitoring the frequency of burning and deforestation. The results show that <StoryMedia
        icon="map"
        media={{
        id: "map_01",
        type: "mapbox",
          data: {
            map: "map1",
            legend:"legend_group1",
            update: "map1_1",
            showExtraLayers: [],
            coordinates: [-61.480337,-7.435536],
            zoomNumber: 4,
            zoomMin: 4,
            zoomMax: 10
          }
        }}> 68% of the region's protected natural areas and indigenous territories overlap with infrastructure projects and investment plans</StoryMedia>.
      </Paragraph>

      <TableIntro>
      <table>
          <tr>
            <th colspan="5">
              Number of pressures and threats that overlap Indigenous Territories and Natural Protected Areas
            </th>
          </tr>
          <tr>
            <th># pressures and threatss</th>
            <th># Indigenous Territories</th>
            <th>Percentage</th>
            <th># Natural Protected Areas</th>
            <th>Percentage</th>
          </tr>
          <tr>
            <td>0</td>
            <td>523</td>
            <td>8%</td>
            <td>63</td>
            <td>9%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2584</td>
            <td>41%</td>
            <td>141</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2042</td>
            <td>32%</td>
            <td>188</td>
            <td>27%</td>
          </tr>
          <tr>
            <td>3</td>
            <td>877</td>
            <td>14%</td>
            <td>193</td>
            <td>28%</td>
          </tr>
          <tr>
            <td>4</td>
            <td>279</td>
            <td>4%</td>
            <td>90</td>
            <td>13%</td>
          </tr>
          <tr>
            <td>5</td>
            <td>35</td>
            <td>&#60;1%</td>
            <td>15</td>
            <td>2%</td>
          </tr>
          <tr>
            <td>6</td>
            <td>5</td>
            <td>&#60;1%</td>
            <td>2</td>
            <td>&#60;1%</td>
          </tr>
          <tr>
            <th>Total</th>
            <th>6345</th>
            <th>100%</th>
            <th>692</th>
            <th>100%</th>
          </tr>
        </table>
      </TableIntro>

      <Paragraph>
        RAISG shows that, considering just mining and oil, 87.2 million hectares or 22% of the 390 million hectares dedicated to conservation and indigenous territories are subject to some kind of threat or pressure.
      </Paragraph>

      <Paragraph>
        The maps also show the presence of hydroelectric projects and roads in protected natural areas and in indigenous territories. In this case, 78 of the 272 large hydroelectric power plants in the Amazonia - planned, under construction or in operation - are inside indigenous territories and 84 are in conflict with protected natural areas. As far as roads, waterways and railways are concerned, of the 136,000 kilometres mapped in the region, approximately 20% (26,000 km) are superimposed onto protected natural areas and indigenous territories.
      </Paragraph>

      <Quote author="Richard C. Smith, director of the Instituto Bien Común, Peru">
        Currently, there is no national policies for the Amazonia that will allow us to draw up a comprehensive, coherent and long-term vision for the region. Thus, a clear territorial development strategy is also not in force. In fact, guidance for policy decisions depends mainly on circumstances and the will of the current rulers
      </Quote>
    </Container>
  </article>
);
