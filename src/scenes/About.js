import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import {
  injectIntl,
  intlShape,
  defineMessages,
  FormattedMessage
} from "react-intl";
import Page from "components/Page";
import Container from "components/blocks/Container";
import Paragraph from "components/blocks/Paragraph";
import Title from "components/blocks/Title";
import GeneralBlock from "components/blocks/GeneralBlock";
import "styles/about.css";
import RelatedNews from "components/RelatedNews";
import EndChapterAbout from "components/blocks/EndChapterAbout";
import { Link } from "react-router-dom";

const messages = defineMessages({
  title: {
    id: "about.title",
    defaultMessage: "About"
  },
  siteTitle: {
    id: "head.title",
    defaultMessage: "Looted Amazon"
  }
});

const Button = styled.div`
  widht:100%;
  margin-top:50px;
  text-align: center;
  a{
    margin:0 auto;
    font-family: 'Merriweather', serif;
    font-size: 0.5em;
    -webkit-letter-spacing: 0.1rem;
    -moz-letter-spacing: 0.1rem;
    -ms-letter-spacing: 0.1rem;
    letter-spacing: 0.1rem;
    display: inline-block;
    color: #000;
    border: 1px solid #000;
    text-align: center;
    padding: 0.75rem 1rem;
    font-weight: 600;
    width: 210px;
    text-transform: uppercase;
  }
`;

const About = ({ intl, lastPath }) => {
  const title = intl.formatMessage(messages.title);
  const siteTitle = intl.formatMessage(messages.siteTitle);
  return (
    <Page>
      <Helmet>
        <title>
          {title} | {siteTitle}
        </title>
      </Helmet>
      <section className="content">
        <Container>
          <Button>
            <div>
              {
                lastPath &&
                  <Link to={lastPath}>
                    <span className="fa fa-arrow-left" />
                    <FormattedMessage
                      id="about.close"
                      defaultMessage="Continue Reading"
                    />
                  </Link>
              }
            </div>
          </Button>
          <Paragraph big>
            <FormattedMessage
              id="about.intro"
              defaultMessage="Amazonia at a crossroads is an overview of the status of pressures and threats in the Protected Natural Areas and Indigenous Territories of six countries of the Amazon. The analysis and the examples presented are based on cartographic data of the publication - Pressures on and Threats to Protected Areas and Indigenous Territories in Amazonia 2018."
              values={{
                link: (
                  <strong>
                    <a href="https://www.amazoniasocioambiental.org/es/publicacion/presiones-y-amenazas-sobre-las-areas-protegidas-y-los-territorios-indigenas-de-la-amazonia-2/" target="_blank">
                      <FormattedMessage
                        id="text.link"
                        defaultMessage="Pressures on and Threats to Protected Areas and Indigenous Territories in Amazonia 2018."
                      />
                    </a>
                  </strong>
                )
              }}
            />
          </Paragraph>
          <Paragraph big>
            <FormattedMessage
              id="about.intro2"
              defaultMessage="Data can be downloaded from the site of {link2}"
              values={{
                link2: (
                  <strong>
                    <a href="https://www.amazoniasocioambiental.org/es/mapas/#descargas" target="_blank">RAISG</a>
                  </strong>
                )
              }}
            />
          </Paragraph>
          <Paragraph big>
            <FormattedMessage
              id="about.intro3"
              defaultMessage="This digital report published on 5 June 2019 was prepared under a partnership between:"
            />
          </Paragraph>
          <GeneralBlock>
              <img src={require('images/partners/raisg-p.png')} title='RAISG' alt='RAISG' style={{'margin':'0 2rem 0 0','height':'35px'}} align="left" />
              <img src={require('images/partners/infoamazonia-p.png')} title='Infoamazonia' alt='Infoamazonia' style={{'margin':0,'height':'41px'}} />
          </GeneralBlock>
          <GeneralBlock>
            <strong>
              <FormattedMessage
                id="about.pub_partners"
                defaultMessage="RAISG members"
              />
            </strong>
            <p>
            <img src={require('images/partners/ISA_min.png')} title='RAISG' alt='RAISG' style={{'margin':'0 2rem 0 0'}}  align="left" /> <img src={require('images/partners/ecociencia_min.png')} title='Ecociencia' alt='Ecociencia' style={{'margin':0}} align="left"/> <img src={require('images/partners/fan.png')} title='FAN' alt='FAN' style={{'margin':0}} align="left" /> <img src={require('images/partners/Gaia_min_png.png')} title='Gaia' alt='Gaia' style={{'margin':0}} align="left" /> <img src={require('images/partners/IBC_min_png.png')} title='IBC' alt='IBC' style={{'margin':0}} align="left" /> <img src={require('images/partners/Imazon_min_png.png')} title='Imazon' alt='Imazon' style={{'margin':0}} align="left" /> <img src={require('images/partners/provita_min_png.png')} title='Provita' alt='Provita' style={{'margin':0}} align="left"/> <img src={require('images/partners/Wataniba_min_png.png')} title='Wataniba' alt='Wataniba' style={{'margin':0}} /> 
            </p>
          </GeneralBlock>
          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.photos_videos"
                defaultMessage="InfoAmazonia Team"
              />
            </strong>
            <br />
              <FormattedMessage
                  id="about.editors"
                  defaultMessage="Editor"
                /> - Gustavo Faleiros<br />
              <FormattedMessage
                  id="about.editor_chief"
                  defaultMessage="Map and image editor"
                /> - Juliana Mori<br />
              <FormattedMessage
                  id="about.dev"
                  defaultMessage="Development and Web Design"
                /> - <a href="mailto:contato@studiocuboweb.com.br" target="_blank"> StudioCubo</a><br />
            </Paragraph>
            <Paragraph>
            <strong>
              <FormattedMessage
                id="about.fotos"
                defaultMessage="Cover photo"
              /> 
            </strong> - Izabela Stachowicz
            </Paragraph>
            <Paragraph>
            <strong>
              <FormattedMessage
                id="about.video"
                defaultMessage="Videos"
              />
            </strong>
              <FormattedMessage
                id="about.video2"
                defaultMessage=" (in order of appearance)"
              />  
            <br />
              <FormattedMessage
                  id="about.videos"
                  defaultMessage="1 CAAAP, 2 ODECOFROC, ORPIAN-P y MOCCIC"
                />
            </Paragraph>

          <Button>
            <div>
              {
                lastPath &&
                  <Link to={lastPath}>
                    <span className="fa fa-arrow-left" />
                    <FormattedMessage
                      id="about.close"
                      defaultMessage="Continue Reading"
                    />
                  </Link>
              }
            </div>
          </Button>
          <hr />
          <Paragraph small>
            <EndChapterAbout>
                <strong>
                  <FormattedMessage id="general.readMore" defaultMessage="Amazonia at the crossroads" />
                </strong>
              <RelatedNews
                title={
                  <FormattedMessage
                  id="about.more"
                  defaultMessage="Looted Amazon"
                  /> 
                    }
                    imageUrl={require("images/about-more.jpg")}
                    href={"https://saqueada.amazoniasocioambiental.org"}
              />
            </EndChapterAbout>
            <FormattedMessage
              id="about.license"
              defaultMessage="Copyright. To use text, image or data please contact {RAISG} and {INFO}"
              values={{
                RAISG: (
                  <strong>
                    <a href="mailto:raisgmail@socioambiental.org">RAISG</a>
                  </strong>
                ),
                INFO: (
                  <strong>
                    <a href="mailto:contact@infoamazonia.org">INFOAMAZONIA</a>
                  </strong>
                )
              }}
            />
          </Paragraph>
          
        </Container>
      </section>
    </Page>
  );
};

About.propTypes = {
  intl: intlShape.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    lastPath: state.context.lastPath
  };
};

export default injectIntl(connect(mapStateToProps, null)(About));