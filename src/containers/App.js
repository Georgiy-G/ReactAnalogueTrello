import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addColumn} from '../actions/Column/add'
import {addCard} from '../actions/Card/add'
import {deleteCard} from '../actions/Card/delete'
import {deleteAllCard} from '../actions/Card/delete'
import {deleteColumn} from '../actions/Column/delete'
import {colorColumn} from '../actions/Column/colorcolumn'
import {colorCard} from '../actions/Card/colorcard'
import Board from '../components/Board'

const updateCardPosition = (dragged, nextColumn) => {
    return {
        type: 'UPDATE_CARD_POSITION',
        payload: {
            dragged,
            nextColumn
        }
    }
}

class App extends Component {
    render() {
        const {lists: {
                columns
            }, actions} = this.props
        return <Board data={columns} actions={actions}/>
    }
}

function mapStateToProps(state) {
    return {lists: state.lists}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            addColumn,
            addCard,
            deleteCard,
            deleteAllCard,
            deleteColumn,
            colorColumn,
            colorCard,
            updateCardPosition
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
