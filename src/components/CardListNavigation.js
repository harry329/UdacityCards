
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CardList from './CardList';
import DetailedCard from './DetailedCard';
import NewQuestion from './NewQuestion';
import Quiz from './Quiz';

const Stack = createStackNavigator();

export default function CardListNav() {
    return(
            <Stack.Navigator>
                <Stack.Screen name="CardList" component={CardList}/>
                <Stack.Screen name="DetailCard" component={DetailedCard}/>
                <Stack.Screen name="NewQuestion" component={NewQuestion}/>
                <Stack.Screen name="Quiz" component={Quiz}/>
            </Stack.Navigator>
    )
}
