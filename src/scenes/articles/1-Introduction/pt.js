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
      <title>Introdução | Amazônia: a encruzilhada socioambiental </title>
    </Helmet>
    <Container>
      <Title as="h2">Introdução</Title>
      <Note>
        <p>
          A Pan-Amazônia protege a floresta tropical mais extensa do mundo, representando 40% da América do Sul.  Nela habitam povos indígenas que cobrem 28% do território e uma mega biodiversidade em áreas protegidas que representam 23% da região. Agora, mais do que nunca, esta grande riqueza cultural e natural enfrenta diversos desafios.
        </p>
      </Note>

      <Paragraph>
        A <ExternalLink href="https://www.amazoniasocioambiental.org/es/" language="es">Rede Amazônica de Informação Socioambiental Georreferenciada (RAISG)</ExternalLink>{" "}, um grupo técnico formado por organizações de seis países da região, publicou sua mais recente coleção de mapas com as pressões e ameaças enfrentadas na Amazônia.
      </Paragraph>

      <Paragraph>
        A <ExternalLink href="https://www.amazoniasocioambiental.org/es/mapas/#!/presiones" language="es">publicação, atualizada em 2018</ExternalLink>{" "}, aborda seis temas: intervenções em infraestrutura de transportes (vias), energia (hidrelétricas) e indústrias extrativas (mineração e petróleo), além de monitorar a frequência de queimadas e desmatamentos. Os resultados indicam que <StoryMedia
        icon="map"
        media={{
        id: "map_01",
        type: "mapbox",
          data: {
            map: "map1",
            legend:"legend1",
            update: "map1_1",
            showExtraLayers: [],
            coordinates: [-62.798552,-7.736987],
            zoomNumber: 4,
            zoomMin: 3,
            zoomMax: 10
          }
        }}> 68% das áreas naturais protegidas e territórios indígenas da região se sobrepõem a projetos de infraestrutura e planos de investimento</StoryMedia>.
      </Paragraph>

      <Paragraph>
        <strong>Total de pressões e ameaças - Qtd de temas analisados que se superpõe a territórios indígenas  (TIs) e áreas naturais protegidas (ANPs)</strong>
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
        A RAISG mostra que, considerando apenas mineração e petróleo, 87,2 milhões de hectares ou 22% dos 390 milhões de hectares dedicados à conservação e territórios indígenas estão sujeitos a algum tipo de ameaça ou pressão.
      </Paragraph>

      <Paragraph>
        Seus mapas também revelam a presença de hidrelétricas e estradas em áreas naturais protegidas e em territórios indígenas. Nesse sentido, das 272 grandes usinas hidrelétricas da Amazônia - planejadas, em construção ou em operação - 78 estão dentro dos territórios indígenas e 84 estão em conflito com áreas naturais protegidas. No que diz respeito a estradas e rotas, dos 136.000 quilômetros mapeados na região, aproximadamente 20% (26.000 km) são sobrepostos com áreas naturais protegidas e territórios indígenas.
      </Paragraph>

      <Quote author="Richard C. Smith, diretor do Well Common Institute, do Peru">
        Atualmente, não existe uma política nacional para a Amazônia que nos permita traçar uma visão abrangente, coerente e de longo prazo para a região. Portanto, uma estratégia clara de desenvolvimento territorial também não está em vigor. De fato, a orientação das decisões políticas depende principalmente das circunstâncias e da vontade dos atuais governantes
      </Quote>
    </Container>
  </article>
);
