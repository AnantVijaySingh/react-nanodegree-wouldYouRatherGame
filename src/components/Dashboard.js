import React, {Component} from 'react';
import {connect} from 'react-redux';
import DashboardQuestion from './DashboardQuestion';

//Todo: Toggle filter to show unanswered/answered questions in the home tab

class Dashboard extends Component {
    render() {
        const {questionIds, userData} = this.props;

        return (
            <div>
                <h3 className='center'>QUESTIONS</h3>
                <ul>
                    {
                       questionIds.filter((id) => !userData.answers.hasOwnProperty(id))
                           .map((id) => (
                               <li key={id}>
                                   <DashboardQuestion id={id}/>
                               </li>
                           ))
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        questionIds: Object.keys(state.questions)
            .sort((a,b) => state.questions[a].timeStamp - state.questions[b].timeStamp),
        userData: state.users[state.authedUser],
    }
}

export default connect(mapStateToProps)(Dashboard);