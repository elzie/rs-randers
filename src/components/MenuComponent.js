import React from 'react';
import styled from 'styled-components';

import FrokostMenu from './FrokostMenu';
import AftenMenu from './AftenMenu';
import DrinksMenu from './DrinksMenu';
import DessertMenu from './DessertMenu';

// const menus = {
//   // You might wanna use firestore here :p
//   frokost: {
//     alacarte: {},
//     smørrebrød: {},
//     børnemenu: {},
//     desserter: {},
//   },
//   aften: {},
//   drinks: {},
//   dessert: {},
// };

const Background = styled.div`
  background: rgba(256, 256, 256, 0.5);
  height: 80vh;
`;
const Button = styled.button`
  background: rgba(0, 191, 255, 0.3);
  color: darkslategrey;
  font-family: 'Caveat', cursive;
  font-size: 22px;
  width: 25%;
  cursor: pointer;
  border: 1px solid white;
  &:focus {
    outline: none;
  }
  &:hover {
    background: rgba(256, 256, 256, 0.8);
  }
`;
const Menus = styled.div``;
class MenuComponent extends React.Component {
  state = {
    showFrokost: true,
    showAften: false,
    showDrinks: false,
    showDessert: false,
  };

  frokostRef = React.createRef();
  aftenRef = React.createRef();
  drinksRef = React.createRef();
  dessertRef = React.createRef();

  showChosenMenu = (ref) => {
    // console.log(ref.currentTarget.id);
    if (ref.currentTarget.id === 'frokost') {
      //   console.log(ref.currentTarget.id);
      this.setState({
        showFrokost: true,
        showAften: false,
        showDrinks: false,
        showDessert: false,
      });
    }
    if (ref.currentTarget.id === 'aften') {
      //   console.log(ref.currentTarget.id);
      this.setState({
        showFrokost: false,
        showAften: true,
        showDrinks: false,
        showDessert: false,
      });
    }
    if (ref.currentTarget.id === 'drinks') {
      //   console.log(ref.currentTarget.id);
      this.setState({
        showFrokost: false,
        showAften: false,
        showDrinks: true,
        showDessert: false,
      });
    }
    if (ref.currentTarget.id === 'dessert') {
      //   console.log(ref.currentTarget.id);
      this.setState({
        showFrokost: false,
        showAften: false,
        showDrinks: false,
        showDessert: true,
      });
    }
  };
  render() {
    return (
      <div>
        <Background>
          <div>
            <Button
              ref={this.frokostRef}
              id="frokost"
              onClick={this.showChosenMenu}
            >
              Frokost menu
            </Button>
            <Button
              ref={this.aftenRef}
              id="aften"
              onClick={this.showChosenMenu}
            >
              Aften menu
            </Button>
            <Button
              ref={this.drinksRef}
              id="drinks"
              onClick={this.showChosenMenu}
            >
              Drinks
            </Button>
            <Button id="dessert" onClick={this.showChosenMenu}>
              Dessert, Kaffe & Avec
            </Button>
          </div>
          <Menus>
            {this.state.showFrokost ? <FrokostMenu /> : null}
            {this.state.showAften ? <AftenMenu /> : null}
            {this.state.showDrinks ? <DrinksMenu /> : null}
            {this.state.showDessert ? <DessertMenu /> : null}
          </Menus>
        </Background>
      </div>
    );
  }
}

export default MenuComponent;
