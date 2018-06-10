import {
    _getUsers,
    _getQuestions
} from "./_Data";

// Todo: remove hardcoded authedUser with a login flow

export function getInitialData () {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
        // authedUser: 'sarahedo'
    }))
}