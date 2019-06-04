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
    <title>A perda da Amazônia | Amazonía en la encrucijada</title>
    </Helmet>
    <Container>
      <Title as="h2">A perda da Amazônia</Title>
      <Note>
        <p>
          A Pan-Amazônia está sob forte impacto. Com os investimentos em infraestrutura, há uma degradação nos ecossistemas florestais, consequência do desmatamento. Mas este não é o único parâmetro. Os ecossistemas não-florestais experimentam perda de espécies endêmicas, substituição de sua vegetação original por espécies invasoras ou espécies resistentes ao fogo. Ou ainda, há um empobrecimento com o estabelecimento de ambientes de savanas não naturais, graças a mudanças nos processos ecológicos ligados a alterações nos sistemas hidrológicos.
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
          }}> Territórios indígenas e áreas naturais protegidas continuam sendo as principais barreiras que garantem a proteção dos ecossistemas florestais
          </StoryMedia>, 
          a diversidade biológica e cultural dos povos que os habitam. Ao todo, áreas protegidas e territórios indígenas representam 390 milhões de hectares na Amazônia. Isso significa que 46% dos 847 milhões de hectares do território amazônico são ocupados por áreas naturais protegidas ou territórios indígenas.
      </Paragraph>

      <Table>
        <table>
          <tr>
            <th>Categoria de proteção</th>
            <th>área (mil ha)</th>
            <th>% em relação a Amazônia general</th>
          </tr>
          <tr>
            <td>Áreas Naturais Protegidas</td>
            <td>198.456</td>
            <td>23,40%</td>
          </tr>
          <tr>
            <td>Territórios Indígenas</td>
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
        Nota: a sobreposição de ANPs com TIs representa 45,474 mil hectares ou 5,40% do total. Esse valor está contido do total de 389.876 mil hectares.
      </LittleNote>

      <Paragraph>
        O desmatamento nos territórios indígenas e áreas protegidas permanece pequeno em termos absolutos e está concentrado em regiões críticas. No entanto, há uma tendência acelerada de perda de biodiversidade. Este processo é acompanhado pelo aumento da violência contra os povos indígenas. Como mostrou recentemente uma investigação sobre <ExternalLink href="https://colombiacheck.com/especiales/tierra-resistentes/es-co/" language="es">1.356 atos de ameaças e assassinatos de líderes ambientais da América Latina, 56% desses episódios de violência (761 registros) ocorreram contra uma minoria</ExternalLink>, demonstrando que os territórios indígenas e afro-descendentes são especialmente vulneráveis ​​a esses interesses criminosos.
      </Paragraph>

      <Paragraph>
        De acordo com os novos mapas da RAISG,
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
        > 10,3 milhões de hectares de áreas naturais protegidas e territórios indígenas foram diretamente afetados pelo desmatamento entre 2000 e 2015
        </StoryMedia>, 
        representando 12% da região amazônica.
      </Paragraph>

      <Paragraph>
        Os resultados são um alerta para a proteção do bioma, como destaca um estudo de Thomas Lovejoy e Carlos Nobre publicado em 2018 na revista Science. Segundo eles, <ExternalLink href="https://advances.sciencemag.org/content/4/2/eaat2340" language="en">a soma dos impactos do desmatamento, mudanças climáticas e incêndios florestais levará a um ponto de inflexão (ou ponto de não retorno) ao sistema amazônico</ExternalLink>. Ou seja, assim que o desmatamento atingir de 20% a 25% do bioma, haverá consequências irreversíveis aos ecossistemas não-florestais do sul e centro da Amazônia. Este modelo considerou a bacia amazônica sem a inclusão de partes das bacias do Orinoco, do Araguaia, Tocantins, do Atlântico Norte e áreas costeiras.
      </Paragraph>

      <Paragraph>
        Na Amazônia boliviana, como vem acontecendo há mais de uma década, existe uma visão de desenvolvimento voltada para a conversão do uso da terra. Ou seja, o país
        <StoryMedia
          media={{
            id: "image-2",
            type: "image",
            data: {
              credits: "E. Sánchez / FAN",
              src: require("photos/chapter4/ESanchez_DSC9161.jpg")
            }
          }}> está transformando seu alto potencial paisagístico e florestal em um modelo baseado na expansão da agricultura 
          </StoryMedia>
          e pecuária insustentável por causa de baixos rendimentos e pobres retornos econômicos.
      </Paragraph>

      <Paragraph>
        As análises da Fundação Amigos da Natureza (FAN), no período 2005-2018 indicam que 88% das queimadas e incêndios florestais na Bolívia estão concentrados na região amazônica, afetando mais de 18,7 milhões de hectares, onde os ecossistemas mais impactos são pastagens naturais (70%), constituídas por savanas e cerrados, e em menor grau (30%) em áreas florestais.
      </Paragraph>

      <FeaturedText>
        Os eventos de 2010 foram considerados na Bolívia como os de maior magnitude e impacto, onde os incêndios associados à seca afetaram mais de 8,5 milhões de hectares na bacia amazônica.
      </FeaturedText>
      
      <Paragraph>
        Devido à falta de medidas preventivas,
        <StoryMedia
          media={{
            id: "image-3",
            type: "image",
            data: {
              credits: "C. Pinto / FAN",
              src: require("photos/chapter4/01_DSC_0373.jpg")
            }
          }}> incêndios iniciados para a abertura de lotes destinados a plantações ou criação de gado tendem a ficar fora de controle 
          </StoryMedia>
          e afetam, anualmente, em média, mais de 4 milhões de hectares. Além da ação humana, a intensificação e extensão de queimadas e incêndios estão intimamente relacionadas a condições climáticas extremas, como secas.
      </Paragraph>

      <Paragraph>
        Já o panorama da Amazônia colombiana mostra alto desmatamento, aumento de cultivos ilícitos e presença de incêndios florestais. Além disso, no Plano Nacional de Desenvolvimento, o atual governo definiu que não haverá variação na meta de desmatamento com relação ao período de quatro anos do governo anterior. Ou seja, a destruição de 215.000 hectares de floresta por ano serão permitidas a nível nacional, <ExternalLink href="https://www.elespectador.com/noticias/medio-ambiente/las-cifras-de-deforestacion-para-la-amazonia-colombiana-que-no-convencen-articulo-839968" language="es">dos quais 72% são da Amazônia</ExternalLink>. Assim, se dá luz verde para projetos de desenvolvimento econômico que anteriormente não eram permitidos nesta região colombiana.
      </Paragraph>

      <Paragraph>
        No Brasil,
        <StoryMedia
          media={{
            id: "image-4",
            type: "image",
            data: {
              credits: "Lilo Clareto / ISA",
              src: require("photos/chapter4/LiloClaretoISA_RS26041_Castanha-3548.jpg")
            }
          }}> durante o período eleitoral (agosto a novembro de 2018), o desmatamento na Amazônia dobrou em relação ao mesmo período do ano anterior
          </StoryMedia>,
          atingindo 1,4 milhão de hectares de florestas perdidas. Especificamente, o desmatamento detectado no mês de novembro de 2018 foi quatro vezes maior que em novembro de 2017. Esse cenário de ameaça e intensificação do desmatamento continuou após as eleições. Em janeiro de 2019, a Amazônia Legal perdeu 10.800 hectares de floresta, um aumento de 54% em relação ao mesmo período do ano passado, segundo dados divulgados pelo Instituto do Homem e Meio Ambiente da Amazônia (Imazon). Desse desmatamento registrado em janeiro de 2019, 12% ocorreram em territórios indígenas e 5% em unidades de conservação.
      </Paragraph>

      <Paragraph>
        <strong className='regular-title'>A busca por justiça</strong>
      </Paragraph>

      <FeaturedText>
        Diante do quadro preocupante das ameaças e pressões que enfrentam, as comunidades ancestrais e que tradicionalmente ocupam a região Pan-Amazônica 
        <StoryMedia
          media={{
            id: "image-5",
            type: "image",
            data: {
              credits: "Priscila Tapajowara",
              src: require("photos/chapter4/01_PriscilaTapajowara_RS34624_20190425_120415-01.jpg")
            }
          }}> lutam para que seus direitos sejam reconhecidos e respeitados
          </StoryMedia>.
      </FeaturedText>

      <Paragraph>
        Os povos indígenas não escapam à realidade política polarizada que se desenvolveu na Venezuela desde 2002. No entanto, apesar desta situação, o movimento indígena conseguiu posicionar-se em uma série de espaços de participação política para a auto-demarcação de seus territórios , a consolidação de um marco legal de autonomia e a defesa de seus direitos, bem como sua autodeterminação cultural. Apesar das conquistas, em 2018 muitas políticas públicas diminuíram seu impulso inicial, o que evidencia a paralisia do processo de demarcação de terras e habitats indígenas.
      </Paragraph>

      <Paragraph>
      No Equador, a exploração, transporte e refino de petróleo representou no passado o "etnocidio de grupos ancestrais como os tetete, deslocamento forçado e aculturamento através assimilação forçada de outros povos que pertencem a grupos linguísticos como tukano (siona sequóias), barbacoa (cofán) e waorani" (
          <FileLink
            href={require("documents/chapter4/Amazonia_bajo_presion.pdf")}
            format="pdf"
            size="19.3MB"
          > Amazônia sob pressão / RAISG, 2012
          </FileLink>).
      </Paragraph>

      <Paragraph>
        Os
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
          > Waorani estabeleceram uma queixa constitucional este ano para suspender um plano do governo para explorar petróleo na Amazônia
        </StoryMedia>, 
        com o qual pretendem manter livre de atividades petroleira em torno de 180.000 hectares de seu território ancestral na parte norte de Pastaza. Eles pedem que seus direitos sejam reconhecidos e compensados ​​pelos danos sofridos desde 2012, quando o Estado ofereceu parte de suas terras para a atividade extrativa. A ação movida conseguiu uma decisão favorável para as comunidades e pode estabelecer um precedente legal a favor da consulta prévia livre e informada e à autodeterminação dos povos.
      </Paragraph>

      <Paragraph>
        Outra decisão no Equador, ocorrida em outubro de 2018, deixou sem apoio 52 concessões de mineração concedidas pelo Estado na província de Sucumbios, onde o Tribunal Provincial aceitou evidências dos impactos ambientais através da ação por proteção dos recursos apresentada pela comunidade A´i Cofán Sinangoe, que acusa o governo de não realizar consulta e ameaçar o direito à água, ao meio ambiente e ao território.
      </Paragraph>

      <Paragraph>
        No Peru, os Awajún-Wampis exigem a intervenção do Estado para interromper a mineração ilegal de ouro que está devastando a Cordilheira do Condor, território ancestral desses povos e para o qual tinham consentido, em 2005, a criação de um Parque Nacional. Por decisão unilateral do Estado, parte desse território foi excluída do parque nacional e concedida para mineração. Posteriormente, as licenças foram revogadas, mas os garimpeiros continuam a operar ilegalmente.
      </Paragraph>

      <Paragraph>
        Em relação aos derramamentos de óleo frequentes que ocorreram na Amazônia peruana nos últimos anos, que têm um impacto direto sobre as fontes de água e a segurança alimentar da população local, na sua maioria composta de comunidades indígenas, eles estão reivindicando que o Estado atenda seu compromisso de fornecer remediação ambiental, serviços de água potável e atendimento médico especializado.
      </Paragraph>

      <Paragraph>
        <strong className='regular-title'>Modelo econômico</strong>
      </Paragraph>

      <Paragraph>
        Nos países amazônicos,
        <StoryMedia
          media={{
            id: "image-6",
            type: "image",
            data: {
              credits: "Lundin Gold",
              src: require("photos/chapter4/LundinGold_Fruta_del_Norte01.jpg")
            }
          }}> a maior parte dos investimentos estrangeiros são dedicados às atividades da indústria extractiva
          </StoryMedia>
          e confirmam que a integração das economias da Amazônia para o mercado global ocorre por meio de comércio de recursos naturais e de alta dependência de flutuação dos preços commodities.
      </Paragraph>

      <Paragraph>
        Um exemplo disso é o caso do Equador, onde o Banco Central registrou um total de
          <FileLink
            href={require("documents/chapter4/Mineria_gran_escala_El Comercio_Ecuador.pdf")}
            format="pdf"
            size="873KB"
            > US $ 1,4 bilhão em investimentos estrangeiros diretos em 2018, dos quais 53% foram para projetos de mineração em grande escala
          </FileLink>.
        No entanto, esses projetos extrativos são rejeitados pela população. Em 2018, o governo de Lenin Moreno submeteu a referendo a expansão da protecção do Parque Nacional Yasuni (que, juntamente com o território Waorani e à Zona Intangível, onde vivem povos isolados, fazem parte da Reserva da Biosfera Yasuni ); 67,31% dos votantes concordaram em aumentar a área intangível em pelo menos 50.000 hectares e reduzir a área de exploração de petróleo autorizado pela Assembleia Nacional no Parque Nacional Yasuni de 1030 hectares para 300 hectares.
      </Paragraph>

      <Paragraph>
        As evidências apresentadas neste relatório revelam que os impactos ambientais do desenvolvimento social e econômico baseado na extração e conversão de ecossistemas estão sendo subdimensionados, pois no longo prazo há um dano mais caro do que as receitas que recebem os países.
        <StoryMedia
          media={{
            id: "image-7",
            type: "image",
            data: {
              credits: "Leonardo Milano",
              src: require("photos/chapter4/_LeonardoMilano_RS34830__MG_5405.jpg")
            }
          }}> Os governos, tanto em nível nacional como localmente, estão enfraquecendo os órgãos de proteção ambiental
          </StoryMedia>.
        Além disso, episódios recentes de corrupção generalizada no setor de infraestrutura na América Latina, criaram uma situação de quase total falta de compromisso dos países com uma agenda para o desenvolvimento sustentável.
      </Paragraph>

      <Paragraph>
        No Brasil, as propostas do novo governo, que tomou posse em 2019, vêm a agravar a situação, porque as suas políticas sobre os povos indígenas e suas terras são semelhantes aos da ditadura militar que governou o país entre 1964 e 1985, quando milhares de indígenas foram mortos e outros milhares foram expulsos de suas terras como resultado de grandes projetos de infraestrutura. Essas propostas implicam cortes no financiamento do governo para atender às demandas indígenas, retrocessos e redução de operações de controle ambiental, congelamento de demarcações pelo governo federal e até mesmo várias manifestações em favor da abertura de territórios à mineração. Os projetos de infraestrutura implementados na Amazônia durante a última década, com o argumento de manter o suprimento de energia e movimentar a economia brasileira, são exemplos de obras planejadas de acordo com o interesse setorial em detrimento das necessidades locais.
      </Paragraph>

      <Paragraph>
        A Amazônia está em uma encruzilhada. Os nove países que a compõem têm a floresta tropical mais biodiversa e a maior reserva de água doce do planeta. Mas seus governantes, políticas estatais e interesses econômicos a levam à exaustão. Os últimos refúgios para espécies únicas estão em áreas protegidas e territórios indígenas. Os cientistas já falam sobre a iminência de um ponto sem retorno, onde as contribuições da natureza para o bem-estar humano - água, ar limpo, regulação climática, recursos naturais - não serão mais fornecidas pelo bioma. Chegaremos a esse extremo?
      </Paragraph>
      <RelatedNews
        sectionTitle={"Leia também"}
        title={"Pressões e ameaças nas áreas protegidas e nos territórios indígenas da Amazônia"}
        subtitle={"O mapa, com informações atualizadas de 2018, apresenta uma classificação de territórios indígenas e áreas naturais protegidas, pois afetam estradas, hidrelétricas, mineração, queimadas, desmatamento, petróleo e gás, que são importantes causas da transformação da paisagem amazônica. aconteceu nas últimas décadas."}
        imageUrl={require("images/read-more.jpg")}
        href={"https://www.amazoniasocioambiental.org/es/publicacion/presiones-y-amenazas-sobre-las-areas-protegidas-y-los-territorios-indigenas-de-la-amazonia-2/"}
      />
    </Container>
  </article>
);
