import React, {
  Fragment
} from 'react';
import classNames from 'classnames';
import {
  Route,
  Switch
} from 'react-router-dom';
import About from './about.jsx';
import Header from './header.jsx';
import Nav from './nav.jsx';
import PhaseCurrent from './phaseCurrent.jsx';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.onFocus = this.onFocus.bind(this);
  }

  onFocus(event) {
    event.preventDefault();
    event.target.focus();
    event.target.select();
  }

  render() {
    const {
      data,
    } = this.props;
    return (
      <Fragment>
        <Header data={data} />
        <article>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <PhaseCurrent data={data} />
              )}
            />
            <Route
              exact
              path="/about"
              render={() => (
                <About data={data} />
              )}
            />
          </Switch>
        </article>
        <Nav data={data} />
      </Fragment>
    );
  }
}
