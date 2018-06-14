export const RECEIVE_USER = 'RECEIVE_USER';
export const NEW_ASKED_QUESTION = 'NEW_ASKED_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USER,
        users
    }
}

export function addAskedQuestion(qid,author) {
    return {
        type: NEW_ASKED_QUESTION,
        qid,
        author
    }
}

export function addAnswer({authedUser,qid,answer}) {
    console.log(answer);
    return {
        type: ADD_ANSWER,
        authedUser,
        qid,
        answer
    }
}