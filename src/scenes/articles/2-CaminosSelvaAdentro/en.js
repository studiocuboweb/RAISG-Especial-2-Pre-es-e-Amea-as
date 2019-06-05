import React from "react";
import { Helmet } from "react-helmet";
import StoryMedia from "components/StoryMedia";
import ExternalLink from "components/ExternalLink";
import Container from "components/blocks/Container";
import Title from "components/blocks/Title";
import Paragraph from "components/blocks/Paragraph";
import FeaturedText from "components/blocks/FeaturedText";
import Quote from "components/blocks/Quote";
import Note from "components/blocks/Note";
import FileLink from "components/FileLink";

export default () => (
  <article>
    <Helmet>
      <title>Routes into the forest | Amazonia at the crossroads</title>
    </Helmet>
    <Container>
      <Title as="h2">Routes into the forest</Title>
      <Note>
        <p>
          The 
          <StoryMedia
              media={{
              id: "image-1",
              type: "image",
              data: {
                credits: "Paulo Santos",
                src: require("photos/chapter2/PauloSantos_AnapuPara_13_Transamazonica©PS.jpg")
              }
            }}> opening of new roads</StoryMedia>, 
          railways and waterways in the Amazonia forest has always been and always will be the main vector of transformation of the territory.
        </p>
      </Note>

      <Paragraph>
        By 2018 more than 136,000 kilometres of roads had been built in the Pan-Amazonia region, of which 26,000 kilometres are located within protected natural areas and indigenous territories. Of this total, 16,900 kilometres cross indigenous territories and 9,100 kilometres cross protected natural areas.
      </Paragraph>

      <Paragraph>
        The case of the Brazilian Amazonia helps us to visualize the future of the entire region.
        <StoryMedia
        icon="map"
        media={{
        id: "map_02",
        type: "mapbox",
          data: {
            map: "map2",
            legend:"legend_group2",
            update:"map2",
            showExtraLayers: [],
            coordinates: [-57.190342,-7.196235],
            zoomNumber: 5.07,
            zoomMin: 4,
            zoomMax: 10
          }
        }}> Most deforestation occurs in the vicinity of roads
        </StoryMedia>, 
        and it is estimated that approximately <ExternalLink href="https://doi.org/10.1080/01431160110096791" language="en">90% of native vegetation loss will occur within a radius of 100 kilometres from the road network</ExternalLink>, according to the study "Space-time dynamics of deforestation in Brazilian Amazonia" published in the International Journal of Remote Sensing in 2002.
      </Paragraph>

      <Paragraph>
        The results of research on this subject, however, vary with respect to the distance at which the highest intensity of deforestation occurs. For example, Gregory Asner, in 2006, found that <ExternalLink href="https://doi.org/10.1080/01431160110096791" language="en">67% of deforestation occurs at a maximum distance of 50 km from roads</ExternalLink>, whereas Kenneth M. Chomitz and Timothy S. Thomas found that at this distance <ExternalLink href="http://documents.worldbank.org/curated/en/102381468769744789/Geographic-patterns-of-land-use-and-land-intensity-in-the-Brazilian-Amazon" language="en">85% of the vegetation cover was removed</ExternalLink>. In contrast, almost a decade later, Christopher P. Barber's findings show that in the Brazilian Amazonia <ExternalLink href="https://www.sciencedirect.com/science/article/abs/pii/S000632071400264X" language="en">94.9% of deforestation occurred within 5.5 kilometres of roads and one kilometre of rivers</ExternalLink>. This all this goes to show the close connection between the expansion of this form of transport network and the loss of native vegetation.
      </Paragraph>

      <Paragraph>
        With the roads opened in the 1960s, Brazil is familiar with the impacts of occupation caused by the construction of long distance roads connecting the north and south of the country. Other countries, such as Peru, are now evaluating the consequences of the recent construction of important highways, such as the
        <StoryMedia
          media={{
          id: "image-2",
          type: "image",
          data: {
            credits: "Andina",
            src: require("photos/chapter2/Andina_000095074W_CarreteraInteroceanica.jpg")
          }
        }}> Interoceanic South, completed in 2010
        </StoryMedia>.
        And previously unaffected areas of the Amazonia are now experiencing a boom in new roads, such as in Colombia and Bolivia.
      </Paragraph>

      <Paragraph>
        <strong className='regular-title'>New routes, new actors</strong>
      </Paragraph>

      <Paragraph>
        Currently, the Colombian Amazonia has a total of 32,780 km of level 1 to 7 roads, with levels 6 and 7 (tertiary roads) representing the largest amount by distance, with a total of 
        <StoryMedia
        icon="map"
        media={{
        id: "map_03",
        type: "mapbox",
          data: {
            map: "map3",
            legend:"legend_group3",
            update:"map3",
            showExtraLayers: [],
            coordinates: [-72.000616,0.004479],
            zoomNumber: 5.99,
            zoomMin: 4,
            zoomMax: 10
          }
        }}> 23,407 km. Of this total, 2,336 km are inside Indigenous Reserves and 7,975 km in Protected Areas
        </StoryMedia>.
      </Paragraph>

      <FeaturedText>
        In Colombia, after the signing of the peace agreement, FARC guerrillas stopped occupying strategic entry points in the Amazonia jungle. At these points, the presence of the state is almost non-existent, so new actors (legal and illegal) have begun to arrive in search of natural resources and lands.
      </FeaturedText>

      <Paragraph>
        This has been facilitated by the rapid opening of new routes and the formalization of others built by FARC guerrillas before the signing of the peace agreement. They are mainly tertiary roads, the new way to penetrate the heart of the jungle. As shown in the map of pressures and threats (RAISG, 2018), the presence of roads in Colombia is concentrated in the northwest arc of the Amazonia. In the case of FARC roads, of <ExternalLink href="https://www.elespectador.com/noticias/judicial/las-farc-habrian-construido-mas-vias-que-odebrecht-y-los-nule-juntos-articulo-709623" language="es">3,753 kilometres built</ExternalLink>, <ExternalLink href="https://www.youtube.com/watch?v=j4IuJHhdCjk" language="es">490 km are inside protected areas</ExternalLink> of the Colombian Amazonia, specifically in the Serras de Chiribiquete National Park, the Nukak National Wildlife Reserve and the Tinigua Natural National Park.
      </Paragraph>

      <Paragraph>
        This trend is reinforced by the investment in the creation and expansion of roads that penetrate the Colombian jungle, where about 1.2 trillion Colombian pesos destined for tertiary post-conflict roads are in the hands of departmental governments. In addition, investments in road infrastructure for areas prioritized by the peace agreement amount to 1.38 trillion Colombian pesos, thanks to resources from the General System of Royalties (SGR).
      </Paragraph>

      <Paragraph>
        In the case of Bolivia, we can highlight the <StoryMedia
        icon="map"
        media={{
        id: "map_05",
        type: "mapbox",
          data: {
            map: "map5",
            legend:"legend_group5",
            update:"map5",
            showExtraLayers: [],
            coordinates: [-65.901742,-16.290507],
            zoomNumber: 8.25,
            zoomMin: 4,
            zoomMax: 10
          }
        }}>Isiboro Sécure Indigenous Territory and National Park (TIPNIS), one of 22 national protected areas and covering 1.3 million hectares</StoryMedia>.
        It is bordered by the rivers Isiboro to the south and Sécure to the north, in the heart of the country. It was created to conserve the forests and the culture of its resident indigenous people (12,000 Mojeño, Yuracaré and Chimane inhabitants). While 80 percent of its land is in good condition, the park is threatened by the advance of cultivation on its southern border; mainly the expansion of coca plantations along the
        <StoryMedia
          media={{
          id: "image-3",
          type: "image",
          data: {
            credits: "Samy Schwartz",
            src: require("photos/chapter2/Foto03_SamySchwartz_Tipnis_SemCredito.jpg")
          }
        }}> construction of the new Villa Tunari to San Ignacio de Moxos road
        </StoryMedia>
         (306 km long and 9.2 m wide) that crosses the core of the territory to connect the departments of Cochabamba and Beni.
      </Paragraph>

      <Paragraph>
        In 2017, Law 180 was passed, declaring the Isiboro Sécure Indigenous Territory and National Park (TIPNIS) a socio-cultural and natural heritage area and an area of ecological preservation, historical reproduction and habitat of the Chimane and Yuracaré indigenous peoples. But the same year saw Law 969 passed, which annulled the untouchability of TIPNIS in the name of national development and progress. This conflict highlights a view of development based on the exploitation of natural resources without taking the social and environmental costs and the long-term consequences into account.
      </Paragraph>

      <Paragraph>
        In Venezuela, the Regional Organization of Indigenous Peoples of Amazonas (Orpia) and Wataniba report an increase in river routes and dirt roads used to traffic cocaine. Venezuela also has production zones of this drug and its trafficking is linked to that of gasoline, food and gold, among other goods. This trade occurs on the borders with Colombia and Brazil and affects governance within indigenous territories and even the permanence of the communities. The
        <StoryMedia
          media={{
          id: "image-4",
          type: "image",
          data: {
            credits: "Guillermos da Silva",
            src: require("photos/chapter2/GuillermoDaSilva_954_Arawak.jpg")
          }
        }}> presence of irregular armed groups linked to the trafficking of different products and the increase of illegal mining on the borders
        </StoryMedia> 
        have generated new internal migrations, where indigenous communities, especially those associated with rivers along the border, such as the Orinoco and Atabapo rivers, are no exception. The Arawak people have made their voice heard through organizations such as Orpia and Coiam (Coordination of Amazonian Indigenous Organizations) following the displacement that has occurred as a result of the violence they have suffered.
      </Paragraph>

      <Paragraph>
        <strong className='regular-title'>Waterways and Railways</strong>
      </Paragraph>

      <Paragraph>
        Two important access routes to the Amazonia territory in Peru also act as vectors of deforestation:
        <StoryMedia
        icon="map"
        media={{
        id: "map_06",
        type: "mapbox",
          data: {
            map: "map6",
            legend:"legend_group6",
            update:"map6",
            showExtraLayers: [],
            coordinates: [-74.370790,-10.992592],
            zoomNumber: 6.00,
            zoomMin: 4,
            zoomMax: 10.99
          }
        }}> the Carretera Marginal de la Selva, built in the sixties, which extends to Ucayali, and the Southern Interoceanic, completed in 2010, which extends to Madre de Dios
        </StoryMedia>.
        In addition, in recent years, warnings have been issued on the proliferation of a network of forest access roads built without the authorization of the Peruvian authorities. These roads accelerate the process of colonization of the Peruvian Amazonia, facilitating depredation by miners, loggers and coca planters operating outside the law.
      </Paragraph>

      <Paragraph>
        In Peru, activities for the completion of the
        <StoryMedia
        icon="map"
        media={{
        id: "map_07",
        type: "mapbox",
          data: {
            map: "map7",
            legend:"legend_group7",
            update:"map7",
            showExtraLayers: [],
            coordinates: [-73.780518,-6.531468],
            zoomNumber: 6.20,
            zoomMin: 4,
            zoomMax: 10
          }
        }}> Hidrovía Amazónica are expected to begin, creating an extensive navigable channel linking the Marañon, Amazonas, Ucayali and Huallaga rivers
        </StoryMedia>. 
        These works, aimed at increasing transport of cargo by river, seek to ensure permanent navigability along the 2,600 kilometres between the port terminals of Yurimaguas, Iquitos and Pucallpa.
      </Paragraph>

      <Paragraph>
        The works include the dredging or removal of sediments in shallow and rocky stretches of these rivers. Experts warn of the environmental impact, since environmental protection regulations for the transport sector do not include specific measures for waterways. In addition, they point out that the project has not considered the impact of river dredging on the migration, reproduction and spawning of fish, nor has it taken into account the turbidity that will affect the water used by local populations. All this points to an expectation that the waterway will become a new focus of socio-environmental conflict. However, there is reason for hope, since in a decision of March 2019, the National Environmental Certification Service for Sustainable Investment (Senace) rejected the Environmental Impact Assessment (EIA) of the Amazonia Waterway project for the second time. Without this, work cannot start.
      </Paragraph>

      <Paragraph>
        In Colombia, President Iván Duque has pledged to improve the navigability of the Vaupés River, as well as a multimodal transportation system linking the municipality of Calamar in Guaviare with Mitu (Vaupés, Colombia) and Yavaraté (on the border with Brazil), which would speed up the process of colonization of the area.
      </Paragraph>

      <Paragraph>
        On the other hand, a main thrust of the continuous expansion of transport infrastructure in the Brazilian Amazonia is railway construction. The Ferrogrão line, almost a thousand kilometres long, from the
        <StoryMedia
          icon="map"
          media={{
          id: "map_08",
          type: "mapbox",
            data: {
              map: "map8",
              legend:"legend_group8",
              update:"map8",
              showExtraLayers: [],
              coordinates: [-55.392433,-10.128833],
              zoomNumber: 5.21,
              zoomMin: 4,
              zoomMax: 10
            }
          }}> grain producing region of Sinop (Mato Grosso) to the port of Miritituba (Pará)
        </StoryMedia>, 
        aims to consolidate exports through a new rail corridor for the north of the country. Running alongside the BR-163 highway, the railway can enhance negative social and environmental impacts in the region, with direct and indirect damage to protected natural areas and threats to indigenous territories.
      </Paragraph>
    </Container>
  </article>
);
