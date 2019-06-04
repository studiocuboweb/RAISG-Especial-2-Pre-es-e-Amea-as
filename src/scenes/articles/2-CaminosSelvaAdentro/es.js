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
      <title>Caminos selva adentro | Amazonía en la encrucijada</title>
    </Helmet>
    <Container>
      <Title as="h2">Caminos selva adentro</Title>
      <Note>
        <p>
          La 
          <StoryMedia
              media={{
              id: "image-1",
              type: "image",
              data: {
                credits: "Paulo Santos",
                src: require("photos/chapter2/PauloSantos_AnapuPara_13_Transamazonica©PS.jpg")
              }
            }}> apertura de nuevas carreteras</StoryMedia>, 
          ferrocarriles e hidrovías en la región amazónica, siempre ha sido y será el principal vector de transformación del territorio.
        </p>
      </Note>

      <Paragraph>
        Más de 136 mil kilómetros de carreteras se han desarrollado hasta el 2018 en la Panamazonía, siendo que 26 mil kilómetros están localizadas dentro de áreas naturales protegidas y territorios indígenas.  De este total, 16,9 mil kilómetros atraviesan territorios indígenas y 9,1 mil km fragmentan áreas naturales protegidas.
      </Paragraph>

      <Paragraph>
        El caso de la Amazonía brasileña nos sirve para visualizar el futuro de toda la región.
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
        }}> La mayor parte de la deforestación ocurre en las inmediaciones de carreteras
        </StoryMedia>, 
        y se estima que aproximadamente <ExternalLink href="https://doi.org/10.1080/01431160110096791" language="en">90% de la  pérdida de vegetación nativa ocurrirá hasta una distancia de 100 kilómetros de la red vial</ExternalLink>, de acuerdo con el estudio “Space-time dynamics of deforestation in Brazilian Amazonia” , publicado en la revista científica International Journal of Remote Sensing, en 2002. 
      </Paragraph>

      <Paragraph>
        Los resultados de las investigaciones sobre este tema, sin embargo, varían en cuanto a cuál es la distancia en la que ocurre la mayor intensidad de deforestación. Por ejemplo, Gregory Asner, en 2006, encuentra que <ExternalLink href="https://doi.org/10.1080/01431160110096791" language="en">hasta 50 km contiguos a las carreteras tiene lugar el 67% de la deforestación</ExternalLink>, pero, según el trabajo de Kenneth M. Chomitz y Timothy S. Thomas, a esa distancia ya <ExternalLink href="http://documents.worldbank.org/curated/en/102381468769744789/Geographic-patterns-of-land-use-and-land-intensity-in-the-Brazilian-Amazon" language="en">la cobertura vegetal ha sido removida hasta en un 85%</ExternalLink>. En contraposición y casi una década después, los hallazgos de Christopher P. Barber muestran que en la Amazonía Legal brasileña <ExternalLink href="https://www.sciencedirect.com/science/article/abs/pii/S000632071400264X" language="en">94,9% de la deforestación ocurrió en los 5,5 kilómetros contiguos a las carreteras y un kilómetro de los ríos</ExternalLink>. Todo esto pone en evidencia la íntima conexión entre  la expansión de estos medios de transporte y la eliminación de la vegetación nativa.
      </Paragraph>

      <Paragraph>
        Con carreteras abiertas en los años 60, Brasil conoce bien los efectos de la ocupación propiciada por la construcción de arterias viales que conectan el norte y el sur del país. Otros países como Perú, evalúan ahora las consecuencias de la construcción reciente de grandes carreteras, como es el caso de la
        <StoryMedia
          media={{
          id: "image-2",
          type: "image",
          data: {
            credits: "Andina",
            src: require("photos/chapter2/Andina_000095074W_CarreteraInteroceanica.jpg")
          }
        }}> Interoceánica Sur, concluida en 2010
        </StoryMedia>.
        Y zonas de la Amazonía previamente no afectadas pasan ahora por un boom de nuevas vías, como es el caso en Colombia y Bolivia.
      </Paragraph>

      <Paragraph>
        <strong className='regular-title'>Nuevas vías, nuevos actores</strong>
      </Paragraph>

      <Paragraph>
        Actualmente, la Amazonía colombiana tiene un total de 32.780 km de vías de nivel 1 al 7, siendo las de nivel 6 y 7 (vías terciarias) las de mayor extensión con un total de 23.407 km. De este total,
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
        }}> 2.336 km se encuentran dentro de Resguardos Indígenas y 7.975 km en Áreas Protegidas
        </StoryMedia>.
      </Paragraph>

      <FeaturedText>
       En Colombia, después de la firma del acuerdo de paz, la guerrilla de las FARC dejó de ocupar puntos estratégicos de entrada a la selva amazónica. En estos puntos, la presencia estatal es casi nula, por lo que nuevos actores (legales e ilegales) han empezado a llegar en busca de recursos naturales y tierras.
      </FeaturedText>

      <Paragraph>
        Todo ello ha sido facilitado por la apertura acelerada de nuevas vías y la oficialización de las construidas por la guerilla de las FARC antes de la firma del acuerdo de paz, a través de vías terciarias: la nueva forma de penetración al corazón de la selva. Como se muestra en el mapa de presiones y amenazas (RAISG, 2018), la presencia de vías en Colombia se concentra en el arco noroccidental de la Amazonía. En el caso de las carreteras de las FARC en este país, de los <ExternalLink href="https://www.elespectador.com/noticias/judicial/las-farc-habrian-construido-mas-vias-que-odebrecht-y-los-nule-juntos-articulo-709623" language="es">3.753 kilómetros construidos</ExternalLink>, <ExternalLink href="https://www.youtube.com/watch?v=j4IuJHhdCjk" language="es">490 km se encuentran dentro de Áreas Protegidas</ExternalLink> de la Amazonía colombiana, específicamente en el Parque Nacional Serranía de Chiribiquete, la Reserva Nacional Natural Nukak y el Parque Nacional Natural Tinigua.
      </Paragraph>

      <Paragraph>
        Refuerza esta tendencia la inversión destinada a la creación y ampliación de carreteras  que penetran en la selva en Colombia, donde alrededor de 1,2 billones de pesos colombianos para vías terciarias del posconflicto están en manos de las gobernaciones departamentales. Además, las inversiones en infraestructura vial para las zonas priorizadas por el acuerdo de paz alcanzan los 1,38 billones de pesos colombianos, provenientes de recursos del Sistema General de Regalías (SGR). 
      </Paragraph>

      <Paragraph>
        En el caso de Bolivia, destaca el <StoryMedia
        icon="map"
        media={{
        id: "map_05",
        type: "mapbox",
          data: {
            map: "map5",
            legend:"legend_group5",
            update:"map5",
            showExtraLayers: [],
            coordinates: [-65.896617,-16.237845],
            zoomNumber: 8.17,
            zoomMin: 4,
            zoomMax: 10
          }
        }}>Parque Nacional y Territorio Indígena Isiboro Sécure (TIPNIS), una de las 22 áreas protegidas nacionales, la cual cubre 1,3 millones de hectáreas</StoryMedia>.
        Está delimitada por el río Isiboro (al sur) y el río Sécure (al norte), en el corazón del país. Fue creada para conservar los bosques y la cultura de  los pueblos indígenas que alberga (12 mil habitantes entre mojeños, yuracarés y chimanes). Si bien 80% de su extensión se encuentra en buen estado de conservación, está amenazada por el avance de cultivos desarrollados en su límite sur, debido a la expansión de plantaciones de coca junto a la
        <StoryMedia
          media={{
          id: "image-3",
          type: "image",
          data: {
            credits: "Samy Schwartz",
            src: require("photos/chapter2/Foto03_SamySchwartz_Tipnis_SemCredito.jpg")
          }
        }}> construcción de la nueva carretera Villa Tunari - San Ignacio de Moxos
        </StoryMedia>
        que atravesaría el núcleo para conectar a los departamentos de Cochabamba y Beni (306 km de largo y 9,2 m de ancho).
      </Paragraph>

      <Paragraph>
        En el año 2017 se abroga la Ley 180, que declara al Territorio Indígena y Parque Nacional Isiboro Sécure - TIPNIS patrimonio sociocultural y natural, zona de preservación ecológica, reproducción histórica y hábitat de los pueblos indígenas Chimán, Yuracaré y se aprueba la Ley 969, la cual anula la intangibilidad del TIPNIS en nombre del desarrollo y progreso del país. Este conflicto puso en evidencia la visión de desarrollo del país, basada en la explotación de los recursos naturales, sin considerar los costos y consecuencias socioambientales en el largo plazo.
      </Paragraph>

      <Paragraph>
        En Venezuela, la Organización Regional de Pueblos Indígenas de Amazonas (Orpia) y Wataniba reportan el incremento de caminos fluviales y de tierra que son utilizados para el tráfico de coca. Venezuela sigue sin presentar espacios de cultivo de esta droga, pero su tráfico se une al de gasolina, alimentos y oro, entre otros bienes, en la frontera colombo-venezolana y colombo-brasilera, e incide en la gobernanza dentro de los territorios indígenas e incluso en la permanencia de los pobladores tradicionales dentro de éstos. La
        <StoryMedia
          media={{
          id: "image-4",
          type: "image",
          data: {
            credits: "Guillermos da Silva",
            src: require("photos/chapter2/GuillermoDaSilva_954_Arawak.jpg")
          }
        }}> presencia de grupos irregulares armados vinculados con el tráfico de diferentes productos y con la creciente minería ilegal en la misma frontera
        </StoryMedia>
        ha generado nuevas migraciones internas, donde las comunidades indígenas, y en especial las asociadas a los ejes fluviales fronterizos como los ríos Orinoco y Atabapo, no son la excepción. El pueblo Arawak ha hecho sentir su voz a través de organizaciones como Orpia y Coiam (Coordinadora de Organizaciones Indígenas de Amazonas), debido al desplazamiento de que han sido objeto como consecuencia de la violencia de la que han sido víctimas.
      </Paragraph>

      <Paragraph>
        <strong className='regular-title'>Hidrovía y ferrovía</strong>
      </Paragraph>

      <Paragraph>
        Dos importantes vías de acceso al territorio amazónico de Perú actúan como vectores de deforestación:
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
        }}> la Carretera Marginal de la Selva, construida en los años sesenta, que llega hasta Ucayali, y la Interoceánica Sur, concluida en 2010, que llega hasta Madre de Dios
        </StoryMedia>.
        Asimismo, en años recientes, se ha advertido sobre la proliferación de una red de caminos forestales de penetración construidos sin autorización de los entes competentes de Perú. Estos caminos aceleran el proceso de colonización de la Amazonía peruana al tiempo que facilitan la acción depredadora de mineros, madereros y cultivadores de coca, que operan al margen de la ley.
      </Paragraph>

      <Paragraph>
        En Perú, están por iniciarse las actividades para la habilitación de la
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
            coordinates: [-74.480518,-6.531468],
            zoomNumber: 6.30,
            zoomMin: 4,
            zoomMax: 10
          }
        }}> Hidrovía Amazónica, que busca crear un extenso canal de navegación conectando los caudalosos ríos Marañón, Amazonas, Huallaga y Ucayali
        </StoryMedia>.
        Esta obra, orientada a dinamizar el transporte fluvial de carga, pretende asegurar condiciones de navegabilidad permanentes a lo largo de los 2.600 kilómetros que separan los terminales portuarios de Yurimaguas, Iquitos y Pucallpa.
      </Paragraph>

      <Paragraph>
        Las obras contemplan el dragado o remoción de sedimentos en zonas poco profundas y accidentadas de los mencionados ríos. Los especialistas advierten del impacto ambiental, toda vez que el reglamento de Protección Ambiental en el sector Transportes no contempla medidas específicas para hidrovías. De otro lado, señalan que el proyecto no ha considerado el impacto que tendrá el dragado de los ríos sobre el tránsito, reproducción y desove de peces, ni ha tomado en cuenta la turbidez que causará en el agua, que es usada por las poblaciones locales. Todo permite anticipar que la hidrovía se convertirá en un nuevo foco de conflicto socioambiental. Sin embargo, es motivo de esperanza la decisión, de marzo de 2019, del Servicio Nacional de Certificación Ambiental para las Inversiones Sostenibles (Senace), el cual por segunda vez rechazó el Estudio de Impacto Ambiental (EIA) del proyecto Hidrovía Amazónica. Sin este requisito no se puede dar inicio a las obras.
      </Paragraph>

      <Paragraph>
        En Colombia, el presidente Duque se comprometió a gestionar la navegabilidad del río Vaupés, además de un sistema de transporte multimodal que conectará al Municipio de Calamar, en el Departamento del Guaviare con el Municipio de Mitú (Vaupés Colombia) y Yavaraté (Brasil), lo que generaría una aceleración en los procesos de colonización en la zona.
      </Paragraph>

      <Paragraph>
        Por su parte, la continua expansión de la infraestructura de transportes en la Amazonía brasileña tiene como uno de sus protagonistas la modalidad ferroviaria. Con casi mil kilómetros de extensión, partiendo
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
          }}> de la región productora de cereales de Sinop (Mato Grosso) hasta el puerto de Miritituba (Pará), Ferrogrão
        </StoryMedia>
        pretende consolidar el nuevo corredor ferroviario de exportación de Brasil por el norte del país. Paralelo a la carretera BR-163, el ferrocarril puede potenciar los impactos socioambientales negativos en la región, con amenazas directas e indirectas a áreas naturales protegidas y territorios  indígenas.
      </Paragraph>
    </Container>
  </article>
);
