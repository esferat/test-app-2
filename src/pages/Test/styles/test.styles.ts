import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #3f4160;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 20px 35%;
`;

const FirstRow = styled.div`
  background-color: #607b5c;
`;

const SecondRow = styled.div`
  background-color: #421d5b;
`;

const ThirdRow = styled.div`
  background-color: #770909;
`;

export { Wrapper, FirstRow, SecondRow, ThirdRow };
