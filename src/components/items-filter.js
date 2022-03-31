import React from "react";

class ItemsFilter extends React.Component {
    render(){
        return (
            <div className="container">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class=" btn btn-info">ALL</button>
                    <button type="button" class=" btn btn-outline-info">Active</button>
                    <button type="button" class=" btn btn-outline-info">Done</button>
                </div>
            </div>
        );
    };
}



export default ItemsFilter;