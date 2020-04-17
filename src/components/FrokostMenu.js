import React from 'react';
import { frokostRef } from '../firebase';
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
  width: 340px !important;
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
class FrokostMenu extends React.Component {
  state = {
    showAlacarte: true,
    alacarte: [],
    showSmørrebrød: false,
    smørrebrød: [],
    showBørnemenu: false,
    børnemenu: [],
    showDesserter: false,
    desserter: [],
  };
  componentDidMount() {
    this.getAlacarte();
    this.getSmorrebrod();
    this.getBornemenu();
    this.getDesserter();
  }
  getAlacarte = async () => {
    await frokostRef
      .collection('alacarte')
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
            alacarte: [newFood, ...this.state.alacarte],
          });
        });
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });
  };
  getSmorrebrod = async () => {
    await frokostRef
      .collection('smørrebrød')
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
            smørrebrød: [newFood, ...this.state.smørrebrød],
          });
        });
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });
  };
  getBornemenu = async () => {
    await frokostRef
      .collection('børnemenu')
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
            børnemenu: [newFood, ...this.state.børnemenu],
          });
        });
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });
  };
  getDesserter = async () => {
    await frokostRef
      .collection('desserter')
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

  alacarteRef = React.createRef();
  smørrebrødRef = React.createRef();
  børnemenuRef = React.createRef();
  desserterRef = React.createRef();

  showChosenMenu = (ref) => {
    // console.log(ref.currentTarget.id);
    if (ref.currentTarget.id === 'alacarte') {
      //   console.log(ref.currentTarget.id);
      //   this.getAlacarte();
      this.setState({
        showAlacarte: true,
        showSmørrebrød: false,
        showBørnemenu: false,
        showDesserter: false,
      });
    }
    if (ref.currentTarget.id === 'smørrebrød') {
      //   console.log(ref.currentTarget.id);
      this.setState({
        showAlacarte: false,
        showSmørrebrød: true,
        showBørnemenu: false,
        showDesserter: false,
      });
    }
    if (ref.currentTarget.id === 'børnemenu') {
      //   console.log(ref.currentTarget.id);
      this.setState({
        showAlacarte: false,
        showSmørrebrød: false,
        showBørnemenu: true,
        showDesserter: false,
      });
    }
    if (ref.currentTarget.id === 'desserter') {
      //   console.log(ref.currentTarget.id);
      this.setState({
        showAlacarte: false,
        showSmørrebrød: false,
        showBørnemenu: false,
        showDesserter: true,
      });
    }
  };
  render() {
    return (
      <div>
        <Content>
          <SubMenuHeader>Frokost Menu</SubMenuHeader>
          <SubMenuContainer>
            <SubMenuNavigation>
              <SubMenuBtn onClick={this.showChosenMenu} id="alacarte">
                Á la carte
              </SubMenuBtn>
              <SubMenuBtn onClick={this.showChosenMenu} id="smørrebrød">
                Smørrebrød
              </SubMenuBtn>
              <SubMenuBtn onClick={this.showChosenMenu} id="børnemenu">
                Børnemenu
              </SubMenuBtn>
              <SubMenuBtn onClick={this.showChosenMenu} id="desserter">
                Desserter
              </SubMenuBtn>
            </SubMenuNavigation>
            {/* spacer */}
            {this.state.showAlacarte ? (
              <RetContainer>
                <SubMenu ref={this.alacarteRef}>
                  {this.state.alacarte.map((mad) => {
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
            ) : null}
            {/* spacer */}
            {this.state.showSmørrebrød ? (
              <div>
                <RetContainer>
                  <SubMenu ref={this.smørrebrødRef}>
                    {this.state.smørrebrød.map((mad) => {
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
            {/* spacer */}
            {this.state.showBørnemenu ? (
              <div>
                <RetContainer>
                  <SubMenu ref={this.børnemenuRef}>
                    {this.state.børnemenu.map((mad) => {
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

export default FrokostMenu;
