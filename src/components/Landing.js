import React, {Component,} from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {connect} from 'react-redux';
import {loadData} from '../actions/shared';
import CardListNav from './CardListNavigation';
import NewCard from './NewCard';


function HomeScreen() {
    return (
        <CardListNav/>
    );
}

function NewCardScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <NewCard/>
        </View>
    );
}


class Landing extends Component{


    componentDidMount() {
        this.props.dispatch(loadData())
    }


    render(){
        const Tab = createBottomTabNavigator();

        return (
            <NavigationContainer>

            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="New Card" component={NewCardScreen} />
            </Tab.Navigator>
            </NavigationContainer>
        );
    }

}

export default connect()(Landing)
