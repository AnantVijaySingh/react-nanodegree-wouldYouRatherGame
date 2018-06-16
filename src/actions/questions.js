import {_saveQuestion, _saveQuestionAnswer} from "../utils/_Data";
import {addAnswer, addAskedQuestion} from "./users";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_ANSWER = 'SAVE_ANSWER';
export const NEW_QUESTION = 'NEW_QUESTION';

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function saveAnswer({authedUser, qid, answer}) {
    return {
        type: SAVE_ANSWER,
        authedUser,
        qid,
        answer
    }
}

function newQuestion(question) {
    return {
        type: NEW_QUESTION,
        question
    }
}

export function handleSaveAnswer(info) {
    return ((dispatch) => {

        return _saveQuestionAnswer(info)
            .then(() => {
                    dispatch(saveAnswer(info));
                    dispatch(addAnswer(info));
            })
            .catch((e) => {
                console.warn('Error in processing vote ',e)
            })
    })
}

export function handleNewQuestion(info) {
    return((dispatch) => {

        return _saveQuestion(info)
            .then((formattedQuestion) => {
                dispatch(newQuestion(formattedQuestion));
                dispatch(addAskedQuestion(formattedQuestion.id, formattedQuestion.author))
            })
            .catch((e) => console.warn('Error in creating new question',e))
    })
}