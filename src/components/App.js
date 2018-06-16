// Component displays the form to create a new question
// The submit button is activated only when both options have text
// After submitting the user is redirected to the home page

import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import {handleInitialData} from "../actions/shared";
import QuestionPage from './QuestionPage';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import Logout from './Logout';
import Login from './Login';
import Nav from './Nav';
import LoadingBar from 'react-redux-loading';

class App extends Component {
  componentDidMount() {
      this.props.dispatch(handleInitialData());
  }

  render() {
    return (
        <Router>
            <Fragment>
                <LoadingBar/>
                <div className='container'>
                    <Nav/>
                    <div className="center">
                        {
                            this.props.loading
                                ? (<Login />)
                                : (
                                    <div>
                                        <Route path='/' exact component={Dashboard} />
                                        <Route path='/add' exact component={NewQuestion}/>
                                        <Route path='/leaderboard' exact component={Leaderboard}/>
                                        <Route path='/logout' exact component={Logout}/>
                                        <Route path='/question/:id' component={QuestionPage}/>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </Fragment>
        </Router>
    );
  }
}

function mapStateToProps(state) {
    return {
        loading: state.authedUser === null,
    }
}

export default connect(mapStateToProps)(App);
