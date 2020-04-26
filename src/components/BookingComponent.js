import React from 'react';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { bookingRef } from '../firebase';

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Wrapper = styled.div`
  div.react-datepicker {
    position: static !important;
  }
  div.react-datepicker__header {
    position: static !important;
  }
`;

const BookingButton = styled.button`
  margin: 10px auto;
  padding: 12px 30px;
  width: 242px;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);

  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(255, 255, 255, 0.3)),
    to(rgba(255, 255, 255, 0))
  );
  background-image: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0)
  );
  background-image: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0)
  );
  background-image: -ms-linear-gradient(
    top,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0)
  );
  background-image: -o-linear-gradient(
    top,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0)
  );
  background-image: linear-gradient(
    top,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0)
  );

  background-color: #57a957;
  border-color: #57a957;

  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  -moz-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(255, 255, 255, 0.3) inset;
  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3),
    0 2px 2px -1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.3) inset;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(255, 255, 255, 0.3) inset;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);

  -webkit-transition: background-color 0.2s ease-out;
  -moz-transition: background-color 0.2s ease-out;
  -ms-transition: background-color 0.2s ease-out;
  -o-transition: background-color 0.2s ease-out;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: #62c462;
  }
  &:focus {
    outline: none;
  }
`;

const TextInput = styled.input`
  display: block;
  margin: 10px 0;
  padding: 10px;
  color: inherit;
  width: 222px;
  font-family: inherit;
  font-size: 16px;
  font-weight: inherit;
  line-height: 16px;
  border: #aeaeae;
  border-radius: 0.4rem;
  transition: box-shadow 300ms;
  &:focus {
    outline: none;
    box-shadow: 0.2rem 0.8rem 1.6rem #cccccc;
  }
`;
const SubText = styled.div`
  font-size: 14px;
`;
class BookingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookedDate: new Date(),
      guestCount: 0,
      guestName: '',
      guestEmail: '',
      mobileNumber: '',
    };
  }

  handleDateChange = (date) => {
    this.setState({
      bookedDate: date,
    });
  };
  onGuestCountChange = (e) => {
    this.setState({
      guestCount: e.target.value,
    });
  };
  onGuestNameChange = (e) => {
    this.setState({
      guestName: e.target.value,
    });
  };
  onGuestEmailChange = (e) => {
    this.setState({
      guestEmail: e.target.value,
    });
  };
  onMobileNumberChange = (e) => {
    this.setState({
      mobileNumber: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.bookDate();
    if (
      this.state.guestName !== '' &&
      this.state.guestEmail !== '' &&
      this.state.mobileNumber !== '' &&
      this.state.guestCount !== 0
    ) {
      try {
        let newBooking = {
          bookedDate: this.state.bookedDate,
          guestCount: this.state.guestCount,
          guestName: this.state.guestName,
          guestEmail: this.state.guestEmail,
          mobileNumber: this.state.mobileNumber,
        };
        bookingRef.add(newBooking).then((ref) => {
          console.log('Added document with ID: ', ref.id);
        });
      } catch (err) {
        console.log(err);
      }
      console.log('allow');
    } else {
      alert('Indtast venligst Navn, Email, Antal gæster og Mobilnummer');
    }
  };
  render() {
    return (
      <Wrapper>
        <div>
          <h3>Bestil bord</h3>
          <form>
            <label htmlFor="guestCount">Gæster: </label>
            <select
              name="guestCount"
              onChange={this.onGuestCountChange}
              value={this.state.guestCount}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
            </select>
            <SubText>Over 11 pers. ring 8941 XXXX</SubText>
            <DatePicker
              inline
              selected={this.state.bookedDate}
              onChange={this.handleDateChange}
              minDate={new Date()}
              maxDate={addDays(new Date(), 45)}
            />
            <SubText>Der kan højest bookes 45 dage frem.</SubText>
            <div>
              <TextInput
                type="text"
                name="guestName"
                onChange={this.onGuestNameChange}
                placeholder="Dit navn.."
              />
            </div>
            <div>
              <TextInput
                type="text"
                name="guestEmail"
                onChange={this.onGuestEmailChange}
                placeholder="Din E-mail.."
              />
            </div>
            <div>
              <TextInput
                type="text"
                name="mobileNumber"
                onChange={this.onMobileNumberChange}
                placeholder="Dit Mobilnummer.."
              />
              <div>
                <BookingButton onClick={this.handleSubmit} type="submit">
                  Bestil bord!
                </BookingButton>
              </div>
            </div>
          </form>
        </div>
      </Wrapper>
    );
  }
}
export default BookingComponent;
