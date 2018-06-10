import React, { Component } from 'react';
import {connect} from 'react-redux';
import Dashboard from './Dashboard';
import {handleInitialData} from "../actions/shared";
import QuestionPage from './QuestionPage';

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
                      <QuestionPage/>
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
