import React from 'react';
import './App.css';
import styled from 'styled-components';
import Navigation from './components/Navigation';

import BannerImg1 from './img/rest_sejlklubben_banner1.jpg';

// Page Imports
import Home from './pages/Home';
import Events from './pages/Events';
import MenuKort from './pages/Menukort';
import Contact from './pages/Contact';

const Wrapper = styled.div`
  background: seashell;
`;
const Nav = styled.div`
  justify-content: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;
const BannerImg = styled.div`
  background-image: url(${BannerImg1});
  background-position: center;
  height: 275px;

  @media (max-width: 360px) {
    height: 150px;
    background-size: cover;
    // width: 100%;
  }
`;
class App extends React.Component {
  state = {
    homeDepth: 0,
    eventsDepth: 0,
    menucardDepth: 0,
    contactDepth: 0,
  };
  componentDidMount() {
    window.scrollTo(0, 947 - 40);
    // Set back to 0,0 when done
    // window.scrollTo(0, 0);
  }

  eventsRef = (ref) => {
    console.log('eventsDepth', ref);
    this.setState({
      eventsDepth: ref - 40,
    });
  };

  menuRef = (ref) => {
    console.log('menuDepth', ref);
    this.setState({
      menucardDepth: ref - 40,
    });
  };

  contactRef = (ref) => {
    console.log('contactDepth', ref);
    this.setState({
      contactDepth: ref - 40,
    });
  };

  render() {
    return (
      <Wrapper>
        <BannerImg></BannerImg>
        <Nav>
          <Navigation depths={this.state} refProp={this.eventsRef} />
        </Nav>
        <Home depths={this.state} refProp={this.eventsRef} />
        <MenuKort refProp={this.menuRef} />
        <Events refProp={this.eventsRef} />
        <Contact refProp={this.contactRef} />
      </Wrapper>
    );
  }
}

export default App;
