import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setAuthedUser} from "../actions/authedUser";

class Login extends Component {

    handleClick = (e,id) => {
        e.preventDefault();
        this.props.dispatch(setAuthedUser(id));
    };

    render() {
        const {users} = this.props;

        return (
            <div>
                <h3>LOGIN</h3>
                <div>
                    {
                        Object.keys(users).map((id) => (
                            <button key={id} className='avatar-btn' onClick={(e) => this.handleClick(e,id)}>
                                <img
                                    src={users[id].avatarURL}
                                    className='avatar'
                                    alt={users[id].id}
                                />
                                <p>{users[id].name}</p>
                            </button>
                            )
                        )
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Login);