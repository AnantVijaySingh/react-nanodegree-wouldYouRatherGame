import {getInitialData} from "../utils/api";
import {setAuthedUser} from "./authedUser";
import {receiveUsers} from "./users";
import {receiveQuestions} from "./questions";

const AUTHED_ID = 'sarahedo';

export function handleInitialData() {
    return (dispatch => {
        return getInitialData()
            .then(({users,questions}) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(setAuthedUser(AUTHED_ID));
            })
    })
}