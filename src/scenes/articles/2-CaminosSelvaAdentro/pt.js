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
      <title>Caminhos floresta adentro | Amazônia: a encruzilhada socioambiental</title>
    </Helmet>
    <Container>
      <Title as="h2">Caminhos floresta adentro</Title>
      <Note>
        <p>
          A 
          <StoryMedia
              media={{
              id: "image-1",
              type: "image",
              data: {
                credits: "Paulo Santos",
                src: require("photos/chapter2/PauloSantos_AnapuPara_13_Transamazonica©PS.jpg")
              }
            }}> abertura de novas estradas</StoryMedia>, 
          ferrovias e hidrovias na floresta amazônica sempre foi e será o principal vetor de transformação do território.
        </p>
      </Note>

      <Paragraph>
        Mais de 136 mil quilômetros de estradas foram construídas até 2018 na Pan- Amazônia, onde 26 mil quilômetros estão localizados dentro de áreas naturais protegidas e territórios indígenas. Desse total, 16,9 mil quilômetros cruzam territórios indígenas e 9,1 mil km, trechos protegidos de áreas naturais.
      </Paragraph>

      <Paragraph>
        O caso da Amazônia brasileira nos ajuda a visualizar o futuro de toda a região.
        <StoryMedia
        icon="map"
        media={{
        id: "5_02",
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
        }}> A maior parte do desmatamento ocorre na proximidade de estradas
        </StoryMedia>, 
        e estima-se que aproximadamente <ExternalLink href="https://doi.org/10.1080/01431160110096791" language="en">90% da perda de vegetação nativa ocorre até uma distância de 100 quilômetros da malha viária</ExternalLink>, segundo o estudo "Space-time dynamics of deforestation in Brazilian Amazonia", publicado na revista científica International Journal of Remote Sensing, em 2002.
      </Paragraph>

      <Paragraph>
        Os resultados das pesquisas sobre esse assunto, no entanto, variam quanto à distância em que ocorre a maior intensidade de desmatamento. Por exemplo, Gregory Asner, em 2006, descobriu que <ExternalLink href="https://doi.org/10.1080/01431160110096791" language="en">a uma distância máxima de 50 km das estradas ocorrem 67% do desmatamento</ExternalLink>, mas, de acordo com o trabalho de Kenneth M. Chomitz e Timothy S. Thomas, a essa distância a <ExternalLink href="http://documents.worldbank.org/curated/en/102381468769744789/Geographic-patterns-of-land-use-and-land-intensity-in-the-Brazilian-Amazon" language="en">cobertura vegetal foi removida em um nível de 85%</ExternalLink>. Em contraste e quase uma década depois, as descobertas de Christopher P. Barber mostram que na Amazônia Legal brasileira <ExternalLink href="https://www.sciencedirect.com/science/article/abs/pii/S000632071400264X" language="en">94,9% do desmatamento ocorreu nos 5,5 quilômetros adjacentes às estradas e um quilômetro dos rios</ExternalLink>. Tudo isso evidencia a íntima conexão entre a expansão das vias e a eliminação da vegetação nativa.
      </Paragraph>

      <Paragraph>
        Com as estradas abertas na década de 1960, o Brasil está bem ciente dos efeitos da ocupação causada pela construção de artérias rodoviárias que ligam o norte e o sul do país. Outros países, como o Peru, estão agora avaliando as consequências da construção recente de importantes rodovias, como a
        <StoryMedia
          media={{
          id: "image-2",
          type: "image",
          data: {
            credits: "Andina",
            src: require("photos/chapter2/Andina_000095074W_CarreteraInteroceanica.jpg")
          }
        }}> Interoceânica Sul, concluída em 2010
        </StoryMedia>.
        E áreas anteriormente não afetadas da Amazônia estão experimentando agora um boom de novas estradas, como é o caso da Colômbia e da Bolívia.
      </Paragraph>

      <Paragraph>
        <strong className='regular-title'>Novas rotas, novos atores</strong>
      </Paragraph>

      <Paragraph>
        Atualmente, a Amazônia colombiana tem um total de 32.780 km de estradas do nível 1 ao 7, sendo os níveis 6 e 7 (estradas terciárias) a maior extensão, com um total de 23.407 km. Desse total,
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
        }}> 2.336 km estão dentro de Reservas Indígenas e 7.975 km em Áreas Protegidas
        </StoryMedia>.
      </Paragraph>

      <FeaturedText>
        Na Colômbia, após a assinatura do acordo de paz, os guerrilheiros das FARC pararam de ocupar pontos de entrada estratégicos na floresta amazônica. Nesses pontos, a presença do Estado é quase nula, então novos atores (legais e ilegais) começaram a chegar em busca de recursos naturais e terras.
      </FeaturedText>

      <Paragraph>
        Isto tem sido facilitado pela rápida abertura de novas rotas e a formalização de outras construídas pelos guerrilheiros das FARC antes da assinatura do acordo de paz. São principalmente estradas terciárias, a nova maneira de penetrar no coração da floresta. Tal como mostrado no mapa de pressões e ameaças (RAISG, 2018), a presença de estradas na Colômbia é concentrada no arco noroeste da Amazônia. No caso das estradas das FARC, dos <ExternalLink href="https://www.elespectador.com/noticias/judicial/las-farc-habrian-construido-mas-vias-que-odebrecht-y-los-nule-juntos-articulo-709623" language="es">3.753 quilômetros construídos</ExternalLink>, <ExternalLink href="https://www.youtube.com/watch?v=j4IuJHhdCjk" language="es">490 km estão dentro de áreas protegidas da Amazônia colombiana</ExternalLink>, especificamente no Parque Nacional Serras de Chiribiquete,na Reserva Nacional de Vida Selvagem Nukak e no Parque Nacional  Natural Tinigua.
      </Paragraph>

      <Paragraph>
        Essa tendência é reforçada pelo investimento na criação e expansão de estradas que penetram na amazônia colombiana, onde cerca de 1,2 trilhão de pesos colombianos destinados a estradas terciárias do pós-conflito estão nas mãos dos governos departamentais. Além disso, os investimentos em infraestrutura rodoviária para áreas priorizadas pelo acordo de paz alcançam 1,38 trilhões de pesos colombianos, graças aos recursos do Sistema Geral de Regalias (SGR).
      </Paragraph>

      <Paragraph>
        No caso da Bolívia, destaca-se o <StoryMedia
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
        }}>Parque Nacional e Território Indígena Isiboro Sécure (TIPNIS), uma das 22 áreas protegidas nacionais que abrange 1,3 milhões de hectares</StoryMedia>.
        É delimitado pelo rio Isiboro (sul) e o rio Sécure (norte), no coração do país. Ele foi criado para conservar as florestas e a cultura dos povos indígenas que vivem lá (12 mil habitantes entre Mojeños, Yuracarés e Chimanes). Enquanto 80% de suas terras está em boas condições, o parque é ameaçado pelo avanço dos cultivos em sua fronteira sul.  Principalmente a expansão das plantações de coca junto à
        <StoryMedia
          media={{
          id: "image-3",
          type: "image",
          data: {
            credits: "Samy Schwartz",
            src: require("photos/chapter2/Foto03_SamySchwartz_Tipnis_SemCredito.jpg")
          }
        }}> construção da nova estrada Villa Tunari - San Ignacio de Moxos
        </StoryMedia>
        (306 km de comprimento e 9,2 m de largura) que atravessa o núcleo do território para conectar os departamentos de Cochabamba e Beni.
      </Paragraph>

      <Paragraph>
        As pressões sobre TIPNIS são preocupantes e os indígenas denunciam abusos em seu território. Tanto o Estado quanto uma facção do CONISUR (Conselho Indígena do Sul), apoiados por agricultores e grupos do departamento de Beni, tem enfraquecido a resistência dos nativos. No ano de 2017 se aprovou a Lei 180, declarando o Território Indígena e Parque Nacional Isiboro Sécure (TIPNIS) patrimônio sociocultural e natural,  zona de preservação ecológica, reprodução histórica e habitat dos povos indígenas Chimán e Yuracaré. Mas no mesmo ano aprovou-se a Lei 969 anulando a intangibilidade do TIPNIS, em nome do desenvolvimento e progresso do país. Este conflito destacou a visão de desenvolvimento baseada na exploração dos recursos naturais sem considerar os custos sociais e ambientais e as consequências a longo prazo.
      </Paragraph>

      <Paragraph>
        Na Venezuela, a Organização Regional dos Povos Indígenas do Amazonas (Orpia) e Wataniba relatam aumento de rotas fluviais e estradas de terra que são usadas ​​para traficar cocaína. A Venezuela também possui zonas de produção desta droga e o seu tráfico é aliado aos de gasolina, alimentos e ouro, entre outros bens. Este comércio ocorre nas fronteiras com Colômbia e Brasil e afeta a governança dentro de territórios indígenas e até mesmo a permanência dentro deles. A
        <StoryMedia
          media={{
          id: "image-4",
          type: "image",
          data: {
            credits: "Guillermos da Silva",
            src: require("photos/chapter2/GuillermoDaSilva_954_Arawak.jpg")
          }
        }}> presença de grupos armados irregulares ligadas ao tráfico de diferentes produtos e o aumento da mineração ilegal na fronteira 
        </StoryMedia> 
        têm gerado novas migrações internas, onde comunidades indígenas, especialmente aquelas associadas com eixos fluviais de fronteira como os rios Orinoco e Atabapo, não são exceção. O povo Arawak fez ouvir a sua voz através de organizações como Orpia e Coiam (Coordenação das Organizações Indígenas da Amazônia) devido ao deslocamento provocado pela violência que sofreram.
      </Paragraph>

      <Paragraph>
        <strong className='regular-title'>Hidrovias e ferrovias</strong>
      </Paragraph>

      <Paragraph>
        Duas importantes vias de acesso ao território amazônico do Peru atuam também como vetores de desmatamento:
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
            zoomNumber: 5.92,
            zoomMin: 4,
            zoomMax: 10.99
          }
        }}> a Carretera Marginal de la Selva, construída na década de sessenta, que atinge Ucayali, e a Interoceânica Sul, concluída em 2010, que chega a Madre de Dios
        </StoryMedia>.
        Além disso, nos últimos anos, alertas foram emitidos sobre a proliferação de uma rede de estradas de acesso florestais construídas sem autorização das autoridades competentes no Peru. Estas estradas aceleram o processo de colonização da região, facilitando as depredações por mineiros, madeireiros e plantadores de coca que operam fora da lei.
      </Paragraph>

      <Paragraph>
        No Peru, devem ser iniciadas as atividades para a conclusão da
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
        }}> Hidrovia Amazônica, que criará um extenso canal de navegação para ligar os rios Marañon, Amazonas, Ucayali e Huallaga
        </StoryMedia>.
        Esta obra, orientada a dinamizar o transporte fluvial de carga busca assegurar condições de navegabilidade permanente ao longo dos 2.600 quilômetros entre os terminais portuários de Yurimaguas, Iquitos e Pucallpa.
      </Paragraph>

      <Paragraph>
        As obras contemplam a dragagem ou remoção de sedimentos em áreas pouco profundas e acidentadas dos rios mencionados. Especialistas alertam para o impacto ambiental, já que o regulamento de Proteção Ambiental no setor de transportes não inclui medidas específicas para hidrovias. Além disso, eles apontam que o projeto não considerou o impacto provocado pela dragagem de rios sobre o trânsito, reprodução e desova dos peixes, nem levou em conta a turbidez que causará na água, usada pelas populações locais. Tudo isso permite antecipar que a hidrovia se tornará um novo foco de conflito socioambiental. No entanto, é motivo de esperança a decisão, em março de 2019, do Serviço Nacional de Certificação Ambiental para o Investimento Sustentável (Senace) que pela segunda vez rejeitou a Avaliação de Impacto Ambiental (EIA) do projeto da Hidrovia Amazônica. Sem esse requisito, as obras não podem ser iniciadas.
      </Paragraph>

      <Paragraph>
        Na Colômbia, o presidente Duke comprometeu-se a melhorar a navegabilidade do rio Vaupés, além de um sistema de transporte multimodal que vai ligar o município de Calamar, em Guaviare com a Prefeitura de Mitu (Vaupés, Colômbia) e Yavaraté (Brasil), o que geraria uma aceleração nos processos de colonização na área.
      </Paragraph>

      <Paragraph>
        Por outro lado, a contínua expansão da infraestrutura de transporte na Amazônia brasileira tem como um de seus protagonistas a modalidade ferroviária. Com quase mil quilômetros de extensão, a partir
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
          }}> da região produtora de grãos de Sinop (Mato Grosso) para o porto de Miritituba (Pará), a Ferrogrão
        </StoryMedia>,  
        visa consolidar a exportação através de um novo corredor ferroviário para o norte do país. Em paralelo à rodovia BR-163, a estrada de ferro pode potencializar os impactos socioambientais negativos na região, com danos diretos e indiretos a áreas naturais protegidas e ameaças a territórios indígenas.
      </Paragraph>
    </Container>
  </article>
);
