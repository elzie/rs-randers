import React from 'react';
import styled from 'styled-components';

import FacebookLogo from '../img/social/facebook.png';

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
  @media (max-width: 360px) {
    display: block;
    & div.mobileMenu {
      display: block;
    }
    & ul {
      display: none;
    }
  }
`;
const TextMenu = styled.div`
  @media (max-width: 360px) {
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

  @media (max-width: 360px) {
    margin: 5px 5px 0 0;
  }
`;
const MenuBtn = styled.div`
  margin: 10px 0 0 10px;
  & div.btn-line {
    width: 28px;
    height: 3px;
    margin: 0 0 5px 0;
    background: white;
  }
`;

class Navigation extends React.Component {
  render() {
    return (
      <MenuContainer>
        <div className="mobileMenu">
          <MenuBtn>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
          </MenuBtn>
        </div>
        <TextMenu>
          <ul>
            <li>
              <a href="#">Velkommen</a>
            </li>
            <li>
              <a href="#">Arrangementer</a>
            </li>
            <li>
              <a href="#">Menukort</a>
            </li>
            <li>
              <a href="#">Galleri</a>
            </li>
            <li>
              <a href="#">Kontakt/Booking</a>
            </li>
          </ul>
        </TextMenu>

        <FbLogo></FbLogo>
      </MenuContainer>
    );
  }
}

export default Navigation;
