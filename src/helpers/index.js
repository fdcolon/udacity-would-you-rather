export function groupQuestions (questions, authedUser) {
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

export function getLeadersBoard (users) {
  const usersData = Object.keys(users)
    .map(userId => {
      const user = users[userId]
      const { id, name, avatarURL, answers, questions } = user
      return {
        id,
        name,
        avatarURL,
        topics: [
          {
            id: 'answered',
            label: 'Answered Questions',
            value: Object.keys(answers).length
          },
          {
            id: 'created',
            label: 'Created Questions',
            value: questions.length
          }
        ],
        totalScore: Object.keys(answers).length + questions.length
      }
    })
    .sort((a, b) => b.totalScore - a.totalScore)

  return usersData.slice(0, 3)
}