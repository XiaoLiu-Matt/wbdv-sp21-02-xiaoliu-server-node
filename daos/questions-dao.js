const questionsModel = require('../models/questions/questions-model')
const quizzesModel = require('../models/quizzes/quizzes-model')

const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.findById(qid)
// const findQuestionsForQuiz = (qzid) => quizzesModel.findById(qzid)
//     .populate('questions').then(quiz => quiz.questions)
const findQuestionsForQuiz = (qzid) => {
    return questionsModel.find({quizId: qzid})
    // return questions.filter((question) => {
    //     return question.quizId === qzid;
    // })
}
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }