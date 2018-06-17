// Home page component of the application
// Handles displaying of answered and unanswered questions

import React, {Component} from 'react';
import {connect} from 'react-redux';
import DashboardQuestion from './DashboardQuestion';

class Dashboard extends Component {
    state = {
        column: '1',
    };

    handleClick = (e,col) => {
        e.preventDefault();
        this.setState({
            column: col
        })
    };

    render() {
        const {questionIds, userData} = this.props;

        return (
            <div>
                <h3 className='center'>QUESTIONS</h3>
                <button className='btn-dashboard' onClick={(e) => this.handleClick(e,'1')}>To Answer</button>
                <button className='btn-dashboard' onClick={(e) => this.handleClick(e,'2')}>Answered</button>
                <ul>
                    {
                        this.state.column === '1' ?
                            (
                                questionIds.filter((id) => !userData.answers.hasOwnProperty(id))
                                    .map((id) => (
                                        <li key={id}>
                                            <DashboardQuestion id={id}/>
                                        </li>
                                    ))
                            ) : (
                                questionIds.filter((id) => userData.answers.hasOwnProperty(id))
                                    .map((id) => (
                                        <li key={id}>
                                            <DashboardQuestion id={id}/>
                                        </li>
                                    ))
                            )

                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        questionIds: Object.keys(state.questions)
            .sort((a,b) => state.questions[b].timestamp - state.questions[a].timestamp),
        userData: state.users[state.authedUser],
    }
}

export default connect(mapStateToProps)(Dashboard);