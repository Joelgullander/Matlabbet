import { Layout, Menu } from 'antd';
import Container from '../Container'
import Styles from './LayoutHeader.less';

const { Header } = Layout;

const LayoutHeader = ({}) => {
    return (
        <Header>
        <Container>
        <div className="logo" style={Styles.logo} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">Start</Menu.Item>
          <Menu.Item key="2">Veckans tips</Menu.Item>
          <Menu.Item key="3">Mina favoriter</Menu.Item>
        </Menu>
        </Container>
      </Header>
    )
}

export default LayoutHeader