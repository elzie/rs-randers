import React from 'react';
import styled from 'styled-components';

import EventsBackground from '../img/gallery/7361.jpg';

const Wrapper = styled.div`
  height: calc(100vh - 40px);
  width: 100vw;
  background-image: url(${EventsBackground});
  background-size: cover;
  background-position: right;
`;
const Content = styled.div``;
class Events extends React.Component {
  render() {
    return (
      <Wrapper>
        <Content>
          <span>Arrangementer & Selskaber</span>
        </Content>
      </Wrapper>
    );
  }
}

export default Events;
