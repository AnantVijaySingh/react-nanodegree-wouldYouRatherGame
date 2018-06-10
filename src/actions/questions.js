import {_saveQuestionAnswer} from "../utils/_Data";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_ANSWER = 'SAVE_ANSWER';

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function saveAnswer({authedUser, qid, answer}) {
    console.log('Action creator :', answer);
    return {
        type: SAVE_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function handleSaveAnswer(info) {
    return ((dispatch) => {

        return _saveQuestionAnswer(info)
            .then(dispatch(saveAnswer(info)))
            .catch((e) => {
                console.warn('Error in processing vote ',e)
            })
    })
}