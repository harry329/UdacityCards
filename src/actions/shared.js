import AsyncStorage from '@react-native-community/async-storage';
import {addCard, addQuestion, loadCards} from './card';

export const LOAD_DATA='LOAD_DATA'

export function loadData() {

    return (dispatch) => {
        return AsyncStorage.getAllKeys().
            then(keys => {
                AsyncStorage.multiGet(keys).then(
                    keyValuePairs => {
                        const keyValueMap = {}
                        console.log("keyValue " + keyValuePairs.length)
                        console.log("keyValue " + keyValuePairs)
                        for( const keyValue in keyValuePairs) {
                            console.log("keyval " + keyValuePairs[keyValue][0])
                            console.log("keyval " + keyValuePairs[keyValue][1])
                            keyValueMap[keyValuePairs[keyValue][0]]= JSON.parse(keyValuePairs[keyValue][1])
                        }
                        console.log("***^^^" + JSON.stringify(keyValueMap))
                        dispatch(loadCards(keyValueMap))
                    }
                )
        })

    }

}


export function addCardToStorage(card : string) {
    const item = { title : card, questions : []}
    console.log(item + " Json " + JSON.stringify(item))
    return (dispatch) => {
        return AsyncStorage.setItem(card, JSON.stringify(item))
            .then( () => {
                dispatch(addCard(item))
            })
    }

}


export function addQuestionToStorage(questionToAdd, card) {
    const question = { question: questionToAdd["question"], answer: questionToAdd["answer"]}
    console.log(questionToAdd)
    console.log(card)
    console.log("actoin_____")
    console.log(JSON.stringify(questionToAdd))
    return (dispatch) => {

        return AsyncStorage.getItem(card).then(
            (res) => {
                console.log(res)
                const cardObj = JSON.parse(res)
                const question =  cardObj["questions"]
                question.push((questionToAdd))
                console.log(question)
                const valToAdd = {title: card, questions: question}
                const valToAddString = JSON.stringify(valToAdd)
                console.log(valToAdd)
                AsyncStorage.setItem(card,valToAddString).then(
                    () => {
                        dispatch(addQuestion(valToAdd))
                    }
                )

            }
        )


    }


}
