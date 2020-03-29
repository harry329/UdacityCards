import React, {Component,} from 'react'
import {
    View,
    Text,
} from 'react-native';
import TouchableItem from '@react-navigation/stack/src/views/TouchableItem';

export default class Card extends Component{

    constructor(props) {
        super(props);

    }

    render() {
        return(
            <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableItem pressColor={'#ffeeaa'} style={{alignItems: 'center'}} onPress={() => {
                    console.log("I am touched")
                    this.props.nav.navigate('DetailCard',{cardKey : this.props.card.title})

                }}>
                    <View style = {{margin: 20, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>
                            {this.props.card.title}
                        </Text>
                        <Text>
                            {this.props.card.questions ? this.props.card.questions.length : 0}
                        </Text>
                    </View>
                </TouchableItem>
            </View>
        )
    }

}
