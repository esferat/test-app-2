import { Outlet } from 'react-router';
import Menu from '@components/menu/Menu.tsx';
import { Layout, theme } from 'antd';
import logo from '@/assets/logo.png';
import { LogoContainer } from '@pages/Root/styles/root.styles.ts';

const { Header, Sider, Content } = Layout;

const RootPage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: '100%' }}>
      <Sider>
        <LogoContainer>
          <img src={logo} alt={'logo'} />
        </LogoContainer>
        <Menu />
      </Sider>
      <Layout>
        <Header />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default RootPage;
