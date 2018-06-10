import {RECEIVE_QUESTIONS, SAVE_ANSWER} from "../actions/questions";

export default function questions(state={}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };
        case SAVE_ANSWER:
            const {qid, answer, authedUser} = action;

            // Checking if the user has already answered and then preventing from updating the state
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    optionOne: {
                        ...state[qid][answer],
                        votes: answer === 'optionOne' && !state[qid]['optionOne'].votes.includes(authedUser) && !state[qid]['optionTwo'].votes.includes(authedUser) ? state[qid]['optionOne'].votes.concat([authedUser]) : state[qid]['optionOne'].votes
                    },
                    optionTwo: {
                        ...state[qid][answer],
                        votes: answer === 'optionTwo' && !state[qid]['optionTwo'].votes.includes(authedUser) && !state[qid]['optionOne'].votes.includes(authedUser) ? state[qid]['optionTwo'].votes.concat([authedUser]) : state[qid]['optionTwo'].votes
                    }
                }
            };
        default:
            return state
    }
}