import React from 'react';
import styled from 'styled-components';

import EventsBackground from '../img/gallery/7361.jpg';

const Wrapper = styled.div`
  height: calc(100vh - 40px);
  background-image: url(${EventsBackground});
  background-size: cover;
  background-position: center;
`;
const Content = styled.div`
  background: rgba(256, 256, 256, 0.5);
  height: calc(100vh - 40px);
`;

class Events extends React.Component {
  eventsRef = React.createRef();
  componentDidMount() {
    this.props.refProp(this.eventsRef.current.offsetTop);
  }
  render() {
    return (
      <div>
        <Wrapper>
          <Content ref={this.eventsRef}>
            <span>Arrangementer & Selskaber</span>
          </Content>
        </Wrapper>
      </div>
    );
  }
}

export default Events;
