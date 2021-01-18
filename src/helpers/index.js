export function groupQuestions (questions, authedUser) {
  console.log(questions)
  return {
    unanswered: Object.keys(questions)
      .map(key => questions[key])
      .filter(question => !Object.keys(authedUser.answers).includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp),
    answered: Object.keys(questions)
      .map(key => questions[key])
      .filter(question => Object.keys(authedUser.answers).includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp),
  }
}

export function formatQuestion (question, users, authedUser) {
  const { id, author: publisher, optionOne, optionTwo } = question
  const author = users[publisher]
  const optionOneVotes = optionOne.votes.length
  const optionTwoVotes = optionTwo.votes.length
  const totalVotes = optionOneVotes + optionTwoVotes
  const isAnswered = !!authedUser.answers[id]

  return {
    authorAvatar: author.avatarURL,
    title: !isAnswered
      ? `${author.name} asks:`
      : `Asked by ${author.name}`,
    options: {
      optionOne: {
        label: optionOne.text,
        votes: optionOneVotes,
        percentage: Math.round(optionOneVotes * 100 / totalVotes)
      },
      optionTwo: {
        label: optionTwo.text,
        votes: optionTwoVotes,
        percentage: Math.round(optionTwoVotes * 100 / totalVotes)
      }
    },
    totalVotes,
    isAnswered
  }
}