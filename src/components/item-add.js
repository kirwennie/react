import React, {Component} from "react";

import './to-do-list-style.css'

export default class ItemAddForm extends Component {
    render(){
        return(
            <div className="item-add-form">
                <button 
                onClick={() => this.props.onAddItem(`New Item`)}
                className="btn btn-outline-secondary">
                    Делай!
                </button>
            </div>
        )
    }
}