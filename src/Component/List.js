import React from 'react';

class List extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return <h3>Class component {this.props.ne} </h3>
    }
}
export default List;