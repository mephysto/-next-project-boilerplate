import App from "next/app";
import React from "react";
import Page from "../components/Page";
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
    console.log("i am appjs", process.env.REACT_APP_TRACKINGID);
    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    );
  }
}
export default withGA(process.env.REACT_APP_TRACKINGID, Router)(MyApp);
