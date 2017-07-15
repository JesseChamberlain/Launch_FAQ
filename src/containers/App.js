import React from 'react';
import Question from '../components/Question';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      questionsData: data,
      selectedQuestion: null
    }

    this.toggleQuestionSelect = this.toggleQuestionSelect.bind(this)
  }

  // componentDidMount(){
  //   fetch('http://localhost:3000/api/v1/questions')
  //   .then(data => data.json())
  //   .then(data => {
  //     this.setState({
  //       questionsData: data
  //     })
  //   })
  // }

  toggleQuestionSelect(id) {
    if (id === this.state.selectedQuestion) {
      this.setState({ selectedQuestion: null})
    } else {
      this.setState({ selectedQuestion: id })
    }
  }

  render() {
    let questions = this.state.questionsData.map(question => {
      let selected;
      if (this.state.selectedQuestion === question.id) {
        selected = true
      }

      let handleClick = () => { this.toggleQuestionSelect(question.id) }

      return(
        <Question
          key={question.id}
          question={question.question}
          answer={question.answer}
          selected={selected}
          handleClick={handleClick}
        />
      )
    })

    return(
      <div className='page'>
        <h1>We're Here To Help</h1>
        <div className='question-list'>
          {questions}
        </div>
      </div>
    )
  }
}

export default App;
