import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "../styles/global.scss";
import { Provider } from "react-redux";

import { configureStore } from "../store/configure-store";
import Layout from "../components/layout";
import { initializeAuth } from "../modules/authentication/initialize-auth";
import WithAuth from "../modules/authentication/with-auth";
// import { KAAYU_ENV } from '@kaayu/env';

const store = configureStore();

export default function App(props: any) {
  const { Component, pageProps } = props;
  return (
    <Provider store={store}>
      <WithAuth>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WithAuth>
    </Provider>
  );
}
