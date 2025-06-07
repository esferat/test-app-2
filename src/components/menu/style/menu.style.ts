import styled from 'styled-components';
import { Menu, type MenuProps } from 'antd';

const StyledMenu = styled(Menu)<MenuProps>`
  background: #001529;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  & svg {
    width: 20px;
    height: 20px;
  }

  & .rotated-icon {
    animation-name: spin;
    animation-duration: 4000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

export { StyledMenu };
