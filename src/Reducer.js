export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) => basket.reduce((amount, item) => item.price + amount, 0)

function reducer(state, action) {
    console.log(action.type)
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //Logic for adding to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            
        case 'REMOVE_FROM_BASKET':
            //Logic to remove from basket
            let newBasket = [...state.basket]
            const foundIndex = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if(foundIndex >= 0) {
                //item exists. Remove it
                newBasket.splice(foundIndex, 1)
            } else {
                console.warn("Can't remove item because it doesn't exist!") 
            }

            return { ...state, basket: newBasket }
            
        default:
            return state
    }
}

export default reducer