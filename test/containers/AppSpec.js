import Question from '../../src/components/Question'
import App from '../../src/containers/App'

describe('App', () => {

  let wrapper;
  let data = [{
    id: 2,
    question: 'What kind of people are you looking for?',
    answer: "You are highly motivated to learn and naturally curious. You don't give up easily, ever. You maintain an inner force that drives you to build something beautiful someday which will make an impact on the world. You play well with others and are kind. You often want to help those around you. You're super excited about learning to code."
  }]

  beforeEach(() => {
    wrapper = mount(
      <App data={data}/>
    )
  });

  it('', () => {
    expect(wrapper.find(App)).toBePresent()
  })

 // it
 //     wrapper.find(Question).first().find('h5')simulate('click');
})
