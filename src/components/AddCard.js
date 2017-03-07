import React, {Component} from 'react'

export default class AddCard extends Component {
    constructor() {
        super()
        this.state = {
            value: '',
            showFormCard: false,
            isEmptyCard: true
        }
    }
    componentDidUpdate = () => {
        if (this.state.showFormCard) {
            this.textInputCard.focus()
        }
    }
    _onChangeHandler = (e) => {
        this.setState({value: e.target.value})
        if (e.target.value.trim().length > 0) {
            this.setState({isEmptyCard: false})
        } else {
            this.setState({isEmptyCard: true})
        }
    }

    _toggleShow = () => {
        if (this.state.showFormCard) {
            this.setState({showFormCard: false})
        } else {
            this.setState({showFormCard: true})
        }
    }

    render() {
        const {actions: {
                addCard
            }, id} = this.props
        return (this.state.showFormCard
            ? <form className="add-card">
                    <input type="text" onChange={this._onChangeHandler} ref={(input) => {
                        this.textInputCard = input
                    }}/>
                    <button type="button" onClick={() => (this.setState({showFormCard: false}), addCard({id, task: this.state.value, color: ''}), this.setState({isEmptyCard: true}))} disabled={this.state.isEmptyCard}>
                        Add
                    </button>
                    <span className="add__close" onClick={this._toggleShow}>
                        <svg width="15" version="1.1" height="15" viewBox="0 0 64 64">
                            <g>
                                <path fill="#acadaf" d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"/>
                            </g>
                        </svg>
                    </span>
                </form>
            : <div className="add-card" onClick={this._toggleShow}>
                <span>Add a card...</span>
            </div>)
    }
}
