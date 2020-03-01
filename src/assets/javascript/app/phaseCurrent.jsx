require('moment');
import React, { Component } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import { useSwipeable, Swipeable } from 'react-swipeable'
import classNames from 'classnames';
import dompurify from 'dompurify';
import MoonPhase from 'react-moon';
import getMoonPhaseForDate from '../services/getMoonPhaseForDate';
import Chevron from '../../../../static/images/chevron.svg';

class PhaseCurrent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };

    this.onDayDecrement = this.onDayDecrement.bind(this);
    this.onDayIncrement = this.onDayIncrement.bind(this);
    this.setDate = this.setDate.bind(this);
    document.addEventListener('keydown', (event) => this.onkeydown(event));
  }

  onkeydown(event) {
    switch (event.code) {
      case 'ArrowLeft':
        this.onDayDecrement();
        break;
      case 'ArrowRight':
        this.onDayIncrement();
        break;
    }
  }

  onDayDecrement() {
    const {
      date,
    } = this.state;
    const newDate = moment(date).subtract(1, 'day');
    this.setState({
      date: newDate,
    });
  };

  onDayIncrement() {
    const {
      date,
    } = this.state;
    const newDate = moment(date).add(1, 'day');
    this.setState({
      date: newDate.format('YYYY-MM-DD'),
    });
  };

  setDate(date) {
    this.setState({
      date: date,
    });
  };

  render() {
    const {
      data,
    } = this.props;

    const {
      date,
    } = this.state;

    const parsedDate = moment(date);
    const year = parseInt(parsedDate.format('YYYY'), 10);
    const month = parseInt(parsedDate.format('MM'), 10) - 1;
    const day = parseInt(parsedDate.format('DD'), 10);
    const phase = getMoonPhaseForDate(year, month, day);

    return (
      <section
        className={
          classNames(
            'section',
            'section--type-phase-current',
          )
        }
      >
        <div className="moon-phase--wrapper">
          <button
            className="moon-phase--nav--left"
            onClick={() => this.onDayDecrement()}
          >
            <Chevron />
          </button>
          <h3 className="moon-phase--date">
            <Moment
              calendar={{
                lastDay : '[Yesterday]',
                sameDay : '[Today]',
                nextDay : '[Tomorrow]',
                lastWeek : 'dddd[,] MMMM Do YYYY',
                nextWeek : 'dddd[,] MMMM Do YYYY',
                sameElse : 'dddd[,] MMMM Do YYYY'
              }}
              date={date}
            />
          </h3>
          <button
            className="moon-phase--nav--right"
            onClick={() => this.onDayIncrement()}
          >
            <Chevron />
          </button>
        </div>
        <div className="moon-phase--container">
          <Swipeable
            className="moon-phase"
            onSwipedLeft={() => this.onDayDecrement()}
            onSwipedRight={() => this.onDayIncrement()}
          >
            <MoonPhase
              darkColor="#000725"
              lightColor="#ffe2e8"
              phase={Number.parseFloat(phase.value)}
              size={200}
            />
          </Swipeable>
        </div>
        <h4 className="moon-phase--phase-name">
          {phase.label}
        </h4>
      </section>
    );
  };
};

export default PhaseCurrent;
