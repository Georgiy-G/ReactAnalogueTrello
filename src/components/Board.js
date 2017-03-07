import React, {Component} from 'react'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Column from './Column'
import AddColumn from './AddColumn'

class Board extends Component {
    render() {
        const {data, actions} = this.props
        const columns = data && data.map((column, key) => {
            return <Column key={key} data={column} actions={actions}/>
        })
        return (
            <div className="list-wrap">
                {columns}
                <AddColumn actions={actions}/>
            </div>
        )

    }
}

export default DragDropContext(HTML5Backend)(Board)
