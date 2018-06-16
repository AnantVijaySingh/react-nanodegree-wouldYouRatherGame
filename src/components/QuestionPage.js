// Component displays the question
// If the users has not answered the question they can answer it to reveal how many other people have answered it
// User has already answered the question the stats are shown and the option selected is highlighted
// If the question id does not exist a 404 prompt is shown

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
        const {checkQuesExist, numberOfUsers} =  this.props;

        return (
            <div className='dashboard-question'>
                {
                    checkQuesExist ? (
                        <div>
                            <h3>Would You Rather...?</h3>
                            <div className='dashboard-question-info'>
                                <div>
                                    <button className='btn' onClick={(e) => this.handleVote(e,'optionOne')}><p className={optionOne['votes'].includes(authedUser) ? 'selected' : null}>{optionOne.text}</p></button>
                                    {
                                        optionOne['votes'].includes(authedUser) || optionTwo['votes'].includes(authedUser) ?
                                            (<div className='votes'>
                                                <div className='votes'>
                                                    <p style={{fontWeight:'bolder'}}>Votes</p>
                                                    <p>{optionOne['votes'].length}</p>
                                                </div>
                                                <div className='votes'>
                                                    <p style={{fontWeight:'bolder'}}>%</p>
                                                    <p>{Math.round((optionOne['votes'].length/numberOfUsers) *  100)}%</p>
                                                </div>
                                            </div>) :
                                            (<div className='votes'>
                                                <div className='votes'>
                                                    <p style={{fontWeight:'bolder'}}>Votes</p>
                                                    <p>**</p>
                                                </div>
                                                <div className='votes'>
                                                    <p style={{fontWeight:'bolder'}}>%</p>
                                                    <p>**</p>
                                                </div>
                                            </div>)
                                    }
                                </div>
                                <div>
                                    <button className='btn' onClick={(e) => this.handleVote(e,'optionTwo')}><p className={optionTwo['votes'].includes(authedUser) ? 'selected' : null}>{optionTwo.text}</p></button>
                                    {
                                        optionOne['votes'].includes(authedUser) || optionTwo['votes'].includes(authedUser) ?
                                            (<div className='votes'>
                                                <div className='votes'>
                                                    <p style={{fontWeight:'bolder'}}>Votes</p>
                                                    <p>{optionTwo['votes'].length}</p>
                                                </div>
                                                <div className='votes'>
                                                    <p style={{fontWeight:'bolder'}}>%</p>
                                                    <p>{Math.round((optionTwo['votes'].length/numberOfUsers) *  100)}%</p>
                                                </div>
                                            </div>) :
                                            (<div className='votes'>
                                                <div className='votes'>
                                                    <p style={{fontWeight:'bolder'}}>Votes</p>
                                                    <p>**</p>
                                                </div>
                                                <div className='votes'>
                                                    <p style={{fontWeight:'bolder'}}>%</p>
                                                    <p>**</p>
                                                </div>
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
                    ) : (
                        <p>
                            404 Question Not Found
                        </p>
                    )
                }
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, props) {
    const {id} = props.match.params;
    const checkQuesExist = questions.hasOwnProperty(id);

    return {
        authedUser,
        numberOfUsers: Object.keys(users).length,
        question: checkQuesExist ? questions[id] : {},
        authorUser: checkQuesExist ? users[questions[id].author] : {},
        checkQuesExist
    }
}


export default connect(mapStateToProps)(QuestionPage);