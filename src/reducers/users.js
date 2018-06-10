import {RECEIVE_USER,NEW_ASKED_QUESTION} from "../actions/users";

export default function users(state={}, action) {
    switch (action.type) {
        case RECEIVE_USER:
            return {
                ...state,
                ...action.users
            };
        case NEW_ASKED_QUESTION:
            const {qid, author} = action;
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat([qid])
                }
            }
            ;
        default:
            return state
    }
}