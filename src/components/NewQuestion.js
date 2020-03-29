import React, {Component} from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import {connect} from 'react-redux';
import {addQuestionToStorage} from '../actions/shared';

class NewQuestion extends Component {

    constructor(props) {
        super(props)
        this.state = {
            question: '',
            answer: '',
        }
    }

    question = (question)=> {
        console.log("question " + question)
        this.setState({
            question: question
        })
    }



    answer = (answer)=> {
        console.log("answer " + answer)
        this.setState({
            answer: answer
        })
    }


    render() {
        return(
            <View style={{flex: 1, justifyContent: 'center' , alignItems:'center'}}>
                <Text>Add Your question for {this.props.route.params.card} card</Text>
                <TextInput onChangeText = {text => {this.question(text)}} style={{width: '80%',height: '5%', backgroundColor: '#cde'}}>{this.state.question}</TextInput>

                <Text>Answer</Text>
                <TextInput onChangeText = {text => {this.answer(text)}} style={{width: '80%',height: '5%', backgroundColor: '#cde'}}>{this.state.answer}</TextInput>

                <Button title='Submit' onPress={() => this.props.dispatch(addQuestionToStorage(this.state, this.props.route.params.card))}/>
            </View>
        )

    }
}

function mapStateToProps({cards}) {
     return {
         cards
     }

}

export default connect(mapStateToProps)(NewQuestion)
