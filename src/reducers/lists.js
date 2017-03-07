
const initialState = {
    columns: [
        {
            id: 1,
            name: 'Column1',
            color: '',
            cards: [
                {
                    id: 1,
                    task: 'Card1',
                    position: 1,
                    color:''
                },
                {
                    id: 2,
                    task: 'Card2',
                    position: 1,
                    color:''
                },
                {
                    id: 3,
                    task: 'Card3'
                    ,
                    position: 1,
                    color:''
                },
            ]
        },
        {
            id: 2,
            name: 'Column2',
            color: '',
            cards: [
                {
                    id: 1,
                    task: 'Card1',
                    position: 2,
                    color:''
                },
                {
                    id: 2,
                    task: 'Card2',
                    position: 2,
                    color:''
                }
            ]
        }
    ]
}

export default function lists(state = initialState, action) {

    switch (action.type) {
      case 'ADD_COLUMN': {
         const {columns} = state
             columns.push({
                 id: columns.length + 1,
                 name: action.payload,
                 color: '',
                 cards: []
             })

          }
         return {...state, columns: state.columns}

      case 'ADD_CARD':
         return {...state, columns: state.columns.map(item=>{
                        const {id, task, color} = action.payload
                         if (item.id === id) {
                             item.cards.push({
                                 id: item.cards.length + 1,
                                 task,
                                 color,
                                 position: item.id
                             })
                         }
                     return item
                 })}
     case 'DELETE_CARD':
        return {...state, columns: state.columns.map(item=>{
                   const {idColumn, idCard} = action.payload
                    if (item.id === idColumn) {
                        const cards = item.cards.filter(card => {
                            return card.id !== idCard
                        })
                        Object.assign(item, {cards})
                    }
                    return item
                })}
    case 'DELETE_ALLCARD':
       return {...state, columns: state.columns.map(item=>{
                  const {id} = action.payload
                   if (item.id === id) {
                       const cards = []

                       Object.assign(item, {cards})
                   }
                   return item
               })}
    case 'DELETE_COLUMN':
    return {...state, columns: state.columns.filter(item=>{
                const {id} = action.payload
                return item.id !== id

        })}
    case 'COLOR_COLUMN':
       return {...state, columns: state.columns.map(item =>{
           const {id, color} = action.payload
           if (item.id == id) {
               item.color = color
           }
           return item
       })

   }
   case 'COLOR_CARD':
      return {...state, columns: state.columns.map(item =>{
          const {idColumn, idCard,color} = action.payload
          if (item.id === idColumn) {
              const cards = item.cards.map(card => {
                   if (card.id === idCard) {
                       card.color = color
                   }
                   return card
              })
              Object.assign(item, {cards})
          }
          return item
      })

   }
     case 'UPDATE_CARD_POSITION': {
        const {dragged, nextColumn} = action.payload
        return {...state, columns: state.columns.map(item=>{
            if (item.id === nextColumn) {
                item.cards.push({...dragged, position: nextColumn})
            }
            if (item.id === dragged.position) {
                const indexOf = item.cards.findIndex(card => {return card.id === dragged.id})
                item.cards.splice(indexOf, 1)
            }
            return item
        })}
    }
    default:
      return state
    }

}
