import React, { Component } from 'react';
import { Box, Header, H1, H2, Span, A } from 'styled-system-html';

class SiteHeader extends Component {
  render() {
    return (
      <Header align="center" p={4} bg="purple" color="white">
        <H1 f={7}>
          <Span color="purple4" f={6} position="relative" px={4} style={{top:'-8px'}}>&lt;</Span>
          Styled Starter
          <Span color="purple4" f={6} position="relative" px={4} style={{top:'-8px'}}>/&gt;</Span>
        </H1>
        <Box mw="800px" mx="auto" pb={3}>
          <H2 f={3} p={3} color="purple2">Powered by React, Next.js, Styled System and Styleguidist</H2>
          <H2 f={3} p={3} color="purple2">Includes a design theme, built-in styleguide and browser testing</H2>
        </Box>
      </Header>
    );
  }
}

export default SiteHeader;
