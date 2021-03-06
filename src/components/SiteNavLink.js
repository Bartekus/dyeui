import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, A } from 'styled-system-html';

import Link from 'next/link';

class SiteNavLink extends Component {
  render() {
    return (
      <Box p={ 3 }>
        {
          this.props.isCurrent ? (
            <Text color="white">{ this.props.text }</Text>
          ) : (
            <Link href={ this.props.url } as={ process.env.BACKEND_URL + this.props.url }>
              <A color="white" style={ { textDecoration: 'none', opacity: .5 } } href={ this.props.url }>{ this.props.text }</A>
            </Link>
          )
        }
      </Box>
    );
  }
}

SiteNavLink.propTypes = {
  isCurrent: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SiteNavLink;
