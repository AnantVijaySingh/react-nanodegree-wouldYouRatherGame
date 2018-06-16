// Component allows users to navigate the application

import React, {Component} from 'react';
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom';

class Nav extends Component {
    render() {
        const {authedUser, users} = this.props;
        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' exact>
                            LeaderBoard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' exact>
                            New Question
                        </NavLink>
                    </li>
                    <li className='user-avatar'>
                        <NavLink to='/logout' exact>
                            {
                                authedUser !== null ? (
                                    <img
                                        src={users[authedUser].avatarURL}
                                        className='avatar'
                                        alt={users[authedUser].id}
                                    />
                                ) : (
                                    <span>User</span>
                                )

                            }
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

function mapStateToPorps({authedUser, users}) {
    return {
        authedUser,
        users
    }
}

export default connect(mapStateToPorps)(Nav);