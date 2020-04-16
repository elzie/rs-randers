import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  height: calc(100vh - 40px);
  width: 100vw;
`;

class MenuKort extends React.Component {
  render() {
    return (
      <Content>
        <span>Restaurant Sejlklubben's Menukort</span>
      </Content>
    );
  }
}

export default MenuKort;
