import React from 'react';
import styled from 'styled-components';
import { bookingRef } from '../firebase';
import BookingComponent from '../components/BookingComponent';
import ContactBackground from '../img/kontakt_bg.jpg';

const Wrapper = styled.div`
  min-height: calc(100vh);
  background-image: url(${ContactBackground});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  background: rgba(256, 256, 256, 0.3);
  min-height: calc(100vh);
  padding: 0;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    // height: calc(100vh - 190px);
  }
`;

const HeaderText = styled.h1`
  padding: 24px 0 0 0;
  color: #ffffff;
  font-size: 3em;
  font-weight: 400;
  line-height: 0.8em;
  text-shadow: #000000 0 0 20px;
  text-align: center;
  width: 100%;
  font-family: 'Dancing Script', cursive;
  @media (max-width: 767px) {
    font-size: 32px;
    // padding: 30px 20px 0px 20px;
  }
`;
const Container = styled.div`
  background: rgba(256, 256, 256, 0.6);
  margin: 0 auto;
  max-width: 900px;
  display: flex;
  // display: flex-column;
  // justify-content: center;
  height: auto;
  @media (max-width: 767px) {
    display: block;
  }
`;
const ContactInfo = styled.div`
  padding: 15px;
  // max-width: 50%;
  // float: left;
  margin: 10px;
  @media (max-width: 767px) {
    margin: auto;
    text-align: center;
  }
`;
const OBS = styled.div`
  background: rgba(256, 256, 256, 0.8);
  border: 2px solid deepskyblue;
  margin: 50px 30px 0 0;
  padding: 10px;
  border-radius: 3px;
  width: 45%;
  float: left;
  text-align: center;
  @media (max-width: 767px) {
    float: none;
    margin: 10px auto;
    text-align: center;
  }
`;
const BookingBox = styled.div`
  // width: 50%;
  // float: left;
  margin: 20px;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 767px) {
    margin: auto;
    text-align: center;
    float: none;
    display: block;
    & input {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
const BookingTable = styled.table`
  margin: 10px auto;
  & tr:first-child {
    font-weight: bold;
  }
  & td {
    background: rgba(256, 256, 256, 0.6);

    border-spacing: 6px 4px;
    padding: 5px;
  }
  & td:last-child {
    text-align: right;
  }
  @media (max-width: 767px) {
    visibility: hidden;
    display: none;
  }
`;

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
    };
  }
  contactRef = React.createRef();
  componentDidMount() {
    this.getBookings();
  }
  getBookings = async () => {
    await bookingRef
      .orderBy('bookedDate', 'desc')
      .limit(10)
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            const doc = change.doc;
            const booking = {
              id: doc.id,
              bookedDate: doc.data().bookedDate,
              guestCount: doc.data().guestCount,
              guestName: doc.data().guestName,
              guestEmail: doc.data().guestEmail,
              mobileNumber: doc.data().mobileNumber,
            };
            this.setState({
              bookings: [booking, ...this.state.bookings],
            });
            this.props.refProp(this.contactRef.current.offsetTop);
          }
        });
      });
  };
  render() {
    return (
      <div>
        <Wrapper>
          <div ref={this.contactRef}>
            <Content>
              <HeaderText>Booking & Kontakt</HeaderText>
              <Container>
                <ContactInfo>
                  <h3>Information:</h3>
                  <div>Restaurant Sejlklubben</div>
                  <div>Toldbodgade 14, 8930 Randers</div>
                  <div>Tlf: 86 41 XX XX</div>
                  <div>Email: info@email.com</div>
                  <OBS>
                    Ved bookning af konfirmation indbetales depositum på 5000kr.
                  </OBS>
                </ContactInfo>
                <BookingBox>
                  <BookingComponent bookDate={this.bookDate} />
                </BookingBox>
              </Container>
              <BookingTable>
                <tbody>
                  <tr>
                    <td>Booking Dato:</td>
                    <td>Navn:</td>
                    <td>E-mail:</td>
                    <td>Mob. nummer:</td>
                    <td>Gæster:</td>
                  </tr>
                  {this.state.bookings.map((booking) => {
                    return (
                      <tr key={booking.id}>
                        <td>
                          {new Intl.DateTimeFormat('en-GB', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                          }).format(booking.bookedDate.toDate())}
                        </td>
                        <td>{booking.guestName}</td>
                        <td>{booking.guestEmail}</td>
                        <td>{booking.mobileNumber}</td>
                        <td>{booking.guestCount}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </BookingTable>
            </Content>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default Contact;
