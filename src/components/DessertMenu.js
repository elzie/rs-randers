import React from 'react';
import { dessertRef } from '../firebase';
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

class DessertMenu extends React.Component {
  state = {
    showKaffe: true,
    kaffe: [],
    showDesserter: false,
    desserter: [],
  };
  componentDidMount() {
    this.getDesserter();
    this.getKaffe();
  }

  getKaffe = async () => {
    await dessertRef
      .collection('kaffe')
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
            kaffe: [newFood, ...this.state.kaffe],
          });
        });
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });
  };
  getDesserter = async () => {
    await dessertRef
      .collection('Dessert')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          //   console.log(doc.id, '=>', doc.data());
          const newFood = {
            id: doc.id,
            titel: doc.data().titel,
            indhold: doc.data().indhold,
            pris: doc.data().pris,
          };

          this.setState({
            desserter: [newFood, ...this.state.desserter],
          });
        });
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });
  };

  kaffeRef = React.createRef();
  desserterRef = React.createRef();

  showChosenMenu = (ref) => {
    // console.log(ref.currentTarget.id);
    if (ref.currentTarget.id === 'kaffe') {
      //   console.log(ref.currentTarget.id);
      this.setState({
        showKaffe: true,
        showDesserter: false,
      });
    }
    if (ref.currentTarget.id === 'desserter') {
      //   console.log(ref.currentTarget.id);
      this.setState({
        showKaffe: false,
        showDesserter: true,
      });
    }
  };
  render() {
    return (
      <div>
        <Content>
          <SubMenuHeader>Kaffe & Dessert</SubMenuHeader>
          <SubMenuContainer>
            <SubMenuNavigation>
              <SubMenuBtn disabled>&nbsp;</SubMenuBtn>
              <SubMenuBtn onClick={this.showChosenMenu} id="kaffe">
                Kaffe
              </SubMenuBtn>
              <SubMenuBtn onClick={this.showChosenMenu} id="desserter">
                Desserter
              </SubMenuBtn>
              <SubMenuBtn disabled>&nbsp;</SubMenuBtn>
            </SubMenuNavigation>
            {/* spacer */}
            {this.state.showKaffe ? (
              <RetContainer>
                <SubMenu ref={this.kaffeRef}>
                  {this.state.kaffe.map((mad) => {
                    return (
                      <Ret key={mad.id}>
                        <h3>{mad.titel}</h3>
                        <Pris>Pris: {mad.pris},-</Pris>
                      </Ret>
                    );
                  })}
                </SubMenu>
              </RetContainer>
            ) : null}
            {/* spacer */}
            {this.state.showDesserter ? (
              <div>
                <RetContainer>
                  <SubMenu ref={this.desserterRef}>
                    {this.state.desserter.map((mad) => {
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

export default DessertMenu;
