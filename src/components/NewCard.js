
import React  from 'react'
import {View, Text, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import {addCardToStorage} from '../actions/shared';

 function NewCard(props) {

    const [value, changeText] = React.useState('Deck Title')

    return(
        <View>
            <Text>
                What is the title of your new deck?
            </Text>
            <TextInput onChangeText={text => changeText(text)} >
                {value}
            </TextInput>
            <Button title={'Save Your Card'} onPress={ ()=> {
                console.log("I am pressed");
                props.dispatch(addCardToStorage(value))}}
            />

        </View>
    )

}

export default connect()(NewCard)
