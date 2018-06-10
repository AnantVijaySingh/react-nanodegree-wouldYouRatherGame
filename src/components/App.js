import React, { Component } from 'react';
import {connect} from 'react-redux';
import Dashboard from './Dashboard';
import {handleInitialData} from "../actions/shared";

class App extends Component {
  componentDidMount() {
      this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="center">
          {
              this.props.loading
              ? (<h3 className='center'>Loading . . .</h3>)
                  : (
                      <Dashboard/>
                  )
          }
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        loading: state.authedUser === null,
    }
}

export default connect(mapStateToProps)(App);
