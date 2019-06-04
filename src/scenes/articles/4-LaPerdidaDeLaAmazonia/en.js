import React from "react";
import { Helmet } from "react-helmet";
import Container from "components/blocks/Container";
import Title from "components/blocks/Title";
import Paragraph from "components/blocks/Paragraph";
import ExternalLink from "components/ExternalLink";
import FileLink from "components/FileLink";
import StoryMedia from "components/StoryMedia";
import FeaturedText from "components/blocks/FeaturedText";
import Table from "components/blocks/Table";
import Quote from "components/blocks/Quote";
import Note from "components/blocks/Note";
import LittleNote from "components/blocks/LittleNote";
import Board from "components/blocks/Board";
import RelatedNews from "components/RelatedNews";

export default () => (
  <article>
    <Helmet>
    <title>The loss of the Amazonia | Amazonia at the crossroads</title>
    </Helmet>
    <Container>
      <Title as="h2">The loss of the Amazonia</Title>
      <Note>
        <p>
          The Pan-Amazonia region is suffering serious impacts. With investments in infrastructure, there is degradation of forest ecosystems as a consequence of deforestation. But this is not the only parameter. Non-forest ecosystems experience loss of endemic species, replacement of their original vegetation by invasive species or by species resistant to fire. Or again, there is impoverishment caused by the establishment of unnatural savanna ecosystems, resulting from changes in the ecological processes linked to alterations in hydrological systems.
        </p>
      </Note>

      <Paragraph>
        <StoryMedia
          media={{
            id: "image-1",
            type: "image",
            data: {
              credits: "Fábio Garcia Moreira / ISA",
              src: require("photos/chapter4/FabioGarciaMoreiraISA_RS1908_vista-aerea-da-area-de-plantio-na-fazenda-sao-jose-do-tanguro-e-da-aldeia-tangurinho-Limite-sudeste-do-TIX.jpg")
            }
          }}> Indigenous territories and protected natural areas remain the main barriers that guarantee the protection of forest ecosystems
          </StoryMedia> 
          and the biological and cultural diversity found in these. In all, protected areas and indigenous territories represent 390 million hectares in Amazonia. This means that 46% of the 847 million hectares of Amazonian territory are occupied by protected natural areas or indigenous territories.
      </Paragraph>

      <Table>
        <table>
          <tr>
            <th>Protection category</th>
            <th>area (thousands of ha)</th>
            <th>% in relation to the Amazonia overall</th>
          </tr>
          <tr>
            <td>Protected Natural Areas</td>
            <td>198.456</td>
            <td>23,40%</td>
          </tr>
          <tr>
            <td>Indigenous Territories</td>
            <td>236.893</td>
            <td>28,00%</td>
          </tr>
          <tr>
            <th>Total</th>
            <th>389.876</th>
            <th>46,00%</th>
          </tr>
        </table>
      </Table>
      <LittleNote>
        Note: the overlap of ANPs with TIs represents 45.474 thousand hectares or 5.40% of the total. This amount is contained in the total of 389,876 hectares.
      </LittleNote>

      <Paragraph>
        Deforestation in indigenous territories and protected areas remains small in absolute terms and is concentrated in critical regions. However, there is an accelerating trend of biodiversity loss. This process is accompanied by an increase in violence against indigenous peoples. As a recent investigation of <ExternalLink href="https://colombiacheck.com/especiales/tierra-resistentes/es-co/" language="es">1,356 acts of threats and killings of Latin American environmental leaders showed, 56% of these episodes of violence (761 records) occurred against members of minorities</ExternalLink>, demonstrating that indigenous and Afro-descendant territories are especially vulnerable to such criminal action.
      </Paragraph>

      <Paragraph>
        According to the latest RAISG maps,
        <StoryMedia
          media={{
            id: "galery-1",
            type: "gallery",
            data: {
              items: [
                {
                  src: require("photos/chapter4/gallery-1/01_Pedro-MartinelliISA_sobrevoo_QueimadaEntornoParqueXingu_2003.jpg"),
                  credits: "Pedro Martinelli / ISA"
                },
                {
                  src: require("photos/chapter4/gallery-1/02_Vinicius-MendoncaAscomIbama_RS2441_1093_24_PqXingu.jpg"),
                  credits: "Vinícius Mendonca / Ascom / Ibama"
                },
                {
                  src: require("photos/chapter4/gallery-1/03_UiraFelipeGarcia_RS27318_100_5694_TIAwa_2006.jpg"),
                  credits: "Uira Felipe Garcia"
                },
                {
                  src: require("photos/chapter4/gallery-1/04_FelipeWerneckAscomIbama_RS17213_TIPiriti_Roraima_2018.jpg"),
                  credits: "Felipe Werneck / Ascom / Ibama"
                },
                {
                  src: require("photos/chapter4/gallery-1/05_JuanDoblasISA_RS11878_DSC_1339_TIItunaItata_2018.jpg"),
                  credits: "Juan Doblas / ISA"
                },
                {
                  src: require("photos/chapter4/gallery-1/06_Javier_Mesa_JAV_4165_PNCanaima.jpg"),
                  credits: "Javier Mesa"
                },
                {
                  src: require("photos/chapter4/gallery-1/07_Javier_Mesa_MG_5954_PNCanaima.jpg"),
                  credits: "Javier Mesa"
                }
              ]
            }
          }}
        > 10.3 million hectares of protected natural areas and indigenous territories were directly affected by deforestation between 2000 and 2015
        </StoryMedia>, 
        amounting to 12% of the Amazonia region.
      </Paragraph>

      <Paragraph>
      The results are a warning for the protection of the biome, as highlighted by a study by Thomas Lovejoy and Carlos Nobre published in the journal Science in 2018. According to the authors, <ExternalLink href="https://advances.sciencemag.org/content/4/2/eaat2340" language="en">the sum of the impacts of deforestation, climate change and forest fires will lead to an inflection point (or point of no return) for the Amazonia system.</ExternalLink>. That is, once deforestation reaches 20% to 25% of the biome there will be irreversible consequences for the non-forest ecosystems of southern and central Amazonia. This model considered the Amazonia basin without the inclusion of parts of the Orinoco, Araguaia and Tocantins basins and of the North Atlantic and coastal areas.
      </Paragraph>

      <Paragraph>
        In the Bolivian Amazonia, as has been happening for more than a decade, there is a development model based on land use conversion. That is, 
        <StoryMedia
          media={{
            id: "image-2",
            type: "image",
            data: {
              credits: "E. Sánchez / FAN",
              src: require("photos/chapter4/ESanchez_DSC9161.jpg")
            }
          }}> the country is transforming its high landscape and forestry potential into a model based on the expansion of agriculture and livestock
          </StoryMedia>, 
          unsustainable because of low incomes and poor economic returns.
      </Paragraph>

      <Paragraph>
        The analysis of the Fundación Amigos de la Naturaleza (FAN) for the period 2005-2018 shows that 88% of burnings and forest fires in Bolivia are concentrated in the Amazonia region, affecting more than 18.7 million hectares, with the ecosystems most impacted being natural grasslands, comprising savannas and cerrados (70%) and, to a lesser degree (30%), forest areas.
      </Paragraph>

      <FeaturedText>
        The 2010 events in Bolivia, where fires associated with drought affected more than 8.5 million hectares in the Amazonia Basin, were considered to have been the greatest in magnitude and impact.
      </FeaturedText>
      
      <Paragraph>
        Due to the lack of preventive measures,
        <StoryMedia
          media={{
            id: "image-3",
            type: "image",
            data: {
              credits: "C. Pinto / FAN",
              src: require("photos/chapter4/01_DSC_0373.jpg")
            }
          }}> fires started to clear plots for crops or livestock tend to get out of control
          </StoryMedia> 
          and affect, on average, more than 4 million hectares. In addition to human action, the intensification and spread of burning and wildfires are closely related to extreme climatic conditions, such as drought.
      </Paragraph>

      <Paragraph>
        The overview of the Colombian Amazonia reveals high deforestation, an increase in illicit crops and the presence of forest fires. In addition, in the National Development Plan, the current government has decided that there will be no change in its deforestation goal relative to the previous government's four-year administration. That is to say, the destruction of 215,000 hectares of forest per year will be allowed at the national level, <ExternalLink href="https://www.elespectador.com/noticias/medio-ambiente/las-cifras-de-deforestacion-para-la-amazonia-colombiana-que-no-convencen-articulo-839968" language="es">of which 72% will be from the Amazonia region</ExternalLink>. hThere is thus a green light for economic development projects previously not allowed in this region of Colombia.
      </Paragraph>

      <Paragraph>
        In Brazil,
        <StoryMedia
          media={{
            id: "image-4",
            type: "image",
            data: {
              credits: "Lilo Clareto / ISA",
              src: require("photos/chapter4/LiloClaretoISA_RS26041_Castanha-3548.jpg")
            }
          }}> during the electoral period (August to November 2018), deforestation in the Amazonia doubled compared to the same period of the previous year
          </StoryMedia>, 
          reaching 1.4 million hectares of forest loss. Specifically, deforestation detected in November 2018 was four times greater than in November 2017. This scenario of threats and intensification of deforestation continued after the elections. In January 2019, the Amazonia region (Amazônia Legal) lost 10,800 hectares of forest, an increase of 54% over the same period the previous year, according to data released by the Instituto do Homem e Meio Ambiente da Amazônia (Imazon). Of this deforestation recorded in January 2019, 12% occurred in indigenous territories and 5% in protected areas.
      </Paragraph>

      <Paragraph>
        <strong className='regular-title'>The search for justice</strong>
      </Paragraph>

      <FeaturedText>
        In light of the worrying picture of the threats and pressures they face, the ancestral communities that traditionally occupy the Pan-Amazonia region are 
        <StoryMedia
          media={{
            id: "image-5",
            type: "image",
            data: {
              credits: "Priscila Tapajowara",
              src: require("photos/chapter4/01_PriscilaTapajowara_RS34624_20190425_120415-01.jpg")
            }
          }}> fighting for their rights to be recognized and respected
          </StoryMedia>.
      </FeaturedText>

      <Paragraph>
        Indigenous peoples are not immune from the polarized political reality that has developed in Venezuela since 2002. Despite this situation however, the indigenous movement has managed to position itself in a series of openings in political participation for the self-demarcation of its territories, the consolidation of a legal framework of autonomy and the defence of indigenous rights, as well as cultural self-determination. Notwithstanding these achievements, in 2018 many public policies lost their initial impulse, confirming the paralysis of processes of demarcation of indigenous lands and habitats.
      </Paragraph>

      <Paragraph>
        In Ecuador, the exploration, transport and refining of oil represented in the past the "ethnocide of ancestral groups such as the Tetete, forced displacement and acculturation through forced assimilation of other peoples belonging to linguistic groups such as Tukano (Siona Sequoias), Barbacoa (Cofán) and Waorani" (
          <FileLink
            href={require("documents/chapter4/Amazonia_bajo_presion.pdf")}
            format="pdf"
            size="19.3MB"
          > Amazonia under Pressure / RAISG, 2012
          </FileLink>).
      </Paragraph>

      <Paragraph>
        This
        <StoryMedia
          media={{
            id: "galery-2",
            type: "gallery",
            data: {
              items: [
                {
                  src: require("photos/chapter4/gallery-2/O1_AFP_CasoWaorani.jpg"),
                  credits: "AFP"
                },
                {
                  src: require("photos/chapter4/gallery-2/O2_AFP_CasoWaorani.jpg"),
                  credits: "AFP"
                },
                {
                  src: require("photos/chapter4/gallery-2/O3_AFP_CasoWaorani.jpg"),
                  credits: "AFP"
                }
              ]
            }
          }}
          > year the Waorani have filed a constitutional complaint to halt a government plan to explore oil in the Amazonia
        </StoryMedia>, 
        by which they intend to keep around 180,000 hectares of their ancestral territory in the northern part of Pastaza free of oil-related activities. They demand recognition of their rights and compensation for damages suffered since 2012, when the State offered part of their land for oil extraction. The lawsuit resulted in a ruling favourable to the communities; one that can act as a legal precedent in favour of free and informed prior consultation and self-determination of peoples.
      </Paragraph>

      <Paragraph>
        Another decision in Ecuador in October 2018 withdrew support for 52 mining concessions granted by the state in the province of Sucumbios, as the Provincial Court accepted evidence of environmental impacts offered as part of a plea for protection of their resources submitted by the A'i Cofán Sinangoe community, which accuses the government of failing to consult and of endangering their rights to water, the environment and their territory.
      </Paragraph>

      <Paragraph>
        In Peru, the Awajún-Wampis demand state intervention to stop the illegal gold mining that is devastating the Cordillera del Condor, ancestral territory of these peoples and for which they had agreed in 2005 to the creation of a National Park. By a unilateral decision of the State, part of this territory was excluded from the national park and granted for mining. Subsequently, the licenses were revoked, but miners continued to operate illegally.
      </Paragraph>

      <Paragraph>
        In respect of the frequent oil spills that have occurred in the Peruvian Amazonia in recent years, which have a direct impact on the water sources and food security of the local population, which mostly comprises indigenous communities, they are demanding that the State honour its commitment to provide environmental remediation, potable water services and specialized medical care.
      </Paragraph>

      <Paragraph>
        <strong className='regular-title'>Economic model</strong>
      </Paragraph>

      <Paragraph>
        In the Amazonian countries,
        <StoryMedia
          media={{
            id: "image-6",
            type: "image",
            data: {
              credits: "Lundin Gold",
              src: require("photos/chapter4/LundinGold_Fruta_del_Norte01.jpg")
            }
          }}> most foreign investments are devoted to extractive activities
          </StoryMedia>, 
          thereby confirming that the integration of Amazonian economies into the global market will occur through trade in natural resources and high dependence on commodity price fluctuations.
      </Paragraph>

      <Paragraph>
        One example of this is Ecuador, where the Central Bank recorded a total of
          <FileLink
            href={require("documents/chapter4/Mineria_gran_escala_El Comercio_Ecuador.pdf")}
            format="pdf"
            size="873KB"
            > US$ 1.4 billion in foreign direct investment in 2018, of which 53% went to large-scale mining projects
          </FileLink>.
          However, these extractive projects are rejected by the population. In 2018 Lenin Moreno's government held a referendum on the expansion of protection of the Yasuni National Park (which, together with the Waorani territory and the Intangible Zone, home to indigenous peoples in voluntary isolation, form part of the Yasuni Biosphere Reserve); 67.31% of voters agreed to increase the intangible area by at least 50,000 hectares and to reduce the area of ​​oil exploration in the Yasuni National Park from the 1030 hectares authorized by the National Assembly to 300 hectares.
      </Paragraph>

      <Paragraph>
        The evidence provided in this report reveals that the environmental impacts of social and economic development based on extraction and ecosystem conversion are being underestimated, as in the long run the damage is more costly than the revenues that countries receive.
        <StoryMedia
          media={{
            id: "image-7",
            type: "image",
            data: {
              credits: "Leonardo Milano",
              src: require("photos/chapter4/_LeonardoMilano_RS34830__MG_5405.jpg")
            }
          }}> Governments, both locally and nationally, are weakening environmental protection agencies
          </StoryMedia>.
          In addition, recent episodes of widespread corruption in the infrastructure sector in Latin America have created a situation of almost total lack of commitment by countries to an agenda for sustainable development.
      </Paragraph>

      <Paragraph>
        In Brazil, the proposals of the new government which took office in 2019 tend to aggravate the situation because its policies on indigenous peoples and their lands are similar to those of the military dictatorship that ruled the country between 1964 and 1985, when thousands of Indians were killed and thousands more were driven from their lands as a result of major infrastructure projects. These proposals imply cuts in government funding available to meet indigenous demands, policy reversals and reduced environmental control operations, freezing of demarcations by the federal government, and even several demonstrations in favour of opening up mining territories. Infrastructure projects implemented in the Amazonia during the last decade, under the argument of maintaining the energy supply and stimulating the Brazilian economy, are examples of works planned in accordance with sectoral interests to the detriment of local needs.
      </Paragraph>

      <Paragraph>
        The Amazonia is at a crossroads. The nine countries that comprise the region have the most biodiverse tropical forest and the largest freshwater reserves on the planet. But its rulers, government policies, and economic interests are driving it to exhaustion. The last refuges for unique species are in protected areas and indigenous territories. Scientists are already talking about the imminence of a point of no return, where the contributions of nature to human well-being - water, clean air, climate regulation, natural resources - will no longer be provided by the biome. Are we about to reach this point?
      </Paragraph>
      <RelatedNews
        title={"The map, with updated information of 2018, presents a classification of indigenous territories and protected natural areas as they affect roads, hydroelectric, mining, burning, deforestation, oil and gas, which are important causes of the transformation of the Amazonian landscape happened in the last decades."}
        imageUrl={require("images/read-more.jpg")}
        href={"https://www.amazoniasocioambiental.org/es/publicacion/presiones-y-amenazas-sobre-las-areas-protegidas-y-los-territorios-indigenas-de-la-amazonia-2/"}
      />
    </Container>
  </article>
);
