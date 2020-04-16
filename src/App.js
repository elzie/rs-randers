import React from 'react';
import './App.css';
import styled from 'styled-components';
import Navigation from './components/Navigation';

// Page Imports
import Home from './pages/Home';
import Events from './pages/Events';
import Menukort from './pages/Menukort';

// Image imports
import BannerImg1 from './img/rest_sejlklubben_banner1.jpg';

const Wrapper = styled.div`
  background: seashell;
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  @media (max-width: 360px) {
    // width: 100vw;
  }
`;
const BannerImg = styled.div`
  background-image: url(${BannerImg1});
  background-position: center;
  height: 275px;
  width: 100vw;
  @media (max-width: 360px) {
    height: 150px;
    background-size: cover;
    // width: 100%;
  }
`;
const Nav = styled.div`
  background: deepskyblue;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  & div {
    width: 100%;
    max-width: 900px;
    height: 40px;
  }
  @media (max-width: 360px) {
    display: block;
  }
`;
const Contents = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;

  @media (max-width: 360px) {
    & div {
      // width: 100%;
    }
  }
`;
class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <div>
          <BannerImg></BannerImg>
          <Nav>
            <div>
              <Navigation />
            </div>
          </Nav>
          <Contents>
            <div>
              <Home />
              <Events />
              <Menukort />
            </div>
          </Contents>
        </div>
      </Wrapper>
    );
  }
}

export default App;
