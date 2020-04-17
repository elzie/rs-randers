import React from 'react';
import styled from 'styled-components';
import MenuComponent from '../components/MenuComponent';

//Image imports
import MenuBackground from '../img/menucard.jpg';

const Wrapper = styled.div`
  height: calc(100vh - 40px);
  background-image: url(${MenuBackground});
  background-size: cover;
  background-position: center;
`;
const Content = styled.div`
  background: rgba(256, 256, 256, 0.5);
  height: calc(100vh - 40px);
  padding: 10px 0 0 0;
  & h1 {
    color: #ffffff;
    font-size: 3em;
    font-weight: 700;
    line-height: 0.8em;
    text-shadow: #000000 0 0 20px;
    text-align: center;
    width: 100%;
    font-family: 'Dancing Script', cursive;
    // font-family: 'Euphoria Script', cursive;
  }
  & div {
    max-width: 900px;
    margin: auto;
  }
  @media (max-width: 1024px) {
    padding: 10px 0 0 0;
    & h1 {
      margin: 15px;
    }
  }
`;
class MenuKort extends React.Component {
  menuRef = React.createRef();
  componentDidMount() {
    this.props.refProp(this.menuRef.current.offsetTop);
  }
  render() {
    return (
      <div ref={this.menuRef}>
        <Wrapper>
          <Content>
            <h1>Restaurant Sejlklubben's Menukort</h1>
            <div>
              <MenuComponent />
            </div>
          </Content>
        </Wrapper>
      </div>
    );
  }
}

export default MenuKort;
