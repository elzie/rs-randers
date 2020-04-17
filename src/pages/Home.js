import React from 'react';
import styled from 'styled-components';

//Image imports
// import BannerImg1 from '../img/rest_sejlklubben_banner1.jpg';
import GreetingImage from '../img/gallery/7354.jpg';

const Content = styled.div`
  height: calc(100vh - 305px);

  background: seashell;
  @media (max-width: 360px) {
    height: calc(100vh - 190px);
  }
`;
const Welcome = styled.div`
  margin: auto;
  max-width: 900px;
  height: calc(100vh - 305px);
  @media (max-width: 360px) {
    width: 100vw;
  }
`;
const WelcomeText = styled.div`
  max-width: 550px;
  float: left;
  & h2 {
    font-family: 'Dancing Script', cursive;
    font-weight: 400;
  }

  @media (max-width: 360px) {
    max-width: 250px;
    padding: 10px;
    font-size: 12px;
    & h2 {
      margin-top: 0px;
      font-size: 16px;
    }
  }
  @media (max-width: 1024px) {
    p {
      margin: 5px;
    }
    & h2 {
      margin: 10px 0 0 0;
    }
  }
`;
const WelcomeImage = styled.div`
  max-width: 300px;
  max-height: 400px;
  margin: 20px 0 0 20px;
  border: 2px solid deepskyblue;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  float: right;
  background-image: url(${GreetingImage});
  background-size: cover;
  background-position: center;
  @media (max-width: 1024px) {
    max-width: 300px;
    max-height: 400px;
  }
  @media (max-width: 360px) {
    margin: 80px 10px 0 0;
    width: 70px;
    height: 120px;
  }
`;
const Button = styled.button`
  display: inline-block;
  color: darkslategrey;
  font-size: 1em;
  margin: 5px;
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

class Home extends React.Component {
  scrollToEvents = () => {
    window.scrollTo(0, this.props.depths.eventsDepth);
  };
  scrollToMenu = () => {
    window.scrollTo(0, this.props.depths.menucardDepth);
  };
  render() {
    return (
      <div>
        <Content>
          <Welcome>
            <WelcomeText>
              <h2>Velkommen til Restaurant Sejlklubben i Randers</h2>
              <p>
                Restaurant Sejlklubben er en hyggelig restaurant, med lækker
                udsigt og første parket til vandet med fantastisk udsigt fra
                alle borde og unikke udeserverings faciliteter.
              </p>
              <p>
                Vores menukort består hovedsageligt af gode klassiske retter,
                inspireret af international køkkenkunst - kombineret med gode
                råvarer leveret frisk hver dag fra lokale leverandører. Vi
                opdaterer det naturligvis ud fra hver sæson og årstid.
              </p>
              <Button onClick={this.scrollToMenu}>Læs vores menukort</Button>
              <h2>Arrangementer og selskaber</h2>
              <p>
                Vi hjælper gerne med private arrangementer - med alt fra
                firmafester, barnedåb, konfirmationer, bryllup, receptioner,
                tema fester, bisættelser osv.
              </p>
              <Button onClick={this.scrollToEvents}>Læs mere her</Button>
              <p>
                Ellers kan du kontakte på Tlf. 8641 8495 for yderligere
                information.
              </p>
            </WelcomeText>
            <WelcomeImage></WelcomeImage>
          </Welcome>
        </Content>
      </div>
    );
  }
}

export default Home;
