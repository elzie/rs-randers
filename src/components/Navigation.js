import React from 'react';
import styled from 'styled-components';
import SlideMenu from './SlideMenu';
//Image imports
import FacebookLogo from '../img/social/facebook.png';

const Wrapper = styled.div``;
const Nav = styled.div`
  background: deepskyblue;
  // width: 100%;
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
  @media (max-width: 767px) {
    display: block;
  }
`;
const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  & div {
    float: left;
  }
  & ul {
    margin: 0;
    padding: 0;
    // width: 760px;
  }
  & li {
    display: inline-block;
    margin: 0;
    height: 40px;
  }
  & a {
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    line-height: 40px;
    height: 40px;
  }
  & a:hover {
    color: darkslategrey;
    background-color: skyblue;
  }
  & div.mobileMenu {
    display: none;
    float: left;
    width: 40px;

    // background: green;
  }
  @media (max-width: 767px) {
    display: block;
    & div.mobileMenu {
      display: block;
    }
    & ul {
      // display: none;
    }
  }
`;
const TextMenu = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;
const FbLogo = styled.div`
  width: 30px !important;
  height: 30px !important;
  background-image: url(${FacebookLogo});
  background-size: cover;
  background-position: center;
  border-radius: 30px;
  float: right !important;
  cursor: pointer;
  margin: 0 10px 0 0;

  @media (max-width: 767px) {
    margin: 5px 5px 0 0;
  }
`;
const MobileMenuBtn = styled.div`
  margin: 10px 0 0 10px;
  & div.btn-line {
    width: 28px;
    height: 3px;
    margin: 0 0 5px 0;
    background: white;
  }
`;
const MenuButton = styled.button`
  font-size: 16px;
  background: deepskyblue;
  cursor: pointer;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  height: 40px;
  border: 0px;
  &:hover {
    color: darkslategrey;
    background-color: skyblue;
  }
  &:focus {
    outline: none;
  }
  &:active {
    color: darkslategrey;
    background-color: skyblue;
  }
`;
class Navigation extends React.Component {
  gotoTop = () => {
    window.scrollTo(0, 0);
  };
  gotoMenucard = () => {
    window.scrollTo(0, this.props.state.menucardDepth);
  };
  gotoEvents = () => {
    window.scrollTo(0, this.props.state.eventsDepth);
  };
  gotoContact = () => {
    window.scrollTo(0, this.props.state.contactDepth);
  };

  render() {
    return (
      <Wrapper>
        <Nav>
          <MenuContainer>
            <div className="mobileMenu">
              <SlideMenu
                toggleMenu={this.props.toggleMobileMenu}
                state={this.props.state}
              />
            </div>
            <TextMenu>
              <ul>
                <li>
                  <MenuButton onClick={this.gotoTop}>Velkommen</MenuButton>
                </li>
                <li>
                  <MenuButton onClick={this.gotoMenucard}>Menukort</MenuButton>
                </li>
                <li>
                  <MenuButton onClick={this.gotoEvents}>Selskaber</MenuButton>
                </li>
                <li>
                  <MenuButton onClick={this.gotoContact}>
                    Booking & Kontakt
                  </MenuButton>
                </li>
              </ul>
            </TextMenu>

            <FbLogo></FbLogo>
          </MenuContainer>
        </Nav>
      </Wrapper>
    );
  }
}

export default Navigation;
