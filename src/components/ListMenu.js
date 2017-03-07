import React, {Component} from 'react'
import {ChromePicker} from 'react-color'

export default class ListMenu extends Component {

    constructor() {
        super()
        this.state = {
            isShowMenu: false,
            displayColorPicker: false,
            color: '#fff'
        }
    }

    _ChangeColor = () => {
        this.setState({displayColorPicker: true})
    }

    handleClick = () => {
        this.setState({
            displayColorPicker: !this.state.displayColorPicker
        })
    }

    handleChangeComplete = (color) => {
        this.setState({color: color.hex})
    }
    handleChange = (color) => {
        this.setState({color: color.rgb})
    }
    handleClose = () => {
        this.setState({displayColorPicker: false, isShowMenu: false})
    }

    _toggleMenu = () => {
        if (this.state.isShowMenu) {
            this.setState({isShowMenu: false})
        } else {
            this.setState({isShowMenu: true})
        }
    }
    render() {
        const {
            data,
            actions: {
                deleteColumn,
                deleteAllCard,
                colorColumn
            }
        } = this.props
        return (
            <div className="list__menu">
                <p onClick={this._toggleMenu}>...</p>
                {this.state.isShowMenu
                    ? <div className="list__menu__profile">

                            {this.state.displayColorPicker
                                ? <div className="colorColumn-wrap">
                                        <div className="colorColumn-wrap2" onClick={this.handleClose}></div>
                                        <ChromePicker color={this.state.color} onChange={colorColumn.bind(this, {
                                            id: data.id,
                                            color: this.state.color
                                        })} onChangeComplete={this.handleChangeComplete}/>
                                    </div>
                                : <ul>
                                    <li onClick={() => {
                                        this.setState({isShowMenu: false}),
                                        deleteColumn(data)
                                    }}>Delete Column</li>
                                    <li onClick={() => {
                                        this.setState({isShowMenu: false}),
                                        deleteAllCard({id: data.id})
                                    }}>Delete All Cards</li>
                                    <li onClick={this._ChangeColor.bind(this)}>Choose color</li>
                                </ul>
                            }

                        </div>
                    : null
                }
            </div>
        )
    }
}
