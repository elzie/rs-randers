import React from 'react';
import { drinksRef } from '../firebase';
import styled from 'styled-components';

const Content = styled.div`
  padding: 10px;
`;
const SubMenuHeader = styled.h2`
  font-family: 'Caveat', cursive;
  color: darkslategrey;
  text-align: center;
  font-size: 32px;
  margin: 0;
`;
const SubMenuContainer = styled.div`
  background: rgba(255, 245, 238, 0.5);
  //   height: 66vh;
  margin: 0 10px 0 10px;
`;
const SubMenu = styled.div``;
const SubMenuNavigation = styled.div``;
const SubMenuBtn = styled.button`
margin: 0;
    width: 25%;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    border: 1px solid lightgrey;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    background: rgba(0,191,255,0.2);
  }
`;
const RetContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Ret = styled.div`
  border-radius: 3px;
  width: 320px !important;
  //   float: left;
  display: block;
  //   min-height: 100px;
  margin: 5px !important;
  & h3 {
    font-size: 30px;
    text-align: center;
    font-family: 'Caveat', cursive;
    color: darkslategrey;
    margin: 0;
    padding: 0;
  }
  & div {
    font-size: 14px;
    text-align: center;
    margin: auto;
  }
`;
const Indhold = styled.div``;
const Pris = styled.div`
  font-weight: bold;
`;

class DrinksMenu extends React.Component {
  state = {
    drinks: [],
    showDrinks: true,
  };
  componentDidMount() {
    this.getDrinks();
  }

  getDrinks = async () => {
    await drinksRef
      .collection('avec')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          //   console.log(doc.id, '=>', doc.data());
          const newFood = {
            id: doc.id,
            titel: doc.data().titel,
            pris: doc.data().pris,
          };

          this.setState({
            drinks: [newFood, ...this.state.drinks],
          });
        });
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });
  };

  drinksRef = React.createRef();

  render() {
    return (
      <div>
        <Content>
          <SubMenuHeader>Drinks</SubMenuHeader>
          <SubMenuContainer>
            {/* spacer */}
            {this.state.showDrinks ? (
              <div>
                <RetContainer>
                  <SubMenu ref={this.drinksRef}>
                    {this.state.drinks.map((mad) => {
                      return (
                        <Ret key={mad.id}>
                          <h3>{mad.titel}</h3>
                          <Indhold>{mad.indhold}</Indhold>
                          <Pris>Pris: {mad.pris},-</Pris>
                        </Ret>
                      );
                    })}
                  </SubMenu>
                </RetContainer>
              </div>
            ) : null}
          </SubMenuContainer>
        </Content>
      </div>
    );
  }
}

export default DrinksMenu;
