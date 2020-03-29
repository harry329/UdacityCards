import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'
import {connect} from 'react-redux';


class DetailedCard extends Component{


    constructor(props) {
        super(props)
    }

   render() {
        console.log(this.props)
       const cardName = this.props.route.params.cardKey
       return(
           <View>

               <Text>{cardName}</Text>
               <Text>Number of questions in this card</Text>
                <Text>{this.props.cards[cardName].questions.length}</Text>
               <Button title='Add new Question' onPress={() => {this.props.navigation.navigate('NewQuestion',{card: cardName}) }}/>
               <Button title='Start Quiz' onPress={() => {this.props.navigation.navigate('Quiz',{card: cardName}) }}/>

           </View>
       )
   }
}

function mapStateToProps({cards}) {
    return {
        cards
    }

}

export default connect(mapStateToProps)(DetailedCard)
