export const RECEIVE_USER = 'RECEIVE_USER';
export const NEW_ASKED_QUESTION = 'NEW_ASKED_QUESTION';

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