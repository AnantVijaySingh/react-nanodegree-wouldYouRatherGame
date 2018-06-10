import React, {Component} from 'react';
import {connect} from 'react-redux';

class Leaderboard extends Component {
    render() {
        const {users, rankedUserIds} = this.props;

        return (
            <div>
                <h3>Leaderboard</h3>
                <div>
                    <ul className='leaderboard'>
                        {
                            rankedUserIds.map((id) => (
                                <li key={id} className='leaderboard-list'>
                                    <div className='leaderboard-info'>
                                        <img
                                            src={users[id].avatarURL}
                                            alt={`Name: ${users[id].name}`}
                                            className='avatar'
                                        />
                                        <div className='leaderboard-user-stats'>
                                            <span className='start'>{users[id].name}</span>
                                            <span>
                                                <div className='leadboard-stats'>
                                                    <p style={{fontWeight:'bolder'}}>Answered</p>
                                                    <p>{Object.keys(users[id].answers).length}</p>
                                                </div>
                                            </span>
                                            <span>
                                                <div className='leadboard-stats'>
                                                    <p style={{fontWeight:'bolder'}}>Asked</p>
                                                    <p>{users[id].questions.length}</p>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users,
        rankedUserIds: Object.keys(users)
            .sort((a,b) => (Object.keys(users[b].answers).length + users[b].questions.length - Object.keys(users[a].answers).length - users[a].questions.length))
    }
}


export default connect(mapStateToProps)(Leaderboard);