import React from 'react';
import styled from 'styled-components';
import { selskabsRef } from '../firebase';

import EventsBackground from '../img/gallery/7361.jpg';
import EventsBanner from '../img/5825.png';

const Wrapper = styled.div`
  min-height: calc(100vh);
  background-image: url(${EventsBackground});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  background: rgba(256, 256, 256, 0.5);
  min-height: calc(100vh);

  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;
const Selskaber = styled.div`
  background: rgba(256, 256, 256, 0.6);
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  padding: 0 0 20px 0;
  height: auto;
  & h2 {
    font-size: 32px;
    font-family: 'Dancing Script', cursive;
    font-weight: 400;
    margin: 20px 0;
    text-align: center;
  }
  & p {
    margin: 0;
    padding: 0;
  }
  display: flex;
  flex-direction: column;
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
const SelskabsBanner = styled.div`
  background-image: url(${EventsBanner});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 200px;
`;
const SelskabsText = styled.div`
  padding: 0px 0 0 30px;
  max-width: 50%;
  float: left;
`;
const SelskabsListe = styled.div`
  background: rgba(256, 256, 256, 0.8);
  border: 2px solid deepskyblue;
  margin: 0px 30px 0 0;
  border-radius: 3px;
  width: 30%;
  float: right;
  text-align: center;
  & h3 {
    font-size: 32px;
    font-family: 'Dancing Script', cursive;
    font-weight: 400;
    margin: 0;
  }
  & ul {
    margin: 0;
    padding: 0 0 10px 0;
  }
  & li {
    list-style-type: none;
  }
  @media (max-width: 767px) {
    font-size: 12px;
    & h3 {
      font-size: 20px;
    }
  }
`;
const Button = styled.button`
  display: inline-block;
  color: darkslategrey;
  font-size: 1em;
  margin: 15px;
  padding: 0.25em 1em;
  border: 2px solid skyblue;
  border-radius: 3px;
  display: block;
  cursor: pointer;
  &:hover {
    color: white;
    background: lightblue;
  }
`;
const SelskabsMenuer = styled.div`
  // min-height: 600px;

  padding: 20px;
  float: left;
  display: block;
  width: calc(100% - 40px);
  clear: both;
  & div.nav {
    width: 20%;
    height: auto;
    text-align: center;
    border: 2px solid deepskyblue;
    border-radius: 3px;
    background: rgba(256, 256, 256, 0.6);
    float: left;
    & h3 {
      margin: 10px 0 10px 0;
    }
    & ul {
      margin: 0 0 10px 0;
      padding: 0;
    }
    & li {
      padding: 10px 0;
      list-style-type: none;
    }
    & li:hover {
      background: rgba(0, 191, 255, 0.3);
      cursor: pointer;
    }
    @media (max-width: 767px) {
      width: 25%;
    }
  }
  & div.info {
    width: 75%;
    height: auto;
    background: rgba(256, 256, 256, 0.6);
    float: right;
    & h3 {
      margin: 10px 0 10px 10px;
    }
    & div.info1 {
      padding: 10px;
    }
    & div.indhold {
      padding: 20px;
      p {
        &:before {
          content: '• ';
        }
      }
    }
    & div.pris {
      padding: 10px;
      font-weight: 600;
    }
    & div.extra {
      padding: 10px;
    }
    @media (max-width: 767px) {
      width: 70%;
    }
  }
  @media (max-width: 767px) {
    padding: 5px;
    width: auto;
  }
`;
const EnterInput = styled.div`
  width: 200px;
`;
// const WelcomeText = styled.div`
//   max-width: 550px;
//   float: left;
//   & h2 {
//     font-family: 'Dancing Script', cursive;
//     font-weight: 400;
//   }

//   @media (max-width: 767px) {
//     max-width: 250px;
//     padding: 10px;
//     font-size: 12px;
//     & h2 {
//       margin-top: 0px;
//       font-size: 16px;
//     }
//   }
//   @media (max-width: 1024px) {
//     p {
//       margin: 5px;
//     }
//     & h2 {
//       margin: 10px 0 0 0;
//     }
//   }
// `;
// const WelcomeImage = styled.div`
//   max-width: 300px;
//   max-height: 400px;
//   margin: 20px 0 0 20px;
//   border: 2px solid deepskyblue;
//   width: 100%;
//   height: 100%;
//   border-radius: 3px;
//   float: right;
//   background-size: cover;
//   background-position: center;
//   @media (max-width: 1024px) {
//     max-width: 300px;
//     max-height: 400px;
//   }
//   @media (max-width: 767px) {
//     margin: 80px 10px 0 0;
//     width: 70px;
//     height: 120px;
//   }
// `;
// const Button = styled.button`
//   display: inline-block;
//   color: darkslategrey;
//   font-size: 1em;
//   margin: 5px;
//   padding: 0.25em 1em;
//   border: 2px solid skyblue;
//   border-radius: 3px;
//   display: block;
//   cursor: pointer;
//   &:hover {
//     color: white;
//     background: lightblue;
//   }
// `;

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSelskabsmenu: false,
      selskabsMenu: [],
      titel: '',
      info: '',
      indhold: '',
      pris: '',
      extra: '',
      selectedSelskabsMenu: 'Brunch Buffet',
    };
  }
  eventsRef = React.createRef();
  eventsBottomRef = React.createRef();
  componentDidMount() {
    // this.props.refProp(this.eventsRef.current.offsetTop);

    this.getSelskabsmenu();
  }

  getSelskabsmenu = async () => {
    await selskabsRef
      .collection('menu')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          // console.log(doc.id, '=>', doc.data());
          const newFood = {
            id: doc.id,
            titel: doc.data().titel,
            info: doc.data().info,
            indhold: doc.data().indhold,
            pris: doc.data().pris,
            extra: doc.data().extra,
            // pris: doc.data().pris,
          };

          this.setState({
            selskabsMenu: [newFood, ...this.state.selskabsMenu],
          });
          this.props.refProp(this.eventsRef.current.offsetTop);
        });
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });
  };

  addToDatabase = (e) => {
    e.preventDefault();
    try {
      let newDoc = {
        titel: this.state.titel,
        info: this.state.info,
        indhold: this.state.indhold,
        pris: this.state.pris,
        extra: this.state.extra,
      };

      selskabsRef
        .collection('menu')
        .add(newDoc)
        .then((ref) => {
          console.log('Added document with ID: ', ref.id);
        });
    } catch (err) {
      console.log(err);
    }
  };
  onTitelChange = (e) => {
    this.setState({
      titel: e.target.value,
    });
  };
  onInfoChange = (e) => {
    this.setState({
      info: e.target.value,
    });
  };
  onIndholdChange = (e) => {
    this.setState({
      indhold: e.target.value,
    });
  };
  onExtraChange = (e) => {
    this.setState({
      extra: e.target.value,
    });
  };
  onPrisChange = (e) => {
    this.setState({
      pris: e.target.value,
    });
  };
  showSelskabsmenu = () => {
    if (this.state.showSelskabsmenu) {
      this.setState({
        showSelskabsmenu: false,
      });
      this.props.contactProp(this.eventsBottomRef.current.offsetTop);
    } else {
      this.setState({
        showSelskabsmenu: true,
      });
      this.props.contactProp(
        this.eventsBottomRef.current.offsetTop +
          this.eventsRef.current.offsetHeight
      );
    }
  };
  selectSelskabsMenu = (e) => {
    console.log(e.currentTarget.id);
    this.setState({
      selectedSelskabsMenu: e.currentTarget.id,
    });
  };
  render() {
    return (
      <Wrapper ref={this.eventsRef}>
        <Content>
          <HeaderText>Selskaber i Restaurant Sejlklubben</HeaderText>
          <Selskaber>
            <SelskabsBanner></SelskabsBanner>
            <h2>Selskaber & Arrangementer</h2>
            <div>
              <SelskabsText>
                <p>
                  Hos Restaurant Sejlklubben har vi idylliske omgivelser og
                  kundevenligt personale til at tage hånd om dit næste
                  arrangement. Vores faste kundekreds bevidner om, at det er
                  stedet, hvor man kommer igen og igen. Restauranten er
                  beliggendende nær havnen i Randers og har derfor gode
                  parkeringsmuligheder. På vores terrasse ud til havnen, kan man
                  nyde synet over Randers Fjord mens man nyder sin brunch,
                  frokost, aftensmad eller kaffe.
                </p>
                <Button onClick={this.showSelskabsmenu}>Se Selskabsmenu</Button>
              </SelskabsText>
              <SelskabsListe>
                <h3>Arrangementer</h3>
                <ul>
                  <li>Morgenmadsmøde</li>
                  <li>Reception</li>
                  <li>Middag</li>
                  <li>Firmafest</li>
                  <li>Fyraftens-arrangement</li>
                  <li>Bisættelse-sarrangementer</li>
                  <li>Konfirmation</li>
                  <li>Fødselsdag</li>
                </ul>
              </SelskabsListe>
            </div>
            {
              // <EnterInput>
              //   <form action="submit">
              //     <input
              //       type="text"
              //       placeholder="titel"
              //       onChange={this.onTitelChange}
              //     />
              //     <textarea
              //       name=""
              //       id=""
              //       cols="30"
              //       rows="3"
              //       placeholder="info"
              //       onChange={this.onInfoChange}
              //     ></textarea>
              //     <textarea
              //       name=""
              //       id=""
              //       cols="30"
              //       rows="3"
              //       placeholder="indhold"
              //       onChange={this.onIndholdChange}
              //     ></textarea>
              //     <input
              //       type="text"
              //       placeholder="pris"
              //       onChange={this.onPrisChange}
              //     />
              //     <textarea
              //       name=""
              //       id=""
              //       cols="30"
              //       rows="3"
              //       placeholder="extra"
              //       onChange={this.onExtraChange}
              //     ></textarea>
              //     <button onClick={this.addToDatabase} type="submit">
              //       Add to DB
              //     </button>
              //   </form>
              // </EnterInput>
            }
            {this.state.showSelskabsmenu ? (
              <SelskabsMenuer>
                <div className="nav">
                  <h3>Selskabs menuer</h3>
                  <ul>
                    {
                      this.state.selskabsMenu.map((titel) => {
                        return (
                          <li
                            key={titel.titel}
                            id={titel.titel}
                            onClick={this.selectSelskabsMenu}
                          >
                            {titel.titel}
                          </li>
                        );
                      })
                      //   <li>Brunch Buffet</li>
                      //   <li>Frokost Buffet</li>
                      //   <li>Alm. Buffet</li>
                      //   <li>Luksus Buffet</li>
                      //   <li>Konfirmations Buffet</li>
                      //   <li>Mindehøjtidelighed</li>
                      //   <li>Drikkevarer</li>
                      //   <li>Selskabs info</li>
                    }
                  </ul>
                </div>
                <div className="info">
                  <div>
                    {this.state.selskabsMenu.map((menu) => {
                      return (
                        <div key={menu.id}>
                          {this.state.selectedSelskabsMenu === menu.titel ? (
                            <div key={menu.id}>
                              <h3>{menu.titel}</h3>
                              <div className="info1">
                                {menu.info
                                  ? menu.info
                                      .split('\n')
                                      .map((paragraph, idx) => {
                                        return <p key={idx}>{paragraph}</p>;
                                      })
                                  : ''}
                              </div>
                              <div className="indhold">
                                {menu.indhold
                                  ? menu.indhold
                                      .split('\n')
                                      .map((paragraph, idx) => {
                                        return <p key={idx}>{paragraph}</p>;
                                      })
                                  : ''}
                              </div>

                              <div className="pris">
                                {menu.pris ? 'Pris: ' : ''} {menu.pris}
                              </div>
                              <div className="extra">
                                {menu.extra
                                  ? menu.extra
                                      .split('\n')
                                      .map((paragraph, idx) => {
                                        return <p key={idx}>{paragraph}</p>;
                                      })
                                  : ''}
                              </div>
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </SelskabsMenuer>
            ) : null}
          </Selskaber>
        </Content>
        <div ref={this.eventsBottomRef}></div>
      </Wrapper>
    );
  }
}

export default Events;
