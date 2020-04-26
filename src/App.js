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
  position: relative;

  @media (max-width: 767px) {
    height: 150px;
    background-size: cover;
    // width: 100%;
  }
`;
const Title = styled.div`
  font-family: 'Dancing Script', cursive;
  font-weight: 400;
  margin: auto;
  font-size: 4em;
  left: 50%;
  right: 50%;
  width: 530px;
  margin-left: -265px;
  text-align: center;
  position: absolute;
  bottom: 80px;
  color: #ffffff;
  line-height: 0.8em;
  text-shadow: #000000 0 0 10px;
  text-align: center;
  @media (max-width: 767px) {
    margin-left: -150px;
    bottom: 40px;
    width: 300px;
    font-size: 30px;
  }
`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileMenu: false,
      homeDepth: 0,
      eventsDepth: 0,
      menucardDepth: 0,
      contactDepth: 0,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    // Set back to 0,0 when done
    // window.scrollTo(0, 0);
  }

  menuRef = (ref) => {
    this.setState({
      menucardDepth: ref - 40,
    });
    // console.log('menuDepth', ref);
  };
  eventsRef = (ref) => {
    this.setState({
      eventsDepth: ref - 40,
    });
    // console.log('eventsDepth', ref);
  };
  contactRef = (ref) => {
    this.setState({
      contactDepth: ref - 40,
    });
    // console.log('contactDepth', ref);
  };
  toggleMobileMenu = () => {
    if (!this.state.showMobileMenu) {
      this.setState({
        showMobileMenu: true,
      });
    } else {
      this.setState({
        showMobileMenu: false,
      });
    }
  };
  render() {
    return (
      <Wrapper>
        <BannerImg>
          <Title>Restaurant Sejlklubben</Title>
        </BannerImg>
        <Nav>
          <Navigation
            state={this.state}
            toggleMobileMenu={this.toggleMobileMenu}
          />
        </Nav>
        <Home depths={this.state} />
        <MenuKort refProp={this.menuRef} eventsProp={this.eventsRef} />
        <Events
          state={this.state}
          refProp={this.eventsRef}
          contactProp={this.contactRef}
        />
        <Contact refProp={this.contactRef} />
      </Wrapper>
    );
  }
}

export default App;
