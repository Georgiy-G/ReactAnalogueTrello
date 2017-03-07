export const deleteCard = (payload) => {
    return {
        type: 'DELETE_CARD',
        payload
    }
}

export const deleteAllCard = (payload) => {
    return {
        type: 'DELETE_ALLCARD',
        payload
    }
}
