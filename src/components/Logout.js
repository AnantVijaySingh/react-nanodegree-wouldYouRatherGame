// Component allows user to logout
// Shows the user their basic stats

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logoutUser} from "../actions/authedUser";

class Logout extends Component {
    handleLogout = (e) => {
        e.preventDefault();
        this.props.dispatch(logoutUser());
    };

    render() {
        const { userInfo: { avatarURL, name, answers, questions } } = this.props;


        return (
            <div>
                <h3>LOGOUT</h3>
                <div className='logout-container'>
                    <div>
                        <img
                            src={avatarURL}
                            className='avatar'
                            alt={name}
                        />
                    </div>
                    <div>{name}</div>
                    <div>
                        <div className='leadboard-stats'>
                            <p style={{fontWeight:'bolder'}}>Answered</p>
                            <p>{Object.keys(answers).length}</p>
                        </div>
                        <div className='leadboard-stats'>
                            <p style={{fontWeight:'bolder'}}>Asked</p>
                            <p>{questions.length}</p>
                        </div>
                    </div>
                    <button className='submit-btn' onClick={this.handleLogout}>Logout</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users}) {
    return {
        authedUser,
        userInfo: users[authedUser]
    }
}

export default connect(mapStateToProps)(Logout);