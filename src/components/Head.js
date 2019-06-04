import React from "react";
import { withRouter } from "react-router-dom";
import { injectIntl, intlShape, defineMessages } from "react-intl";
import { Helmet } from "react-helmet";

const messages = defineMessages({
  title: {
    id: "head.title",
    defaultMessage: "Amazonia at the crossroads"
  },
  description: {
    id: "head.description",
    defaultMessage:
      "Recent analysis from six countries show the conflict between the vision of economic development and the rights of indigenous territories and conservation of protected areas"
  },
  keywords: {
    id: "head.keywords",
    defaultMessage: "Amazonia, crossroads"
  }
});

class Head extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { intl, location } = this.props;
    const title = intl.formatMessage(messages.title);
    const description = intl.formatMessage(messages.description);
    const keywords = intl.formatMessage(messages.keywords);
    const url = process.env.SITE_URL || "";
    return (
      <Helmet>
        <html lang={intl.locale} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={`${url}${location.pathname}`} />
        <meta property="og:url" content={`${url}${location.pathname}`} />
        {/* <meta
          property="og:image"
          content={`${url}${require("images/facebook-poster.jpg")}`}
        /> */}
      </Helmet>
    );
  }
}

Head.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(withRouter(Head));
