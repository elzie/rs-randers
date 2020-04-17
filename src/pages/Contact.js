import React from 'react';
import styled from 'styled-components';

// import EventsBackground from '../img/gallery/7361.jpg';

const Wrapper = styled.div`
  height: calc(100vh - 40px);
  background-size: cover;
  background-position: center;
`;
const Content = styled.div`
  background: rgba(256, 256, 256, 0.5);
`;

class Contact extends React.Component {
  contactRef = React.createRef();
  componentDidMount() {
    this.props.refProp(this.contactRef.current.offsetTop);
  }
  render() {
    return (
      <div>
        <Wrapper>
          <Content ref={this.contactRef}>
            <span>Kontakt os ! :V</span>
          </Content>
        </Wrapper>
      </div>
    );
  }
}

export default Contact;
