import styles from "../../components/layout/layout.module.scss";

import React, { ReactNode } from "react";
import { Layout, Typography } from "antd";

// import LayoutMenu from '@kaayu/components/layout/layout-menu';

const { Title } = Typography;
const { Content, Footer, Sider } = Layout;

interface LayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: LayoutProps) {
  return (
    <Layout>
      <Sider breakpoint="md" collapsedWidth="0">
        <div className={styles.logo}>
          <Title level={4} className={styles.title}>
            Blog home
          </Title>
        </div>
        {/* <LayoutMenu /> */}
      </Sider>
      <Layout className={styles.innerLayout}>
        <Content style={{ margin: "24px 16px 0" }}>
          <div className={styles.contentContainer}>{children}</div>
          <Footer style={{ textAlign: "center" }}>
            ©{new Date().getFullYear()} blog
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
}
