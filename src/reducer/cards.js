import {ADD_CARDS, ADD_QUESTION, LOAD_CARDS} from '../actions/card';

export default function cards(state = {}, action) {

    console.log("****** reducer")
    console.log(action)
    switch (action.type) {
        case LOAD_CARDS:
            return {
                ...state,
                ...action.cards

            };

        case ADD_CARDS:
            return {
                ...state,
                [action.card.title]: {
                    ...action.card
                }
            }

        case ADD_QUESTION:
            return {
                ...state,
                [action.card.title] : {
                    ...action.card
                }
            }
        default:
            return state


    }

}
