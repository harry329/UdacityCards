import React, {Component,} from 'react'
import {
    View
} from 'react-native';
import {connect} from 'react-redux';
import Card from './Card';
import {Text} from 'react-native';


class CardList extends Component{

    render() {
        console.log(" card list  " + Object.keys(this.props.cards) )
        return (
            <View style={{flex: 1, alignSelf: 'center'}}>
                {
                    this.props.cards && Object.keys(this.props.cards).length >0 ?

                        Object.keys(this.props.cards).map((card) =>{
                            return (
                                <View>
                            <Card card={this.props.cards[card]} key={card} nav={this.props.navigation}/>
                                    <View style={{width: '100%', height: 2, backgroundColor : '#000'}}/>
                                </View>
                            )
                        })

                        : <View style={{flex:1, justifyContent: 'center'}}><Text>No Cards Available</Text></View>
                }
            </View>
        )
    }


}

function mapStateToProps({cards}) {
    return {cards}

}


export default connect(mapStateToProps)(CardList)
