import React, {Component} from 'react';
import {connect} from 'react-redux'
import {handleSaveAnswer} from "../actions/questions";

class QuestionPage extends Component {
    handleVote = (e, option) => {
        e.preventDefault();

        const { dispatch, question, authedUser} = this.props;

        dispatch(handleSaveAnswer({
            authedUser,
            qid: question.id,
            answer: option
        }))
    };

    render() {
        const {optionOne, optionTwo} = this.props.question;
        const authedUser = this.props.authedUser;
        const {name, avatarURL} = this.props.authorUser;

        return (
            <div className='dashboard-question'>
                <h3>Would You Rather...?</h3>
                <div className='dashboard-question-info'>
                    <div>
                        <button className='btn' onClick={(e) => this.handleVote(e,'optionOne')}><p className={optionOne['votes'].includes(authedUser) ? 'selected' : null}>{optionOne.text}</p></button>
                        {
                            optionOne['votes'].includes(authedUser) || optionTwo['votes'].includes(authedUser) ?
                                (<div className='votes'>
                                    <p style={{fontWeight:'bolder'}}>Votes</p>
                                    <p>{optionOne['votes'].length}</p>
                                </div>) :
                                (<div className='votes'>
                                    <p style={{fontWeight:'bolder'}}>Votes</p>
                                    <p>Answer to reveal</p>
                                </div>)
                        }
                    </div>
                    <div>
                        <button className='btn' onClick={(e) => this.handleVote(e,'optionTwo')}><p className={optionTwo['votes'].includes(authedUser) ? 'selected' : null}>{optionTwo.text}</p></button>
                        {
                            optionOne['votes'].includes(authedUser) || optionTwo['votes'].includes(authedUser) ?
                                (<div className='votes'>
                                    <p style={{fontWeight:'bolder'}}>Votes</p>
                                    <p>{optionTwo['votes'].length}</p>
                                </div>) :
                                (<div className='votes'>
                                    <p style={{fontWeight:'bolder'}}>Votes</p>
                                    <p>Answer to reveal</p>
                                </div>)
                        }
                    </div>
                </div>
                <div className='question-page-author-info'>
                    <p>Created by </p>
                    <img
                        src={avatarURL}
                        alt={`Author is ${name}`}
                        className='avatar'
                    />
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, props) {
    // const {id} = props.match.params;
    const id = 'vthrdm985a262al8qx3do';

    return {
        authedUser,
        question: questions[id],
        authorUser: users[questions[id].author]
    }
}


export default connect(mapStateToProps)(QuestionPage);