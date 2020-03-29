export const LOAD_CARDS = 'LOAD_CARDS'
export const ADD_CARDS = 'ADD_CARDS'
export const ADD_QUESTION = 'ADD_QUESTION'

export function loadCards(cards) {

    return {
        type: LOAD_CARDS,
        cards
    }


}


export function addCard(card) {
    return {
        type : ADD_CARDS,
        card
    }

}

export function addQuestion(card) {
    return{
        type: ADD_QUESTION,
        card,
    }
}
