import App from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'
import { Layout, Menu } from 'antd';
const { Content } = Layout;
import '../assets/antd.less';

class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Provider store={reduxStore}>
        <Layout className="layout">
          <Header />
            <Content>
              <Component {...pageProps} />
            </Content>
          <Footer />
        </Layout>
      </Provider>
    )
  }
}

export default withReduxStore(MyApp)
