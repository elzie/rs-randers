import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
`;
const Background = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  height: calc(100% - 70px);
  visibility: visible;
  opacity: 0;
  transition: 0.3s;
  background: #000;
`;
const MenuButton = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  border: 0;
  background: transparent;
  border-radius: 0;
  height: 70px;
  width: 30px !important;
  cursor: pointer;
  pointer-events: auto;
  margin-left: 10px;

  &.close {
    transform: rotate(180deg);

    .icon-bar {
      // Line 1 - Rotate
      &:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }

      // Line 2 - Hide
      &:nth-child(2) {
        opacity: 0;
      }

      // Line 3 - Rotate
      &:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
      }
    }
  }
`;
const IconBar = styled.span`
  display: block;
  width: 28px;
  height: 3px;
  background: #fff;
  transition: 0.3s;
  margin: 2px 0 3px 0;
`;
const NavContent = styled.div`
  //   position: fixed;
  //   top: 220px;
  width: 100%;
  opacity: 0.9;
  visibility: hidden;
  background: deepskyblue;
  transform: translateX(-200%);
  transition: all 0.5s ease-in;
  height: 100vh !important;
  z-index: -1;
  &.show {
    visibility: visible;
    transform: translateX(0);
    transition: all 0.5s ease-out;
  }
`;
const MenuNav = styled.ul`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  float: left;
  width: 100%;
`;
const Menulink = styled.button`
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
class SlideMenu extends React.Component {
  mobileMenu = (e) => {
    this.props.toggleMenu();

    const noBodyScroll = document.querySelector('body');
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('#nav-content');
    const menuNav = document.querySelector('.menu-nav');

    if (this.props.state.showMobileMenu) {
      noBodyScroll.classList.toggle('noScroll');
      menuBtn.classList.toggle('close');
      menu.classList.toggle('show');
      menuNav.classList.toggle('show');
    } else {
      noBodyScroll.classList.toggle('noScroll');
      menuBtn.classList.toggle('close');
      menu.classList.toggle('show');
      menuNav.classList.toggle('show');
    }
  };
  gotoTop = () => {
    this.mobileMenu();
    window.scrollTo(0, 0);
    console.log(this.props.state);
  };
  gotoMenucard = () => {
    this.mobileMenu();
    window.scrollTo(0, this.props.state.menucardDepth);
  };
  gotoEvents = () => {
    this.mobileMenu();
    window.scrollTo(0, this.props.state.eventsDepth);
  };
  gotoContact = () => {
    this.mobileMenu();
    window.scrollTo(0, this.props.state.contactDepth);
  };
  render() {
    return (
      <NavContainer>
        <Background className="bg"></Background>
        <MenuButton onClick={this.mobileMenu} className="menu-btn">
          <IconBar className="icon-bar"></IconBar>
          <IconBar className="icon-bar"></IconBar>
          <IconBar className="icon-bar"></IconBar>
        </MenuButton>
        <NavContent id="nav-content">
          <MenuNav className="menu-nav">
            <li>
              <Menulink onClick={this.gotoTop}>Home</Menulink>
            </li>
            <li>
              <Menulink onClick={this.gotoMenucard}>Menukort</Menulink>
            </li>
            <li>
              <Menulink onClick={this.gotoEvents}>Selskaber</Menulink>
            </li>
            <li>
              <Menulink onClick={this.gotoContact}>Booking & Kontakt</Menulink>
            </li>
          </MenuNav>
        </NavContent>
      </NavContainer>
    );
  }
}

export default SlideMenu;
