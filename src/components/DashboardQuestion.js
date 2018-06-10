import React, {Component} from 'react';
import {connect} from 'react-redux'

class DashboardQuestion extends Component {
    render() {
        const {optionOne, optionTwo} = this.props.question;

        return (
            <div className='dashboard-question'>
                <h3>Would You Rather...?</h3>
                <div className='dashboard-question-info'>
                    <p className={optionOne['votes'].includes(this.props.authedUser) ? 'selected' : null}><span>A | </span>{optionOne.text}</p>
                    <p className={optionTwo['votes'].includes(this.props.authedUser) ? 'selected' : null}><span>B | </span>{optionTwo.text}</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions,authedUser},{id}) {
    return {
        question: questions[id],
        authedUser
    }
}

export default connect(mapStateToProps)(DashboardQuestion)