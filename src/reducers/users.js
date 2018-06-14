import {RECEIVE_USER,NEW_ASKED_QUESTION,ADD_ANSWER} from "../actions/users";

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
            };
        case ADD_ANSWER:
            const{authedUser,answer} = action;
            console.log(action);
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser]['answers'],
                        [action.qid]: answer
                    }
                }
            };
        default:
            return state
    }
}