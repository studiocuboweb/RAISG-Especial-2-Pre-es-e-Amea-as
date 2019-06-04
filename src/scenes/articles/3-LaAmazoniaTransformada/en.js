import React from "react";
import { Helmet } from "react-helmet";
import StoryMedia from "components/StoryMedia";
import ExternalLink from "components/ExternalLink";
import FileLink from "components/FileLink";
import Container from "components/blocks/Container";
import Title from "components/blocks/Title";
import Paragraph from "components/blocks/Paragraph";
import FeaturedText from "components/blocks/FeaturedText";
import Quote from "components/blocks/Quote";
import FullBlock from "components/blocks/Full";
import Note from "components/blocks/Note";
import Table from "components/blocks/Table";


export default () => (
  <article>
    <Helmet>
      <title>The Amazonia transformed | Amazonia at the crossroads</title>
    </Helmet>
    <Container>
      <Title as="h2">The Amazonia transformed</Title>
      <Note>
        <p>
          Extractive industries have been a feature of the Pan-Amazonia region for several decades. Among these ventures are some of the largest open-cast mines on the planet and
          <StoryMedia
            media={{
            id: "image-1",
            type: "image",
            data: {
              credits: "Andina",
              src: require("photos/chapter3/Andina_000362563W_DuctosPetroleo.jpg")
            }
          }}> long distance pipelines to move oil out of the heart of the forest
          </StoryMedia>.
          These projects have generated unresolved environmental liabilities.
        </p>
      </Note>

      <Paragraph>
        In its recent analysis of pressures and threats in the Amazonia, RAISG shows that, in terms of area, the extractive industries of mining and oil are those with the greatest weight. Together, these two sectors have blocks of land set aside for exploration and exploitation equivalent to 208 million hectares, representing 24.5% of the entire <ExternalLink href="https://www.amazoniasocioambiental.org/es/publicacion/amazonia-2017-areas-protegidas-y-territorios-indigenas/" language="es">Pan-Amazonian area, whose total area is calculated to be ​​847 million hectares (RAISG, 2017)</ExternalLink>.
      </Paragraph>

      <Paragraph>
        These threats and pressures do not occur uniformly or with the same intensity throughout this vast territory of areas covered by mining and
        <StoryMedia
          icon="map"
          media={{
          id: "map_09",
          type: "mapbox",
            data: {
              map: "map9",
              legend:"legend_group9",
              update:"map9",
              showExtraLayers: [],
              coordinates: [-62.170093,-6.650804],
              zoomNumber: 4.00,
              zoomMin: 4,
              zoomMax: 22
            }
          }}> hydrocarbon concessions
          </StoryMedia>. 
          But the existence of such an area confirms the proposed model for the countries of the region: one based on extraction and profit, with no evaluation of the consequences of losing more than a quarter of the Amazonia.
      </Paragraph>
      
      <Table>
        <table>
          <tr>
            <th colspan="3">Oil and mining areas</th>
          </tr>
          <tr>
            <th>Country</th>
            <th>Mining (ha)</th>
            <th>Oil (ha)</th>
          </tr>
          <tr>
            <td>Bolivia</td>
            <td>1.102.222</td>
            <td>15.604.528</td>
          </tr>
          <tr>
            <td>Brazil</td>
            <td>108.053.239</td>
            <td>9.158.666</td>
          </tr>
          <tr>
            <td>Colombia</td>
            <td>794.712</td>
            <td>19.375.131</td>
          </tr>
          <tr>
            <td>Ecuador</td>
            <td>1.690.037</td>
            <td>6.817.191</td>
          </tr>
          <tr>
            <td>French Guiana</td>
            <td>s.i.</td>
            <td>s.i.</td>
          </tr>
          <tr>
            <td>Guiana</td>
            <td>10.045.243</td>
            <td>s.i.</td>
          </tr>
          <tr>
            <td>Peru</td>
            <td>7.535.204</td>
            <td>13.840.684</td>
          </tr>
          <tr>
            <td>Suriname</td>
            <td>3.019.411</td>
            <td>s.i.</td>
          </tr>
          <tr>
            <td>Venezuela</td>
            <td>11.513.562</td>
            <td>1.245.633</td>
          </tr>
          <tr>
            <th>Total</th>
            <th>143.753.630</th>
            <th>64.332.969</th>
          </tr>
        </table>
      </Table>

      <Paragraph>
        Unremedied environmental damage is common. This occurs both where mining and oil extraction took place in the past and where these are still carried out. Although illegal mining, which we address in the <ExternalLink href="https://illegalmining.amazoniasocioambiental.org/?lang=en" language="en">special report "Looted Amazonia" (published by RAISG and InfoAmazonia in 2018)</ExternalLink>, is present in all Amazonian countries, the greatest damage is caused by projects supported by national and regional governments. Often these projects have been authorized without due consultation with the affected populations and cause indiscriminate impacts on other countries of the Amazonia region. In other cases, government agents participate in or contribute to the activity, although in theory this is illegal.
      </Paragraph>

      <Paragraph>
        <strong className='regular-title'>The cost of oil and mining</strong>
      </Paragraph>

      <Paragraph>
        <StoryMedia
          media={{
            id: "galery-1",
            type: "gallery",
            data: {
              items: [
                {
                  src: require("photos/chapter3/gallery-1/01_FederacionOPIKAFPE_DERRAM12_quebradaPiedraNegra_CuencaTigre_Feb2018.jpg"),
                  credits: "Federación OPIKAFPE"
                },
                {
                  src: require("photos/chapter3/gallery-1/02_FederacionACODECOSPAT_DERRAM03_oleoductoNorperuano_ComSanPedro_Feb2017.jpg"),
                  credits: "Federación ACODECOSPAT"
                },
                {
                  src: require("photos/chapter3/gallery-1/03_FederacionACODECOSPAT_DERRAM02_oleoductoNorperuano_ComSanPedro_Feb2017.jpg"),
                  credits: "Federación ACODECOSPAT"
                },
                {
                  src: require("photos/chapter3/gallery-1/04_FederacionFECONACOR_DERRAM_10_ComNuevaNazareth_Feb2018.jpg"),
                  credits: "Federación FECONACOR"
                },
                {
                  src: require("photos/chapter3/gallery-1/05_FederacionACODECOSPAT_DERRAM04_ComLaPetrolera_Mar2019.jpg"),
                  credits: "Federación ACODECOSPAT"
                },
                {
                  src: require("photos/chapter3/gallery-1/06_FederacionACODECOSPAT_DERRAM05_ComBellavista_Mar2019.jpg"),
                  credits: "Federación ACODECOSPAT",
                },
                {
                  src: require("photos/chapter3/gallery-1/07_FederacionFEDIQUEP_DERRAM01_lagunaUshpayacu_Pastaza_2017.jpg"),
                  credits: "Federación FEDIQUEP"
                }
              ]
            }
          }}
        > According to the energy and mining investment watchdog, Osinergmin, 190 oil spills were recorded in the Peruvian Amazonia over 20 years
        </StoryMedia>.
        This source also suggests that spills are mainly due to the existence of old infrastructure in the most productive wells, which date back to the 1970s and are not properly maintained. Between 2008 and 2017, 25,000 barrels of oil were spilled, according to a report by the National Congress.
      </Paragraph>

      <Paragraph>
        To make the situation worse, the Peruvian state hydrocarbons company has hired
        <StoryMedia
          media={{
          id: "video-1",
          type: "youtube",
          data: {
            id: "SiQ6CE4D8xQ"
          }
          }}> improvised work teams to clean up leaks using unskilled local labour
          </StoryMedia>.
          In some cases, the payments for these services have acted as an incentive for the sabotage of the pipeline.
      </Paragraph>

      <Paragraph>
        Oil spills in the Peruvian Amazonia have caused serious environmental impacts - pollution of water courses and fish mortality, as well as serious cultural and social damage to the indigenous population, since the leaks affect their health and quality of life and have not been adequately addressed to date.
      </Paragraph>

      <Paragraph>
        However, in some cases, damage to the environment and the health of the population becomes so acute that governments are forced to act. In February 2019,
        <StoryMedia
          media={{
            id: "galery-2",
            type: "gallery",
            data: {
              items: [
                {
                  src: require("photos/chapter3/gallery-2/01_Andina_000565499W.jpg"),
                  credits: "Andina"
                },
                {
                  src: require("photos/chapter3/gallery-2/02_Andina_000565504W.jpg"),
                  credits: "Andina"
                },
                {
                  src: require("photos/chapter3/gallery-2/03_Andina_000566220W.jpg"),
                  credits: "Andina"
                },
                {
                  src: require("photos/chapter3/gallery-2/04_OscarMujicaFZS_La-pampa.jpg"),
                  credits: "Oscar Mujica/FZS Perú"
                }
              ]
            }
          }}
        > the environmental and social disaster that involved illegal mining in Madre de Dios in Peru forced the government to launch Operation Mercury
        </StoryMedia>,
        a comprehensive and multisectoral intervention aimed at restoring the rule of law and guaranteeing the health and well-being of the population, as well as offering economic alternatives to mining. We will have to wait to assess the results.
      </Paragraph>
      
      <Paragraph>
        Since the period of the Correa government, Ecuador has been betting on
        <StoryMedia
          media={{
          id: "image-2",
          type: "image",
          data: {
            credits: "La Sección",
            src: require("photos/chapter3/Mirador_Fuente_La_Seccion.jpg")
          }
        }}> large-scale mining as a strategic activity for the country's development model
        </StoryMedia>.
        The National Accounts of the Central Bank of Ecuador show that the gross production of the exploitation of metallic and non-metallic minerals, as well as mining and quarrying support activities, represents 0.3% of total GDP. The government hopes this figure will rise to 4% by 2021 through the promotion of mining.
      </Paragraph>

      <Paragraph>
        Ecuadorian oil receives the same treatment. So far this century, oil exports have accounted for 50% of total exports, with economic returns accounting for an average 11% of GDP. However, oil exploration has led to the deforestation of 2 million hectares and spillage of more than 650,000 barrels of oil in forests, rivers and streams, as well as heavy metals that have contaminated water sources in the Amazonia region. This has had an impact on the health of populations studied who fall sick after drinking contaminated water and can no longer fish in these rivers.
      </Paragraph>

      <FeaturedText>
        Illegal mining and the presence of irregular armed groups (national or foreign) in the Venezuelan Amazonia are extremely important factors.
      </FeaturedText>
      
      <Paragraph>
        Venezuela has been suffering a serious economic, political and social crisis for several years. In 2018, and so far in 2019, the situation has worsened significantly. The critical situation affecting electricity supply increases the lack of medicines, the difficulty of obtaining food, the absence of currency and hyperinflation. All of this has led to a serious humanitarian crisis.The crisis directly impacts the preservation of Amazonian ecosystems and their diversity of species, the prosperity of indigenous populations, ancestral customs, governability of the region and self-determination of native peoples.
      </Paragraph>

      <Paragraph>
        The
        <StoryMedia
          icon="map"
          media={{
          id: "map_10",
          type: "mapbox",
            data: {
              map: "map10",
              legend:"legend_group10",
              update:"map10",
              showExtraLayers: [],
              coordinates: [-65.468,6.134],
              zoomNumber: 5.85,
              zoomMin: 4,
              zoomMax: 22
            }
          }}> National Zone of Strategic Development "Mining Arc of the Orinoco" (ZDEN-AMO)
          </StoryMedia> 
          was decreed in February 2016 by the Venezuelan national government. It is referred to as a megaproject, although in real terms it is an area available for exploitation, and exploration with no known plan. Its territorial area exceeds that of countries such as Cuba, Belgium, Panama, Ecuador, among many others. It covers 11.1 million hectares, divided into four blocks in the north of the state of Bolívar, but reaches almost 11.4 million hectares to include what is called the Icabaru special block (1.7 million hectares), to the south of the Canaima National Park, as indicated by Francisco Ruiz in his 2018 work, 
          <FileLink
            href={require("documents/chapter3/9.TC_Ruiz_274.pdf")}
            format="pdf"
            size="1.2MB"
          > "El Arco Minero del Orinoco: diversificación del extractivismo y nuevos regímenes biopolíticos”
          </FileLink>.
      </Paragraph>

      <Paragraph>
        The purpose behind its creation was the extraction of strategic minerals such as gold, coltan, diamonds, copper, iron and bauxite, as well as rare earths (raw material for different applications in the nuclear industry). This was done by ignoring much of the current legal framework of the country, as regards environmental, labour, indigenous peoples’ and even human rights. To undertake this process, agreements have been signed with transnational companies from various countries. These deals involve
        <StoryMedia
          media={{
            id: "galery-3",
            type: "gallery",
            data: {
              items: [
                {
                  src: require("photos/chapter3/gallery-3/01_JavierMesa_JAV_6219_ExplotacionHierro.jpg"),
                  credits: "Javier Mesa"
                },
                {
                  src: require("photos/chapter3/gallery-3/02_Cercanias_El-Pauji_Edo-Bolivar_Hernan-Biord_IMG-20170221-WA0022.jpg"),
                  credits: "Hernan Biord"
                },
                {
                  src: require("photos/chapter3/gallery-3/03_Cristinas-3_EdoBolivar_Hernan-Biord.jpg"),
                  credits: "Hernan Biord"
                },
                {
                  src: require("photos/chapter3/gallery-3/04_Cristinas-5-MinasLasCristinas-HernanBiord.jpg"),
                  credits: "Hernan Biord"
                },
                {
                  src: require("photos/chapter3/gallery-3/05_MarekAudy_Brisas-del-Cuyuni-pole.jpg"),
                  credits: "Marek Audy"
                },
                {
                  src: require("photos/chapter3/gallery-3/06_MarekAudy_Brisas-del-Cuyuni-pole2.jpg"),
                  credits: "Marek Audy"
                },
                {
                  src: require("photos/chapter3/gallery-3/07_MarekAudy_Brisas-del-Cuyuni-zlab4.jpg"),
                  credits: "Marek Audy"
                },
                {
                  src: require("photos/chapter3/gallery-3/08_MarekAudy_Brisas-del-Cuyuni-zlaby4.jpg"),
                  credits: "Marek Audy",
                  isVertical: true
                }
              ]
            }
          }}
        > open cast mining using the same technologies as those used in illegal mining
        </StoryMedia>,
        especially gold mining.
      </Paragraph>

      <Paragraph>
        In Venezuela, there has been no investment in mining technology (especially for gold), despite the creation of the Ministry of Ecological Mining. The socio-environmental and cultural impact assessments for each prospecting and exploration project have not been disclosed and neither were the processes of prior and informed consultation with indigenous communities as required under national law. It was only in the first quarter of 2019 that a special agreement was signed between the National Experimental University of Guyana and the Government to carry out a number of social and environmental impact studies.
      </Paragraph>

      <Paragraph>
        Another source of pressure occurs in the 
        <StoryMedia
          icon="map"
          media={{
          id: "map_11",
          type: "mapbox",
            data: {
              map: "map11",
              legend:"legend_group11",
              update:"map11",
              showExtraLayers: ['bosquesprot'],
              coordinates: [-78.095988,-3.711790],
              zoomNumber: 8.56,
              zoomMin: 4,
              zoomMax: 12
            }
          }}>Cordillera del Condor in Peru, in the department of Amazonas, on the border between Peru and Ecuador, in the Awajún-Wampis ancestral territory
          </StoryMedia>.
          These peoples agreed to the creation of a protected area as part of the peace negotiations with Ecuador. In 1999, the Reserved Zone of Santiago Comaina was created, a temporary category that would then become a national park. However, in 2007 by order of the government of Alan Garcia, who gave way under pressure from the mining sector, half of the Reserve became the Muja Ichigat National Park - Cordillera del Condor, while the other half was excluded. In the excluded part, the García government granted mining concessions. This set the stage for permanent socio-environmental conflict. In 2016, President Kuczynski's administration canceled the concessionaire's operating license, but that did not prevent it from continuing to illegally exploit gold in the area.
      </Paragraph>

      <FeaturedText>
        Mining affects food sources, streams, rivers, forests, soils and is a serious and direct threat to the survival of the Awajún.
      </FeaturedText>

      <Paragraph>
        In the case of mining in the
        <StoryMedia
          media={{
          id: "video-2",
          type: "youtube",
          data: {
            id: "Sy2Nm0bPljI"
          }
          }}> Cordillera del Condor, the Awajún-Wampis have fought against these legal and illegal mining operations
          </StoryMedia>
          taking place in their territory. Although the central government and the regional government of Amazonas have cancelled the operating permits of the company, these acts were not followed up by actions to ensure compliance with the law. The company has continued to operate in the area through strategies such as promoting the activities of small scale prospectors and provoking divisions among the indigenous peoples by, for example, enticing young people to their cause. But the indigenous residents reacted by destroying the company's offices and taking charge of patrolling the area to keep illegal mining out. However, this has not significantly changed the state of affairs.
      </Paragraph>

      <Paragraph>
        Throughout the Pan-Amazonia region, the overlapping of mining and petroleum blocks with protected natural areas and indigenous territories is the cause of constant socio-environmental conflicts. Together, concession blocks for mineral and oil exploration cover more than 87.2 million hectares of protected forests. Economic interests prevail over conservation of the diversity found in them.
      </Paragraph>
      
      <Paragraph>
        For example,
        <StoryMedia
          media={{
            id: "galery-4",
            type: "gallery",
            data: {
              items: [
                {
                  src: require("photos/chapter3/gallery-4/01_Javier_Mesa_JAV_9068_PNCanaima.jpg"),
                  credits: "Javier Mesa"
                },
                {
                  src: require("photos/chapter3/gallery-4/02_Javier_Mesa_MG_9200_PNCanaima.jpg"),
                  credits: "Javier Mesa"
                },
                {
                  src: require("photos/chapter3/gallery-4/03_IzabelaStachowicz_4290965_PNCanaima_rioCaroni.jpg"),
                  credits: "Izabela Stachowicz"
                },
                {
                  src: require("photos/chapter3/gallery-4/04_IzabelaStachowicz_4290929_PNCanaima_rioCaroni.jpg"),
                  credits: "Izabela Stachowicz"
                },
                {
                  src: require("photos/chapter3/gallery-4/06_IzabelaStachowicz_4291022_PNCanaima_rioCaroni.jpg"),
                  credits: "Izabela Stachowicz",
                },
                {
                  src: require("photos/chapter3/gallery-4/07_IzabelaStachowicz_4290937_PNCanaima_rioCaroni.jpg"),
                  credits: "Izabela Stachowicz"
                }
              ]
            }
          }}
        > of the seven national parks in the Venezuelan Amazonia, six have areas of illegal mining within their borders
        </StoryMedia>.
        The exception is the Delta del Orinoco National Park, in the state of Delta Amacuro. The remainder are in the states of Amazonas (Duida-Marahuaca, Parima Tapirapecó, Serranía La Neblina, Yapacana and Caura), where mining is prohibited by decree, and Bolívar (Caura and Canaima), the area most affected by mining in the country. The Canaima and Yapacana top the list of national parks with the highest intensity of mining activity. In the case of the Canaima national park, mining is found not only within its boundaries, but practically encircling its entire western and southern edges (the Caroní River on its western boundary and the Icabarú Special Block to the south). This is also a protected area classified as a World Heritage Site by Unesco in 1994. In both cases alarms have been raised because, although the affected area of ​​the Yapacana National Park is proportionally greater than that of the Canaima National Park, the intensity of the impact over the western and southern borders of the latter is cause for concern, even without regard to what is happening within the area itself.
      </Paragraph>

      <Paragraph>
        In Peru, in the Andean portion of the Amazonia basin, most mining concessions are superimposed on peasant communities. This creates socio-environmental conflicts. One of the strategies used by concessionaires is to buy the land under concession. Being communal property, this is not easy, but not impossible. For more than a decade, the Peruvian state has been making changes to the communal tenure system to facilitate the division and sale of communal lands as individual plots. 
      </Paragraph>
    </Container>
  </article>
);
