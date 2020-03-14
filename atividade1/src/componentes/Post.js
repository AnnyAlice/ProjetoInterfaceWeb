import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.usuario = props.usuario;
        this.msg = props.msg;
    }
    render() { 
        return (          
    <div>
        <h3 className="h3usuario">{this.usuario}</h3>
        <p className="pmsg">{this.msg}</p>
    </div>
         );
    }
}
 


export default Post;