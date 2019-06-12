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
      <title>La Amazonía Transformada | Amazonía en la encrucijada</title>
    </Helmet>
    <Container>
      <Title as="h2">La Amazonía Transformada</Title>
      <Note>
        <p>
          Las industrias extractivas  tienen presencia en la Panamazonía desde hace varias décadas. Algunas de ellas son las mayores minas a cielo abierto del planeta o cuentan con
          <StoryMedia
            media={{
            id: "image-1",
            type: "image",
            data: {
              credits: "Andina",
              src: require("photos/chapter3/Andina_000362563W_DuctosPetroleo.jpg")
            }
          }}> largos ductos para extraer petróleo del medio de la selva
          </StoryMedia>.
          Estos proyectos generan  un pasivo ambiental por resolver.
        </p>
      </Note>

      <Paragraph>
        En su reciente análisis de presiones y amenazas en la Amazonía, la RAISG indica que en términos de extensión territorial, las industrias extractivas de minería y de petróleo son las que tienen mayor peso. Juntos, estos dos sectores poseen lotes asignados a  concesión equivalentes a 208 millones de hectáreas, lo que representa 24,5% de toda la extensión de la <ExternalLink href="https://www.amazoniasocioambiental.org/es/publicacion/amazonia-2017-areas-protegidas-y-territorios-indigenas/" language="es">Panamazonía, para la cual se estima una superficie total de 847 millones de hectáreas (RAISG, 2017)</ExternalLink>.
      </Paragraph>

      <Paragraph>
        Estas amenazas y presiones no ocurren de manera uniforme o con la misma intensidad en todo este vasto territorio cubierto por
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
          }}> áreas bajo concesiones de hidrocarburos 
          </StoryMedia> e minería. 
          Pero su existencia demuestra cuál es el modelo propuesto en estos países, basado en el extractivismo y la renta, sin valorar las consecuencias de perder más de un cuarto de la Amazonía.
      </Paragraph>
      
      <Table>
        <table>
          <tr>
            <th colspan="3">Bloques de petróleo y minería</th>
          </tr>
          <tr>
            <th>País</th>
            <th>Minería (ha)</th>
            <th>Petróleo (ha)</th>
          </tr>
          <tr>
            <td>Bolivia</td>
            <td>1.102.222</td>
            <td>15.604.528</td>
          </tr>
          <tr>
            <td>Brasil</td>
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
            <td>Guiana Francesa</td>
            <td>s.i.</td>
            <td>s.i.</td>
          </tr>
          <tr>
            <td>Guyana</td>
            <td>10.045.243</td>
            <td>s.i.</td>
          </tr>
          <tr>
            <td>Perú</td>
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
        Los daños ambientales no remediados son frecuentes, tanto donde la minería y la extracción de petróleo son cosa del pasado, como donde continúan desarrollándose. Y si bien en casi todos los países amazónicos hay presencia de minería ilegal –tema que abordamos en <ExternalLink href="https://mineriailegal.amazoniasocioambiental.org/?lang=es" language="es">el especial "Amazonía Saqueada" (realizado por RAISG/InfoAmazonia, 2018)</ExternalLink>–, los mayores daños son causados por emprendimientos apoyados por los gobiernos nacionales y regionales. A menudo, estos proyectos fueron autorizados sin las debidas consultas a las poblaciones afectadas e impactan también sin distinción a casi todos los países de la región amazónica. En otros casos, elementos de los gobiernos participan o coadyuvan la actividad, aunque en teoría esta sea ilegal.
      </Paragraph>

      <Paragraph>
        <strong className='regular-title'>El costo del petróleo y la minería</strong>
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
        > En 20 años se han registrado 190 derrames de crudo en la Amazonía peruana
        </StoryMedia>,
        según el organismo supervisor de la inversión en energía y minería, Osinergmin. Esta fuente indica, además, que los derrames se deben fundamentalmente a la existencia de infraestructura antigua en los pozos más productivos, la cual data de los años 70 y no ha recibido el mantenimiento adecuado. Entre 2008 y 2017 se derramaron 25.000 barriles de petróleo, según informe del Congreso de la Nación.
      </Paragraph>

      <Paragraph>
        Para agravar la situación, la empresa estatal de hidrocarburos del Perú contrató para la
        <StoryMedia
          media={{
          id: "video-1",
          type: "youtube",
          data: {
            id: "SiQ6CE4D8xQ"
          }
          }}> limpieza de los derrames equipos de trabajo improvisados, que emplearon mano de obra local, no calificada
          </StoryMedia>.
          En algunos casos, la remuneración pagada por estos servicios se convirtió en un aliciente para el sabotaje del oleoducto.
      </Paragraph>

      <Paragraph>
        Los derrames de petróleo en la Amazonía peruana han generado graves impactos ambientales – contaminación de cuerpos de agua, cultivos y mortandad de peces– y sociales entre la población indígena, con afectación de su salud y calidad de vida, que no han sido debidamente atendidos hasta el presente.
      </Paragraph>

      <Paragraph>
        Sin embargo, en algunos casos, el daño sobre el ambiente y la salud de la población se hace tan agudo que los gobiernos se ven forzados a actuar. En febrero del 2019,
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
        > el desastre ambiental y social que envolvió  a la minería ilegal en Madre de Dios, en Perú, obligó al gobierno a lanzar la Operación Mercurio
        </StoryMedia>,
        una intervención con un enfoque integral y multisectorial que busca restaurar el estado de derecho, garantizar la salud y el bienestar de la población, así como ofrecer alternativas económicas frente a la minería. Para evaluar los resultados aún hay que esperar.
      </Paragraph>
      
      <Paragraph>
        El Ecuador, desde los tiempos del gobierno de Correa, viene apostando por
        <StoryMedia
          media={{
          id: "image-2",
          type: "image",
          data: {
            credits: "La Sección",
            src: require("photos/chapter3/Mirador_Fuente_La_Seccion.jpg")
          }
        }}> la minería a gran escala como actividad estratégica para el modelo de desarrollo del país
        </StoryMedia>.
        Las Cuentas Nacionales Anuales del Banco Central del Ecuador señalan que la producción bruta de la explotación de minerales metálicos y de minerales no metálicos, así como actividades de apoyo a las minas y canteras, alcanza un 0,3 % del total del  PIB. El gobierno espera dar un salto a 4% en este indicador para el 2021 mediante el fomento a la minería.
      </Paragraph>

      <Paragraph>
        Similar énfasis recibe el petróleo ecuatoriano. En lo que va del siglo, la exportación petrolera representa 50% del total de exportaciones, con ingresos económicos que representan, en promedio, 11% del PIB. Sin embargo, la explotación petrolera ha traído consigo la deforestación de 2 millones de hectáreas, más de 650.000 barriles de crudo derramados en bosques, ríos y esteros, además de metales pesados que han contaminado las fuentes de agua de la región amazónica. Esto ha causado impactos en la salud en poblaciones estudiadas que enferman al consumir el agua contaminada y que ya no pueden pescar en esos ríos.
      </Paragraph>

      <FeaturedText>
        La minería ilegal y la presencia de grupos irregulares armados (nacionales o extranjeros) en la Amazonía venezolana son elementos de la mayor relevancia.
      </FeaturedText>
      
      <Paragraph>
        Venezuela se encuentra sufriendo una fuerte crisis económica, política y social desde hace varios años. En 2018, y en lo que va de 2019, la situación se ha agravado de forma importante. La crítica situación del servicio eléctrico se suma a la carencia de medicinas, la dificultad para conseguir alimentos, la ausencia de moneda en efectivo y la hiperinflación. Todo ello ha derivado en una crisis humanitaria muy grave. Atentan directamente contra la permanencia de los ecosistemas amazónicos y su diversidad de especies, la prosperidad de las poblaciones indígenas, las costumbres ancestrales, la gobernabilidad de la región y la autodeterminación de los pueblos originarios.
      </Paragraph>

      <Paragraph>
        La
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
              coordinates: [-64.284679,5.541481],
              zoomNumber: 5.85,
              zoomMin: 4,
              zoomMax: 22
            }
          }}> Zona de Desarrollo Estratégico Nacional “Arco Minero del Orinoco” (ZDEN-AMO)
          </StoryMedia> 
          fue decretada en febrero de 2016 por el gobierno de Venezuela. Es referida como un megaproyecto, aunque en realidad es un área sujeta a exploración y explotación sin un proyecto conocido. Su extensión territorial supera a países como Cuba, Bélgica, Panamá, Ecuador, entre muchos otros. Abarca 11,1 millones de hectáreas, divididos en cuatro bloques, al norte del estado Bolívar, pero alcanza casi 11,4 millones de hectáreas al incluir lo que se denominó Bloque Especial Icabarú, al sur del Parque Nacional Canaima, tal como lo indica Francisco Ruiz en su trabajo de 2018,
          <FileLink
            href={require("documents/chapter3/9.TC_Ruiz_274.pdf")}
            format="pdf"
            size="1.2MB"
          > El Arco Minero del Orinoco: diversificación del extractivismo y nuevos regímenes biopolíticos
          </FileLink>.
      </Paragraph>

      <Paragraph>
        Su objetivo de creación fue la extracción de minerales estratégicos como oro, coltán, diamantes, cobre, hierro y bauxita, además de tierras raras (materia prima para diferentes aplicaciones en la industria nuclear). Esto se hizo desconociendo buena parte del marco jurídico vigente del país, en materia ambiental, laboral, de pueblos indígenas e incluso de derechos humanos. Para llevar a cabo este proceso se han firmado acuerdos con empresas trasnacionales de diferentes países. Dichos convenios implican la
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
        > explotación minera a cielo abierto con las mismas tecnologías usadas por la minería ilegal
        </StoryMedia>,
        en especial, de oro.
      </Paragraph>

      <Paragraph>
        En Venezuela no ha habido inversión en tecnología para la extracción de minerales (en particular de oro), a pesar de la creación del Ministerio de Minería Ecológica. Tampoco se dieron a conocer las evaluaciones socioambientales y culturales de cada proyecto de exploración y explotación, ni los procesos de consulta previa e informada con las comunidades indígenas, como lo estipula la ley de este país. Recién en el primer trimestre de 2019, se firmó un convenio especial entre la Universidad Nacional Experimental de Guayana y el Gobierno para la realización de múltiples evaluaciones de impacto socioambiental.
      </Paragraph>

      <Paragraph>
        Otro foco de presión, se ha dado en la
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
              coordinates: [-77.992000,-3.816000],
              zoomNumber: 8.35,
              zoomMin: 4,
              zoomMax: 12
            }
          }}> Cordillera del Cóndor, en Perú, que se encuentra en la frontera entre este país y Ecuador, en el departamento de Amazonas, en territorio ancestral del pueblo awajun-wampis
          </StoryMedia>.
          Este pueblo accedió a la creación de un área protegida como parte de las negociaciones de paz con Ecuador. En 1999 fue creada la Zona Reservada Santiago Comaina, categoría temporal, que debía luego dar lugar a un parque nacional. Sin embargo, en 2007, y por disposición del gobierno de Alan García que cedió a presiones del sector minero, una parte de la Reserva se convirtió en el Parque Nacional Ichigat Muja - Cordillera del Cóndor, en tanto que la otra mitad del área quedó excluida. Sobre la parte excluida, el gobierno de García otorgó concesiones mineras. Este es un escenario permanente de conflicto socioambiental. En 2016, el gobierno del presidente Kuczynski anuló la licencia de operaciones de la empresa concesionaria, pero ello no ha impedido que hasta la fecha se continúe explotando oro en ese lugar, de manera ilegal.
      </Paragraph>

      <FeaturedText>
        La minería afecta las fuentes de alimentación, quebradas, ríos, bosque, suelo y es una amenaza seria y directa a la supervivencia de los awajún. 
      </FeaturedText>

      <Paragraph>
        En el caso de la minería legal e ilegal
        <StoryMedia
          media={{
          id: "video-2",
          type: "youtube",
          data: {
            id: "dUk198STPxU"
          }
          }}> en la Cordillera del Cóndor, los awajún-wampis vienen luchando contra las operaciones mineras legales e ilegales
          </StoryMedia>
          que tienen lugar en su territorio. Si bien los gobiernos central y regional de Amazonas han retirado los permisos de operaciones de la compañía, estos actos no han sido acompañados de acciones destinadas a asegurar el cumplimiento de la ley. La empresa ha continuado operando en la zona mediante estrategias como fomentar la actividad de pequeños mineros “artesanales” y provocando la división entre los indígenas al, por ejemplo, atraer a los jóvenes a su causa.  Éstos tomaron el caso en sus manos y destruyeron las oficinas de la empresa, ahora ilegal, y se encargan de patrullar la zona para mantener a raya a la minería ilegal, pero eso no ha cambiado significativamente el estado de cosas.
      </Paragraph>

      <Paragraph>
        En la Panamazonía, la superposición de los bloques de minería y petróleo con áreas naturales protegidas y territorios indígenas es motivo de constantes conflictos socioambientales. Juntos, los bloques de concesión para la explotación de minerales y petróleo se extienden sobre 87,2 millones de hectáreas de bosques. Los intereses económicos se imponen a la conservación de la diversidad que habita en ellos.
      </Paragraph>
      
      <Paragraph>
        Por ejemplo,
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
        > de los siete parques nacionales existentes en la Amazonía venezolana, seis presentan puntos o áreas de minería ilegal dentro de sus límites
        </StoryMedia>.
        La excepción la constituye el PN Delta del Orinoco, en el estado Delta Amacuro. Los restantes se encuentran en el estado Amazonas (Duida – Marahuaca, Parima – Tapirecó, Serranía La Neblina, Yapacana y Caura), donde la minería está totalmente prohibida por decreto, y en Bolívar (Caura y Canaima), el área con mayor minería en el país. Los parques nacionales Canaima y Yapacana, en Venezuela, destacan por ser los que presentan la mayor intensidad de actividad minera, la cual en el caso del PN Canaima no sólo se encuentra dentro de sus límites, sino que prácticamente flanquea todo su extremo occidental y sur (río Caroní, en su límite oeste, y en la Zona Especial Icabarú, al sur). Se trata además de un área protegida declarada Patrimonio Natural de la Humanidad por la Unesco en el año 1994. En ambos casos se encienden las alarmas, porque si bien en el Parque Nacional Yapacana la superficie afectada es proporcionalmente mayor, en el PN Canaima solo la intensidad de impacto a lo largo de sus linderos este y sur es motivo de alarma, aún sin considerar lo que sucede en su territorio directo.
      </Paragraph>

      <Paragraph>
        En Perú, en la porción andina de la cuenca amazónica, gran parte de las concesiones mineras se encuentra superpuesta a comunidades campesinas. Esto genera conflictos socioambientales. Una de las estrategias empleadas por las empresas concesionarias es comprar las tierras concesionadas. Al tratarse de propiedad comunal, esto no es fácil, pero tampoco imposible, pues el Estado peruano viene, desde hace más de una década, cambiando el régimen de tenencia comunal para facilitar la división y venta de tierras comunales como parcelas individuales.
      </Paragraph>
    </Container>
  </article>
);
