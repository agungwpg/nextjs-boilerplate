import React from 'react'
import App, {Container} from 'next/app'

import LayoutOne from "../layouts/LayoutOne";

class _App extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
          <Container>
            <LayoutOne>
              <Component {...pageProps} />
            </LayoutOne>
          </Container>
        );
    }
}

export default _App