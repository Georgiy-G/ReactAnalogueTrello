import React, {Component} from 'react'
import {DragSource} from 'react-dnd'

const cardDragSpec = {
    beginDrag(props) {
        return {
            ...props.data
        }
    }
}

let collectDrag = (connect) => {
    return {connectDragSource: connect.dragSource()}
}

class Card extends Component {
    constructor() {
        super()
        this.state = {
            cardColor: false
        }
    }
    _toggleCardColor = () => {
        console.log(this.state.cardColor)
        if (this.state.cardColor) {
            this.setState({cardColor: false})
        } else {
            this.setState({cardColor: true})
        }
    }
    render() {
        const {
            id: idColumn,
            data,
            connectDragSource,
            actions: {
                deleteCard,
                colorCard
            }
        } = this.props
        let style = {
            background: data.color
        }
        return connectDragSource(
            <li className="card" style={style}>
                {this.state.cardColor
                    ? <ul className="card__color">
                            <li onClick={() => {
                                this.setState({cardColor: false}),
                                colorCard({idColumn, idCard: data.id, color: 'red'})
                            }}></li>
                            <li onClick={() => {
                                this.setState({cardColor: false}),
                                colorCard({idColumn, idCard: data.id, color: 'lightblue'})
                            }}></li>
                            <li onClick={() => {
                                this.setState({cardColor: false}),
                                colorCard({idColumn, idCard: data.id, color: 'yellow'})
                            }}></li>
                            <li onClick={() => {
                                this.setState({cardColor: false}),
                                colorCard({idColumn, idCard: data.id, color: 'pink'})
                            }}></li>
                            <li onClick={() => {
                                this.setState({cardColor: false}),
                                colorCard({idColumn, idCard: data.id, color: 'white'})
                            }}></li>
                        </ul>
                    : null
                }
                <p className="card__name" onClick={this._toggleCardColor}>{data.task}</p>
                <div className="card__close" onClick={deleteCard.bind(this, {
                    idColumn: data.position,
                    idCard: data.id
                })}>
                    <svg width="15" version="1.1" height="15" viewBox="0 0 64 64">
                        <g>
                            <path fill="#acadaf" d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"/>
                        </g>
                    </svg>
                </div>
            </li>
        )
    }
}

export default DragSource('card', cardDragSpec, collectDrag)(Card);
