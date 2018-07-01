import React, { Component } from 'react';
class ListItems extends Component {

    render() {
        return (
            <React.Fragment>
                {this.props.todos.map(item => (



                    <div className="lish-checkbox" key={item.id}>

                        <input type="checkbox" />
                        {item.name}
                    </div>

                ))}

            </React.Fragment>

        );
    }
}

export default ListItems;