import React, { Component } from 'react';
import './DropDown.css';
import uuid from 'uuid';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default class DropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuVisible: false,
      listItems: [
        { name: 'Test 1', id: uuid() },
        { name: 'Test 2', id: uuid() },
        { name: 'Test 3', id: uuid() },
        { name: 'Test 4', id: uuid() },
        { name: 'Test 5', id: uuid() }
      ]
    };
  }

  render() {
    const toggleList = () => {
      this.setState(prevState => ({
        menuVisible: !prevState.menuVisible
      }));
    };

    return (
      <div className="dropdown-container">
        <div className="dropdown-button" onClick={toggleList}>
          Select
        </div>
        <div
          className={`dropdown-body ${
            this.state.menuVisible ? 'is-visible' : ''
          }`}
        >
          <TransitionGroup component="ul" className="dropdown-list">
            {this.state.listItems.map(({ id, name }) => (
              <CSSTransition timeout={500} classNames="fade" key={id}>
                <li>{name}</li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}
