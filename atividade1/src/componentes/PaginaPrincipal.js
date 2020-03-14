import React, { Component } from 'react';
import Navbar from './Navbar';
import Galeria from './Galeria';
//import Post from './Post';


class PaginaPrincipal extends Component{
    state = { }
    render() {
        return (
            <div>
            <Navbar></Navbar>
            <Galeria></Galeria>
            </div>
        );
    }
}
export default PaginaPrincipal;

