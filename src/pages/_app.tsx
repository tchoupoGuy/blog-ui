import React,{useEffect} from "react";
// import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "../styles/global.scss";
import { Provider } from "react-redux";

import { configureStore } from "../store/configure-store";
import Layout from "../components/layout";
// import { initializeAuth } from "../modules/authentication/initialize-auth";
import WithAuth from "../modules/authentication/with-auth";
// import { MY_BLOG_ENV } from '../env';
import {TagAPI} from '../api/api'

const store = configureStore();


//npx browserslist --update-db`
export default function App(props: any) {
  const { Component, pageProps } = props;
 
  let newTag={name:'My tag'}

  useEffect(()=>{
    TagAPI.createTag('dc277a741508c43db21f6acebc4bcec95888d377',newTag)
  
  },[])
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
