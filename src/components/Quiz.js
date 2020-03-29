import React,{Component} from 'react'
import {
    View,
    Text,
    Button
} from 'react-native';
import {connect} from 'react-redux';


class Quiz extends Component{

    constructor(props) {
        super(props)
        this.state = {
            numberOfQuestions : props["cards"][props.route.params.card].questions.length,
            currentQuestion: 0,
            showAnswer: false,
            response: ''
        }
    }

    userResponse = (response) => {
        console.log("response")
        console.log(response)
        this.setState({
            response: response,
            showAnswer : true
        })
    }

    nextQuestion = () => {
        const questionIndex = (this.state.currentQuestion + 1) % (this.state.numberOfQuestions)
        console.log("nextQuestion")
        console.log(questionIndex)
        this.setState({
            currentQuestion: questionIndex,
            showAnswer: false,
        })
    }

    render() {
        console.log(this.props["cards"][this.props.route.params.card].questions)
        console.log(this.state.numberOfQuestions)
        console.log("current question  index " + this.state.currentQuestion)
        return(
            <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                {this.state.showAnswer ? <View>
                        <Text>Your ans is {this.state.response}</Text>

                    </View> :

                    <View>
                    <Text>{this.props["cards"][this.props.route.params.card].questions[this.state.currentQuestion].question}</Text>
                    <Text>{this.props["cards"][this.props.route.params.card].questions[this.state.currentQuestion].answer}</Text>
                    <Text>Is this correct?</Text>

                    </View>

                }
                <Button title='Correct' onPress={() => {this.userResponse("correct")}}></Button>
                <Button title='Incorrect' onPress={() => {this.userResponse("Incorrect")}}></Button>

                <Button title="Next" onPress={() => {this.nextQuestion()}}></Button>
            </View>
        )
    }


}

function mapStateToProps({cards}) {
    return {
        cards
    }
}

export default connect(mapStateToProps)(Quiz)
