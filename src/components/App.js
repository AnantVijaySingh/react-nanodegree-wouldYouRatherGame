import React, { Component } from 'react';
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

class App extends Component {
  componentDidMount() {
      this.props.dispatch(handleInitialData());
  }

  render() {
    return (
        <Router>
            <div className='container'>
                <Nav/>
                <div className="center">
                    {
                        this.props.loading
                            ? (<h3 className='center'>Loading . . .</h3>)
                            : (
                                <div>
                                    <Route path='/' exact component={Dashboard} />
                                    <Route path='/new' exact component={NewQuestion}/>
                                    <Route path='/leaderboard' exact component={Leaderboard}/>
                                    <Route path='/logout' exact component={Logout}/>
                                </div>
                            )
                    }
                </div>
            </div>
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
