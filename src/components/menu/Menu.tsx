import type { MenuProps } from 'antd';
import { useState } from 'react';
import { NavLink } from 'react-router';
import { BgColorsOutlined, BugOutlined, HomeOutlined } from '@ant-design/icons';
import { ReactComponent as ReactLogo } from '@/assets/react.svg';
import { StyledMenu } from '@components/menu/style/menu.style.ts';

const items: MenuProps['items'] = [
  {
    key: 'home',
    label: <NavLink to={'/'}>Home</NavLink>,
    icon: <HomeOutlined />,
  },
  {
    key: 'test',
    label: <NavLink to={'/test'}>Test</NavLink>,
    icon: <BugOutlined />,
  },
  {
    key: 'gradient',
    label: <NavLink to={'/gradient'}>Gradient</NavLink>,
    icon: <BgColorsOutlined />,
  },
  {
    key: 'components',
    label: <NavLink to={'/components'}>Components</NavLink>,
    icon: <ReactLogo className={'rotated-icon'} />,
  },
];

const Menu = () => {
  const [current, setCurrent] = useState(window.location.pathname.replace('/', '') || 'home');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <StyledMenu
      theme={'dark'}
      onClick={onClick}
      defaultOpenKeys={['home']}
      selectedKeys={[current]}
      mode={'vertical'}
      items={items}
    />
  );
};

export default Menu;
