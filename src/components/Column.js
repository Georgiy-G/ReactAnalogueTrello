import React, {Component} from 'react'
import {DropTarget} from 'react-dnd'
import AddCard from './AddCard'
import Card from './Card'
import ListMenu from './ListMenu'

const listTargetSpec = {
    drop(props, monitor) {
        console.log(props)
        props.actions.updateCardPosition({
            ...monitor.getItem()
        }, props.data.id)
    }
}
const collect = (connect) => {
    return {connectDropTarget: connect.dropTarget()}
}

class Column extends Component {
    render() {
        const {data, actions, connectDropTarget} = this.props
        let style = {
            background: data.color
        }
        const cards = data.cards.length > 0 && data.cards.map((card, key) => {
            return <Card key={key} id={data.id} data={card} actions={actions}/>
        })
        return connectDropTarget(
            <div className="list" style={style}>
                <ListMenu data={data} actions={actions}/>
                <div className="list__header">
                    <h2>{data.name}</h2>

                </div>
                <div className="list__card">
                    {cards}
                </div>
                <AddCard actions={actions} id={data.id}/>
            </div>
        )
    }
}

export default DropTarget('card', listTargetSpec, collect)(Column)
