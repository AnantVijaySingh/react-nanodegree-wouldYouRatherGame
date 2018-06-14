import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleNewQuestion} from "../actions/questions";
import {Redirect} from 'react-router-dom';

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false,
    };

    handleChange = (e,option) => {
        const text = e.target.value;

        this.setState((prevState) => ({
            optionOneText: option === 'optionOne' ? text : prevState.optionOneText,
            optionTwoText: option === 'optionTwo' ? text : prevState.optionTwoText
        }))
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const {optionOneText, optionTwoText} = this.state;
        const {dispatch, author} = this.props;

        dispatch(handleNewQuestion({optionOneText, optionTwoText, author}));

        this.setState(() => ({
            optionOneText: '',
            optionTwoText: '',
            toHome: true,
        }))
    };

    render () {

        if( this.state.toHome === true) {
            return <Redirect to='/'/>
        }

        return (
            <div>
                <h3>Would You Rather...?</h3>
                <form className='new-question' onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder='Option A'
                        value={this.state.optionOneText}
                        onChange={(e) => this.handleChange(e,'optionOne')}
                        maxLength={140}
                        className='textarea'>
                    </textarea>
                    <textarea
                        placeholder='Option B'
                        value={this.state.optionTwoText}
                        onChange={(e) => this.handleChange(e,'optionTwo')}
                        maxLength={140}
                        className='textarea'>
                    </textarea>
                    <button
                        className='submit-btn'
                        type='submit'
                        disabled={this.state.optionOneText.length === 0 || this.state.optionTwoText.length === 0}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        author: authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion);