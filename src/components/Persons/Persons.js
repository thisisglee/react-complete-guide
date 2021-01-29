import React, { PureComponent } from 'react';
import Person from './Person/Person';

import AuthContext from '../../context/auth-context';

export class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state){
  //     console.log('[Persons.js] getDerivedStateFromProps')
  //     return state
  // }

  // componentWillReceiveProps(props){
  //     console.log('[Persons.js] compo nentWillReceiveProps', props)
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //     console.log('[Persons.js] shouldComponentUpdate')
  //     if (nextProps.persons !== this.props.persons ||
  //         nextProps.changed !== this.props.changed ||
  //         nextProps.clicked !== this.props.clicked)
  //     {
  //         return true
  //     } else{return false}
  //     // return true;

  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  // UNSAFE_componentWillUpdate

  componentDidUpdate() {
    console.log('[Persons.js] componentDidUpdate');
    console.log('snapshot');
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering..');

    return (
      <AuthContext.Consumer>
        {(context) =>
          this.props.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}
              />
            );
          })
        }
      </AuthContext.Consumer>
    );
  }
}

export default Persons;
