import React from 'react';

import './to-do-list-style.css'

class TodoListItem extends React.Component {



          

        render() {
            const {label, onDelet, toggleDone, toggleImportant, done, important}=this.props;
            let classNames = 'item-list-base';
            if (important){
                classNames="important";
            }
            if(done){
                classNames="done";
            }
            
            return (
                <span className={classNames}>
                    <span
                    onClick={toggleDone}>
                        {label}
                    </span>
            <button type="button" className="btn btn-outline-success float-right" onClick={toggleImportant}>
            <i class="fa fa-check-circle-o" aria-hidden="true"/>
            </button>
            <button type="button" className="btn btn-outline-danger float-right" onClick={onDelet}>
            <i class="fa fa-trash-o" aria-hidden="true"/>
            </button>
                </span>
            );
            }
    };


    


export default TodoListItem;