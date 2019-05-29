import React from "react";
import { Helmet } from "react-helmet";
import StoryMedia from "components/StoryMedia";
import ExternalLink from "components/ExternalLink";
import FileLink from "components/FileLink";
import Container from "components/blocks/Container";
import Title from "components/blocks/Title";
import Paragraph from "components/blocks/Paragraph";
import FeaturedText from "components/blocks/FeaturedText";
import Note from "components/blocks/Note";
import Table from "components/blocks/Table";


export default () => (
  <article>
    <Helmet>
      <title>A Amazônia transformada | Amazônia: a encruzilhada socioambiental</title>
    </Helmet>
    <Container>
      <Title as="h2">A Amazônia transformada</Title>
      <Note>
        <p>
          As indústrias extrativas estão presentes na Pan-Amazônia há várias décadas. Alguns destes empreendimentos são as maiores minas a céu aberto do planeta ou possuem
          <StoryMedia
            media={{
            id: "image-1",
            type: "image",
            data: {
              credits: "Andina",
              src: require("photos/chapter3/Andina_000362563W_DuctosPetroleo.jpg")
            }
          }}> longas tubulações para extrair petróleo do meio da selva
          </StoryMedia>. 
          Esses projetos geram um passivo ambiental a ser resolvido.
        </p>
      </Note>

      <Paragraph>
        Em sua recente análise de pressões e ameaças na Amazônia, a RAISG indica que, em termos de extensão territorial, as indústrias extrativas de mineração e petróleo são aquelas que possuem maior peso. Juntos, esses dois setores têm blocos destinados a prospecção e exploração equivalentes a 208 milhões de hectares, o que representa 24,5% de toda a extensão da <ExternalLink href="https://www.amazoniasocioambiental.org/es/publicacion/amazonia-2017-areas-protegidas-y-territorios-indigenas/" language="es">Pan-Amazônia, para a qual é estimada uma área total de 847 milhões de hectares (RAISG, 2017).</ExternalLink>.
      </Paragraph>

      <Paragraph>
        Essas ameaças e pressões não ocorrem uniformemente ou com a mesma intensidade em todo esse vasto território coberto por 
        <StoryMedia
          icon="map"
          media={{
          id: "map_08",
          type: "mapbox",
            data: {
              map: "map8",
              legend:"legend2",
              update:"map8",
              showExtraLayers: [],
              coordinates: [-62.965837,-5.841715],
              zoomNumber: 4,
              zoomMin: 4,
              zoomMax: 10
            }
          }}> áreas sob concessões de mineração e hidrocarbonetos
          </StoryMedia>. 
          Mas a sua existência mostra qual é o modelo proposto nos países da região: baseado no extrativismo e no lucro, sem avaliar as consequências de perder mais de um quarto da Amazônia.
      </Paragraph>
      
      <Table>
        <table>
          <tr>
            <th colspan="3">Blocos de petróleo e mineração</th>
          </tr>
          <tr>
            <th>País</th>
            <th>Mineração (ha)</th>
            <th>Petróleo (ha)</th>
          </tr>
          <tr>
            <td>Bolívia</td>
            <td>1.102.222</td>
            <td>15.604.528</td>
          </tr>
          <tr>
            <td>Brasil</td>
            <td>108.053.239</td>
            <td>9.158.666</td>
          </tr>
          <tr>
            <td>Colômbia</td>
            <td>794.712</td>
            <td>19.375.131</td>
          </tr>
          <tr>
            <td>Equador</td>
            <td>1.690.037</td>
            <td>6.817.191</td>
          </tr>
          <tr>
            <td>GUF</td>
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
        Danos ambientais não remediados são frequentes. Isso ocorre tanto onde a mineração e a extração de petróleo são coisa do passado quanto onde continuam a se desenvolver. Embora a mineração ilegal, a qual abordamos no especial <ExternalLink href="https://garimpoilegal.amazoniasocioambiental.org/?lang=pt" language="pt">"Amazônia Saqueada" (realizado por RAISG/InfoAmazonia em 2018)</ExternalLink>, esteja presente em todos os países amazônicos, os maiores danos são causados ​​por projetos apoiados pelos governos nacionais e regionais . Muitas vezes, esses projetos foram autorizados sem a devida consulta às populações afetadas e também impactam sem distinção todos os países da região amazônica. Em outros casos, agentes dos governos participam ou contribuem para a atividade, embora em teoria isso seja ilegal.
      </Paragraph>

      <Paragraph>
        <strong className='regular-title'>O custo do petróleo e mineração</strong>
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
                  credits: "Federación FECONACOR"
                }
              ]
            }
          }}
        > Em 20 anos, 190 derrames de petróleo foram registrados na Amazônia peruana
        </StoryMedia>,
        de acordo com o órgão de supervisão de investimentos em energia e mineração, Osinergmin. Essa fonte também indica que os derrames se devem principalmente à existência de infraestrutura antiga nos poços mais produtivos, que remonta aos anos 70 e não recebeu manutenção adequada. Entre 2008 e 2017, foram derramados 25 mil barris de petróleo, segundo relatório do Congresso Nacional.
      </Paragraph>

      <Paragraph>
        Para agravar a situação, a empresa estatal de hidrocarbonetos no Peru contratou 
        <StoryMedia
          media={{
          id: "video-1",
          type: "youtube",
          data: {
            id: "SiQ6CE4D8xQ"
          }
          }}> equipes de trabalho improvisadas para limpar os vazamentos, usando mão-de-obra local não qualificada
          </StoryMedia>.
          Em alguns casos, a remuneração paga por esses serviços tornou-se um incentivo para a sabotagem do óleoduto.
      </Paragraph>

      <Paragraph>
        Os derrames de petróleo na Amazônia peruana têm causado sérios impactos ambientais - poluição dos corpos d'água e  mortalidade dos peixes. Além disso, graves danos culturais e sociais entre a população indígena, já que os vazamentos afetam sua saúde e qualidade de vida e não foram adequadamente tratados até o presente.
      </Paragraph>

      <Paragraph>
        No entanto, em alguns casos, os danos ao meio ambiente e à saúde da população tornam-se tão agudos que os governos são forçados a agir. Em fevereiro de 2019,
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
        > o desastre ambiental e social que envolveu a mineração ilegal em Madre de Dios, no Peru, forçou o governo a lançar a Operação Mercúrio
        </StoryMedia>,
        uma intervenção com uma abordagem abrangente e multissetorial que visa a restaurar o Estado de direito, garantia a saúde e o bem-estar da população, além de oferecer alternativas econômicas à mineração. Para avaliar os resultados, ainda temos que esperar.
      </Paragraph>
      
      <Paragraph>
        O Equador, desde a época do governo de Correa, vem apostando na
        <StoryMedia
          media={{
          id: "image-2",
          type: "image",
          data: {
            credits: "La Sección",
            src: require("photos/chapter3/Mirador_Fuente_La_Seccion.jpg")
          }
        }}> mineração em larga escala como atividade estratégica para o modelo de desenvolvimento do país
        </StoryMedia>.
        As Contas Nacionais Anuais do Banco Central do Equador indicam que a produção bruta da exploração de minerais metálicos e minerais não-metálicos, bem como atividades de apoio a minas e pedreiras, atinge 0,3% do PIB total. O governo espera dar um salto de 4% neste indicador até 2021 através da promoção da mineração.
      </Paragraph>

      <Paragraph>
        O petróleo equatoriano recebe a mesma ênfase. Até agora, neste século, as exportações de petróleo representam 50% do total das exportações, com rendimentos econômicos representando, em média, 11% do PIB. No entanto, a exploração de petróleo trouxe desmatamento de 2 milhões de hectares, mais de 650.000 barris de petróleo derramado nas florestas, rios e córregos, bem como metais pesados, que contaminaram as fontes de água na região amazônica. Isso tem causado impactos na saúde das populações estudadas que adoecem ao consumir água contaminada e não podem mais pescar nesses rios.
      </Paragraph>

      <FeaturedText>
        A mineração ilegal e a presença de grupos armados irregulares (nacionais ou estrangeiros) na Amazônia venezuelana são elementos de maior relevância.
      </FeaturedText>
      
      <Paragraph>
        A Venezuela vem sofrendo uma grave crise econômica, política e social há vários anos. Em 2018, e até agora em 2019, a situação piorou significativamente. A situação crítica que afeta o serviço de eletricidade aumenta a falta de medicamentos, a dificuldade de obter alimentos, a ausência de moeda e hiperinflação. Tudo isso levou a uma grave crise humanitária. A crise impacta diretamente a preservação dos ecossistemas amazônicos e sua diversidade de espécies, a prosperidade das populações indígenas, os costumes ancestrais, a governabilidade da região e a autodeterminação dos povos nativos.
      </Paragraph>

      <Paragraph>
        A
        <StoryMedia
          icon="map"
          media={{
          id: "map_09",
          type: "mapbox",
            data: {
              map: "map9",
              legend:"legend3",
              update:"map9",
              showExtraLayers: ['GERAL - MINERIA E PETROLEO'],
              coordinates: [-64.770093,-6.650804],
              zoomNumber: 4.00,
              zoomMin: 4,
              zoomMax: 12
            }
          }}> Zona Nacional de Desenvolvimento Estratégico "Arco Minero del Orinoco" (ZDEN-AMO)
          </StoryMedia> 
          foi decretada em fevereiro de 2016 pelo governo nacional da Venezuela. É referido como um megaprojeto, embora na realidade seja uma área sujeita a exploração e exploração sem um plano conhecido. Sua extensão territorial excede países como Cuba, Bélgica, Panamá, Equador, entre muitos outros. Ele cobre 11,1 milhões de hectares, divididos em quatro quadras ao norte do estado de Bolívar, mas atinge quase 11,4 milhões de hectares para incluir o que é chamado de bloco especial Icabaru (1,7 milhões de hectares), ao sul do Parque Nacional Canaima, como indicado por Francisco Ruiz em seu 2018 trabalho,
          <FileLink
            href={require("documents/chapter3/9.TC_Ruiz_274.pdf")}
            format="pdf"
            size="1.2MB"
          > o “El Arco Minero del Orinoco: diversificación del extractivismo y nuevos regímenes biopolíticos.
          </FileLink>.
      </Paragraph>

      <Paragraph>
        Seu objetivo de criação era a extração de minerais estratégicos como ouro, coltan, diamantes, cobre, ferro e bauxita, além de terras raras (matéria-prima para diferentes aplicações na indústria nuclear). Isso foi feito ignorando boa parte do atual arcabouço legal do país, em meio ambiente, mão de obra, povos indígenas e até direitos humanos. Para realizar este processo, foram assinados acordos com empresas transnacionais de diferentes países. Esses acordos envolvem
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
        > mineração a céu aberto com as mesmas tecnologias usadas pela mineração ilegal
        </StoryMedia>,
        especialmente mineração de ouro.
      </Paragraph>

      <Paragraph>
        Na Venezuela, não houve investimentos em tecnologia para extração de minerais (principalmente ouro), apesar da criação do Ministério de Mineração Ecológica. As avaliações socioambientais e culturais de cada projeto de prospeção e exploração não foram divulgadas, nem os processos de consulta prévia e informada com as comunidades indígenas, conforme estipulado na lei deste país. Somente no primeiro trimestre de 2019, um acordo especial entre a Universidade Experimental Nacional da Guiana e do Governo para realizar vários estudos de impacto social e ambiental foi assinado.
      </Paragraph>

      <Paragraph>
        Outra fonte de pressão ocorre na
        <StoryMedia
          icon="map"
          media={{
          id: "map_10",
          type: "mapbox",
            data: {
              map: "map10",
              legend:"legend10",
              update:"map10",
              showExtraLayers: ['MINERÍA Perú, localiza Cordillera del Cóndor/PN Ichigat Muja'],
              coordinates: [-64.770093,-6.650804],
              zoomNumber: 4.00,
              zoomMin: 4,
              zoomMax: 12
            }
          }}> Cordilheira do Condor, no Peru, localizado na fronteira entre este país e o Equador, no departamento de Amazonas, no território ancestral Awajún-Wampis
          </StoryMedia>.
          Estes povos concordaram com a criação de uma área protegida como parte das negociações de paz com o Equador. Em 1999, foi criada a Zona Reservada de Santiago Comaina, uma categoria temporária, que então se transformaria em um parque nacional. No entanto, em 2007, e por ordem do governo de Alan Garcia, que cedeu à pressão do setor de mineração, parte da Reserva tornou-se o Parque Nacional Muja Ichigat - Cordillera del Condor, enquanto a outra metade da área foi excluída . Na parte excluída, o governo de García gerou concessões de mineração. Criou-se assim um cenário permanente de conflito socioambiental. Em 2016, o governo do presidente Kuczynski anulou a licença de operação da empresa concessionária, mas isso não impediu que, até o momento, continue a explorar ilegalmente o ouro naquele local.
      </Paragraph>

      <FeaturedText>
      A mineração afeta as fontes de alimento, riachos, rios, florestas, solos e é uma ameaça séria e direta à sobrevivência dos Awajún. 
      </FeaturedText>

      <Paragraph>
        No caso da mineração legal e ilegal
        <StoryMedia
          media={{
          id: "video-2",
          type: "youtube",
          data: {
            id: "Sy2Nm0bPljI"
          }
          }}> Cordilheira do Condor, os Awajún-Wampis têm lutado contra as operações legais e ilegais de mineração
          </StoryMedia>
          que ocorrem em seu território. Embora o governo central e o governo regional do Amazonas tenham retirado as permissões de funcionamento da empresa, esses atos não foram acompanhados de ações destinadas a garantir o cumprimento da lei. A empresa continuou a operar na área por meio de estratégias como promover a atividade de pequenos garimpeiros e provocar uma divisão entre os povos indígenas, por exemplo, atraindo os jovens para sua causa. Mas os indígenas reagiram e destruíram os escritórios da empresa e estão encarregados de patrulhar a área para manter a mineração ilegal afastada. Mas isso não mudou significativamente o estado das coisas.
      </Paragraph>

      <Paragraph>
        Em toda a Pan Amazônia, a superposição da mineração e dos blocos petrolíferos com áreas naturais protegidas e territórios indígenas é motivo de constantes conflitos socioambientais. Juntos, os blocos de concessão para a exploração de minerais e petróleo abrangem mais de 87,2 milhões de hectares de florestas protegidas. Interesses econômicos são impostos à conservação da diversidade que os habita.
      </Paragraph>
      
      <Paragraph>
        Por exemplo,
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
        > dos sete parques nacionais na Amazônia venezuelana, seis possuem áreas de mineração ilegal ou áreas dentro de suas fronteiras
        </StoryMedia>.
        A exceção é o Delta del Orinoco, no estado do Delta Amacuro. Os restantes estão no estado do Amazonas (Duida - Marahuaca, Parime - Tapirecó Serrania O Haze, Yapacana e Caura), onde a mineração é proibida por decreto e Bolívar (Caura e Canaima), a área mais afetada pela mineração no país. O Canaima e Yapacana  são os parques nacionais que se destacam como sendo aqueles com a maior intensidade da atividade de mineração. No caso do PN Canaima, a mineração não apenas se encontra dentro de seus limites, mas praticamente ladeando toda sua extremidade oeste e sul (Rio Caroní, no limite oeste, e no Bloco Especial Icabarú, ao sul). Esta é também uma área protegida declarada Patrimônio da Humanidade pela Unesco em 1994. Em ambos os casos, os alarmes foram dados, porque embora a área do Parque Nacional Yapacana afetada é proporcionalmente maior do que a do PN Canaima, a intensidade do impacto ao longo de suas fronteiras leste e sul é motivo de preocupação, mesmo sem considerar o que acontece em seu território direto.
      </Paragraph>

      <Paragraph>
        No Peru, na porção andina da bacia amazônica, grande parte das concessões de mineração é sobreposta às comunidades camponesas. Isso gera conflitos socioambientais Uma das estratégias utilizadas pelas empresas de concessão é comprar a terra concessionada. Sendo propriedade comunal, isso não é fácil, mas não impossível.  O Estado peruano tem, há mais de uma década, feito mudanças do sistema de posse comunal para facilitar a divisão e venda de terras comunais como lotes individuais.
      </Paragraph>
    </Container>
  </article>
);
