import App from "next/app";
import React from "react";
import Page from "../components/Page";
import { usePageTracking } from "../components/ga";
import Router from "next/router";
import withGA from "next-ga";


class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    );
  }
}
export default withGA("UA-150977759-1", Router)(MyApp);
