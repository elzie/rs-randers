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
  margin: 10px;
`;
const SubMenuContainer = styled.div`
  background: rgba(255, 245, 238, 0.5);
  height: 66vh;
  margin: 0 10px 0 10px;
`;
const SubMenu = styled.div``;
const SubMenuNavigation = styled.div`
  & div {
    display: inline-block;
    padding: 10px;
    cursor: pointer;
  }
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
    const alacarte = frokostRef
      .collection('alacarte')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
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
  }

  alacarteRef = React.createRef();
  smørrebrødRef = React.createRef();
  børnemenuRef = React.createRef();
  desserterRef = React.createRef();

  showChosenMenu = (ref) => {
    // console.log(ref.currentTarget.id);
    if (ref.currentTarget.id === 'alacarte') {
      //   console.log(ref.currentTarget.id);
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
              <div onClick={this.showChosenMenu} id="alacarte">
                alacarte
              </div>
              <div onClick={this.showChosenMenu} id="smørrebrød">
                Smørrebrød
              </div>
              <div onClick={this.showChosenMenu} id="børnemenu">
                Børnemenu
              </div>
              <div onClick={this.showChosenMenu} id="desserter">
                Desserter
              </div>
            </SubMenuNavigation>
            {/* spacer */}
            {this.state.showAlacarte ? (
              <div>
                <SubMenu ref={this.alacarteRef}>
                  AlaCarte
                  {this.state.alacarte.id}
                  {this.state.alacarte.map((mad) => {
                    return (
                      <div key={mad.id}>
                        <div>{mad.titel}</div>
                        <div>{mad.indhold}</div>
                        <div>{mad.pris}</div>
                        <br />
                      </div>
                    );
                  })}
                </SubMenu>
              </div>
            ) : null}
            {/* spacer */}
            {this.state.showSmørrebrød ? (
              <div>
                <SubMenu ref={this.smørrebrødRef}>Smørrebrød</SubMenu>
              </div>
            ) : null}
            {/* spacer */}
            {this.state.showBørnemenu ? (
              <div>
                <SubMenu ref={this.børnemenuRef}>Børnemenu</SubMenu>
              </div>
            ) : null}
            {/* spacer */}
            {this.state.showDesserter ? (
              <div>
                <SubMenu ref={this.desserterRef}>Desserter</SubMenu>
              </div>
            ) : null}
          </SubMenuContainer>
        </Content>
      </div>
    );
  }
}

export default FrokostMenu;
