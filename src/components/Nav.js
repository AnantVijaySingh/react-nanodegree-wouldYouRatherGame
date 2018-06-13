import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' exact activeClassName='active'>
                            LeaderBoard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/new' exact activeClassName='active'>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/logout' exact activeClassName='active'>
                            User
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;