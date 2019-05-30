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

export default () => (
  <article>
    <Helmet>
    <title>La pérdida de la Amazonía | Amazonía en la encrucijada</title>
    </Helmet>
    <Container>
      <Title as="h2">La pérdida de la Amazonía</Title>
      <Note>
        <p>
          La Pan Amazonía está siendo impactada. Con las inversiones en infraestructura, se advierte una degradación en los ecosistemas boscosos, a consecuencia de  la deforestación, pero no es el único parámetro. Los restantes ecosistemas no boscosos experimentan pérdida de especies características, sustitución de su vegetación original por especies invasoras o especies resistentes al fuego y no típicas. O bien, por su empobrecimiento hacia sistemas sabanizados no naturales, o por cambios en procesos ecológicos ligados a cambios en los sistemas hidrológicos. 
        </p>
      </Note>

      <Paragraph>
        En la Panamazonia,
        <StoryMedia
          media={{
            id: "image-1",
            type: "image",
            data: {
              credits: "Fábio Garcia Moreira / ISA",
              src: require("photos/chapter4/FabioGarciaMoreiraISA_RS1908_vista-aerea-da-area-de-plantio-na-fazenda-sao-jose-do-tanguro-e-da-aldeia-tangurinho-Limite-sudeste-do-TIX.jpg")
            }
          }}> los territorios indígenas y las áreas naturales protegidas continúan siendo las principales barreras que  aseguran  la protección de los ecosistemas boscosos
          </StoryMedia>, 
          la diversidad biológica y cultural que allí habita. En conjunto, las áreas protegidas y los  territorios indígenas representan 390 millones de hectáreas en la Amazonía. Esto quiere decir que el 46% de los 847 millones de hectáreas del territorio amazónico está ocupado por áreas naturales protegidas o territorios indígenas.
      </Paragraph>

      <Table>
        <table>
          <tr>
            <th>Figura de protección</th>
            <th>área (mil ha)</th>
            <th>% en relación a la Amazonía general</th>
          </tr>
          <tr>
            <td>Áreas Naturales Protegidas</td>
            <td>198.456</td>
            <td>23,40%</td>
          </tr>
          <tr>
            <td>Territorios Indígenas</td>
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
        Nota: Superposición de ANP con TI representa 45.474 mil hectáreas o 5,40% del total. Este valor se sustrae del ‘Total’ de 389.876 mil hectáreas.
      </LittleNote>

      <Paragraph>
        La deforestación en el interior de estos territorios y áreas protegidas sigue siendo pequeña en términos absolutos y se encuentra concentrada en regiones críticas.  No obstante, hay una tendencia a la aceleración de la pérdida de biodiversidad. Este proceso viene acompañado de una creciente violencia contra los pueblos indígenas. Como mostró recientemente una investigación acerca de <ExternalLink href="https://colombiacheck.com/especiales/tierra-resistentes/es-co/" language="es">1.356 hechos de amenazas y asesinatos de líderes en América Latina, 56% de esos episodios de violencia (761 registros) pertenece a alguna minoría étnica</ExternalLink>, demostrando que los territorios indígenas y afrodescendientes son especialmente vulnerables a estos intereses criminales.
      </Paragraph>

      <Paragraph>
        De acuerdo con los nuevos mapas de RAISG,
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
        > 10,3 millones de hectáreas de áreas naturales protegidas y territorios indígenas fueron directamente afectadas por la deforestación entre 2000 y 2015
        </StoryMedia>, 
        lo que representa un 12% de la región amazónica.
      </Paragraph>

      <Paragraph>
        Los resultados indican una alerta para la protección de la Amazonía, pues un reciente estudio de Thomas Lovejoy y Carlos Nobre publicado en 2018 en la revista Science resalta que <ExternalLink href="https://advances.sciencemag.org/content/4/2/eaat2340" language="en">la suma de impactos de la deforestación, el  cambio climático y los incendios forestales llevará a un punto de inflexión (o punto de no retorno) al sistema amazónico</ExternalLink>. Es decir, que tan pronto como sea alcanzado el 20% a 25% de la deforestación habrán consecuencias irreversibles hacia ecosistemas no forestales en las regiones este, sur y central de la Amazonía. Este modelo ha considerado la cuenca amazónica sin la inclusión de las cuencas de partes de los ríos Orinoco Araguaia, Tocantins y las cuencas del Atlántico Norte y zonas costeras.
      </Paragraph>

      <Paragraph>
        En la Amazonía boliviana, como viene ocurriendo desde hace más de una década, hay una visión de desarrollo enfocada en la conversión de uso del suelo. Es decir, se
        <StoryMedia
          media={{
            id: "image-2",
            type: "image",
            data: {
              credits: "E. Sánchez / FAN",
              src: require("photos/chapter4/ESanchez_DSC9161.jpg")
            }
          }}> está transformando su paisaje y alto potencial forestal hacia una economía basada en la ampliación de la agricultura
          </StoryMedia>
        y ganadería extensiva , poco sostenible por sus bajos rendimientos de producción y escasos réditos económicos para el país.
      </Paragraph>

      <Paragraph>
        Análisis realizados por la Fundación Amigos de la Naturaleza (FAN) en el período 2005–2018 indican que el 88% de las quemas e incendios forestales de Bolivia se concentran en la región Amazónica , afectando a más de 18,7 millones de hectáreas, donde los ecosistemas con mayor impacto son pastizales naturales (70%) comprendidos por sabanas y cerrados, y en menor proporción (30%) ocurren en áreas boscosas.
      </Paragraph>

      <FeaturedText>
        El año 2010 fue considerado en Bolivia como el de mayor magnitud e impacto, donde el fuego asociado con la sequía afectó a más de 8,5 millones de hectáreas en la cuenca amazónica.
      </FeaturedText>
      
      <Paragraph>
        Debido a la falta de medidas de prevención,
        <StoryMedia
          media={{
            id: "image-3",
            type: "image",
            data: {
              credits: "C. Pinto / FAN",
              src: require("photos/chapter4/01_DSC_0373.jpg")
            }
          }}> el fuego iniciado para habilitar una parcela destinada a la siembra de cultivos o el establecimiento de pastos para ganadería suele descontrolarse 
          </StoryMedia>,
        y afectar anualmente, en promedio, más de 4 millones de hectáreas. Por otro lado, la intensificación y magnitud de quemas e incendios, además de la acción humana, están estrechamente relacionadas con las condiciones climáticas extremas como las sequías.
      </Paragraph>

      <Paragraph>
        El panorama de la Amazonía colombiana muestra una alta deforestación, el aumento de cultivos ilícitos y la presencia de incendios forestales. Además, en el Plan Nacional de Desarrollo, el presente gobierno definió que habrá un 0% de variación en la meta de deforestación respecto al cuatrienio del gobierno pasado. Es decir, se permitirá la destrucción de 215.000 mil ha de bosque al año a nivel nacional, <ExternalLink href="https://www.elespectador.com/noticias/medio-ambiente/las-cifras-de-deforestacion-para-la-amazonia-colombiana-que-no-convencen-articulo-839968" language="es">de los cuales, el 72% son de la Amazonía colombiana</ExternalLink>, hasta llegar al punto de no retorno, lo que da luz verde para proyectos de desarrollo económico que antes no  eran permitidos en esta región colombiana.
      </Paragraph>

      <Paragraph>
        En Brasil,
        <StoryMedia
          media={{
            id: "image-4",
            type: "image",
            data: {
              credits: "Lilo Clareto / ISA",
              src: require("photos/chapter4/LiloClaretoISA_RS26041_Castanha-3548.jpg")
            }
          }}> durante el período electoral (agosto a noviembre de 2018), la deforestación en la Amazonía se duplicó con relación al mismo período del año anterior
          </StoryMedia>,
          llegando a 1.4 millones de hectáreas de bosques perdidos. En concreto, la deforestación detectada en el mes de noviembre de 2018 fue cuatro veces mayor que en noviembre de 2017. Este escenario de amenaza e intensificación de la deforestación siguió después de las elecciones. En enero de 2019 la Amazonía Legal perdió 10.800 hectáreas de bosques, un aumento del 54% en comparación al mismo período del año anterior según los datos divulgados por el Instituto do Homem e Meio Ambiente da Amazônia (Imazon). De esta deforestación registrada en enero de 2019, el 12% ocurrió en áreas protegidas, territorios indígenas y el 5% en unidades de conservación.
      </Paragraph>

      <Paragraph>
        <strong className='regular-title'>La búsqueda de Justicia</strong>
      </Paragraph>

      <FeaturedText>
        Ante el cuadro preocupante de las amenazas y presiones que enfrenta, los pueblos ancestrales y las comunidades que tradicionalmente ocupan la región Pan Amazónica 
        <StoryMedia
          media={{
            id: "image-5",
            type: "image",
            data: {
              credits: "Priscila Tapajowara",
              src: require("photos/chapter4/01_PriscilaTapajowara_RS34624_20190425_120415-01.jpg")
            }
          }}> luchan para que sus derechos sean reconocidos y respetados
          </StoryMedia>.
      </FeaturedText>

      <Paragraph>
        Los pueblos indígenas no escapan a la realidad política polarizada que se viene desarrollando en Venezuela desde el año 2002. Sin embargo, y a pesar de tal situación, el movimiento indígena ha logrado posicionarse en una serie de espacios políticos con participación para la autodemarcación de sus territorios, la consolidación de un marco jurídico de autonomía para el desarrollo y la defensa de sus derechos, así como su autodeterminación cultural. A pesar de los logros alcanzados, para 2018 muchas de las políticas públicas mermaron su impulso inicial, donde destaca la paralización del proceso de demarcación de hábitats y tierras indígenas.
      </Paragraph>

      <Paragraph>
        En Ecuador,  la exploración, explotación, transporte y refinación de crudo amazónico representó en épocas pasadas “el etnocidio de grupos ancestrales como los tetete, el desplazamiento forzado y la aculturación vía asimilación forzada de otros pueblos pertenecientes a grupos lingüísticos como el tukano (sionas y secoyas), barbacoano (cofán) y waorani” (
          <FileLink
            href={require("documents/chapter4/Amazonia_bajo_presion.pdf")}
            format="pdf"
            size="19.3MB"
          > Amazonía bajo presión / RAISG, 2012
          </FileLink>).
      </Paragraph>

      <Paragraph>
        El
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
          > pueblo waorani instauró una demanda constitucional en este año para suspender un plan gubernamental de licitación petrolera en la Amazonía
        </StoryMedia>, 
        con la que busca mantener libre de actividades petroleras cerca de 180.000 hectáreas de territorio ancestral waorani en la parte norte de Pastaza. Piden que sus derechos sean reconocidos y se les compense por los daños sufridos desde el 2012 cuando el Estado licitó parte de su territorio para la actividad petrolera. La demanda presentada logró un fallo favorable para las comunidades waorani y podría sentar un precedente jurídico a favor de la consulta previa libre e informada y a la autodeterminación de los pueblos.
      </Paragraph>

      <Paragraph>
        Otro hecho precedente en Ecuador, suscitado en octubre de 2018, dejó sin sustento 52 concesiones mineras otorgadas por el Estado en la provincia de Sucumbíos, en donde la Corte Provincial aceptó pruebas del impacto ambiental a través de un recurso de acción de protección presentado por la comunidad A´i Cofán de Sinangoe, que acusaba al gobierno de no haber consultado a la comunidad y de amenazar el derecho al agua y al medio ambiente, al territorio, a la consulta previa y a las comunidades tanto indígenas como aledañas.
      </Paragraph>

      <Paragraph>
        En Perú, los awajún-wampis reclaman la intervención del Estado para detener la minería ilegal de oro, la misma que está devastando la Cordillera del Cóndor, territorio ancestral de estos pueblos y sobre el cual habían dado su consentimiento en 2005 para la creación de un parque nacional. Por decisión unilateral del Estado, parte de este territorio fue excluido del parque nacional y otorgado en concesión para minería. Posteriormente, los permisos fueron revocados, pero los mineros artesanales siguen operando en forma ilegal.
      </Paragraph>

      <Paragraph>
        Con respecto a los frecuentes derrames de petróleo ocurridos en la Amazonía peruana en los últimos años, los cuales tienen un impacto directo sobre las fuentes de agua y alimentos de la población local, constituida mayormente por comunidades indígenas, estas vienen reclamando al Estado que cumpla con su compromiso de brindar remediación ambiental, servicios de agua potable y atención médica especializada. 
      </Paragraph>

      <Paragraph>
        <strong className='regular-title'>Modelo Económico</strong>
      </Paragraph>

      <Paragraph>
        En los países amazónicos,
        <StoryMedia
          media={{
            id: "image-6",
            type: "image",
            data: {
              credits: "Lundin Gold",
              src: require("photos/chapter4/LundinGold_Fruta_del_Norte01.jpg")
            }
          }}> gran parte de las inversiones extranjeras están dedicadas a las actividades de la industria extractiva
          </StoryMedia>
          y confirman que la integración de las economías amazónicas al mercado global ocurre a través del comercio de recursos naturales y alta dependencia de la fluctuación de los precios de commodities.
      </Paragraph>

      <Paragraph>
        Un ejemplo de ello es el caso de Ecuador, donde el Banco Central reportó un total de
          <FileLink
            href={require("documents/chapter4/Mineria_gran_escala_El Comercio_Ecuador.pdf")}
            format="pdf"
            size="873KB"
            > US$ 1,4 mil millones en inversiones directas extranjeras en el año 2018, de los cuales el 53% se destinó a proyectos de minería a gran escala
          </FileLink>.
        Sin embargo, estos proyectos extractivos son rechazados por la población. En el 2018, el gobierno de Lenin Moreno sometió a Consulta Popular la ampliación a la protección del Parque Nacional Yasuní (que junto con el Territorio Waorani y la Zona Intangible, en donde habitan pueblos no contactados, forman parte de la Reserva de la Biósfera Yasuní), el 67.31% de los votantes estuvieron de acuerdo con incrementar la zona intangible en al menos 50.000 hectáreas y reducir el área de explotación petrolera autorizada por la Asamblea Nacional en el Parque Nacional Yasuní de 1030 hectáreas a 300 hectáreas.
      </Paragraph>

      <Paragraph>
        Las evidencias presentadas en este reportaje revelan que los impactos ambientales, sociales y económicos del desarrollo basado en la extracción y conversión de ecosistemas, están siendo sub-dimensionados, pues en el largo plazo tienen consecuencias para los países más costosas que los réditos que perciben.
        <StoryMedia
          media={{
            id: "image-7",
            type: "image",
            data: {
              credits: "Leonardo Milano",
              src: require("photos/chapter4/_LeonardoMilano_RS34830__MG_5405.jpg")
            }
          }}> Los gobiernos, tanto a nivel nacional como local, están desestructurando órganos de protección ambiental
          </StoryMedia>.
          Sumando a este cuadro los episodios recientes de corrupción generalizada en el sector de infraestructura en América Latina, se llega a una situación de casi total falta de compromiso de los países con una agenda de desarrollo sostenible. 
      </Paragraph>

      <Paragraph>
        En Brasil, las propuestas del nuevo gobierno, que asumió en 2019, vienen a agravar la situación, ya que sus políticas relativas a los pueblos indígenas y sus tierras son semejantes a las de la dictadura militar que gobernó el país entre 1964 y 1985, cuando miles de indígenas fueron muertos y otros miles fueron expulsados de sus tierras a consecuencia de grandes proyectos de infraestructura. Estas propuestas implican recortes en la financiación gubernamental para atender las demandas indígenas, retroceso y reducción en las operaciones de fiscalización ambiental, congelación de las demarcaciones por el gobierno federal e incluso diversas manifestaciones a favor de la apertura de los territorios a la minería. Los emprendimientos de infraestructura implantados en la Amazonía durante la última década, con el argumento de mantener el abastecimiento de energía y mover la economía brasileña, son ejemplos de obras planificadas según el interés sectorial en detrimento de las necesidades locales.
      </Paragraph>

      <Paragraph>
        La Amazonía está en una encrucijada. Los nueve países que la conforman poseen la selva tropical más biodiversa y la mayor reserva de agua dulce del planeta. Pero sus gobernantes, las políticas de Estado y los intereses económicos la empujan hacia su agotamiento. Los últimos refugios para especies únicas están en las áreas protegidas y los territorios indígenas. Los científicos ya hablan de la inminencia de un punto de no retorno, donde las contribuciones de la naturaleza al bienestar humano o a la humanidad –el agua, el aire limpio, la regulación del clima, los recursos naturales– dejarán de ser provistos por el bioma. ¿Llegaremos hasta ese extremo?
      </Paragraph>
    </Container>
  </article>
);
