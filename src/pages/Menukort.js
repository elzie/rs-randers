import React from 'react';
import styled from 'styled-components';
import MenuComponent from '../components/MenuComponent';

//Image imports
import MenuBackground from '../img/menucard.jpg';

const Wrapper = styled.div`
  min-height: 100vh;

  background-image: url(${MenuBackground});
  background-size: cover;
  background-position: center;
`;
const Content = styled.div`
  background: rgba(256, 256, 256, 0.5);
  min-height: 100vh;

  padding: 0 0 20px 0;
  & h1 {
    padding: 24px 0 0 0;
    color: #ffffff;
    font-size: 3em;
    font-weight: 400;
    line-height: 0.8em;
    text-shadow: #000000 0 0 20px;
    text-align: center;
    width: 100%;
    font-family: 'Dancing Script', cursive;
  }
  & div {
    max-width: 900px;
    margin: auto;
  }
  @media (max-width: 767px) {
    div {
    }
    & h1 {
      font-size: 24px;
    }
  }
`;
const HeaderText = styled.h1`
  // padding: 24px 0 0 0;
  color: #ffffff;
  font-size: 3em;
  font-weight: 400;
  line-height: 0.8em;
  text-shadow: #000000 0 0 20px;
  text-align: center;
  width: 100%;
  font-family: 'Dancing Script', cursive;
  @media (max-width: 767px) {
    font-size: 24px;
    // padding: 30px 0 10px 0;
  }
`;
class MenuKort extends React.Component {
  menuRef = React.createRef();
  menuBottomRef = React.createRef();
  componentDidMount() {
    this.props.refProp(this.menuRef.current.offsetTop);
    // this.props.eventsProp(this.menuBottomRef.current.offsetTop);
  }
  render() {
    return (
      <div ref={this.menuRef}>
        <Wrapper>
          <Content>
            <HeaderText>Restaurant Sejlklubben's Menukort</HeaderText>
            <div>
              <MenuComponent refProp={this.props.refProp} />
            </div>
          </Content>
        </Wrapper>
        <div ref={this.menuBottomRef}></div>
      </div>
    );
  }
}

export default MenuKort;
