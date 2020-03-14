import React from 'react';
import Post from './Post';

function Galeria(){    
    return <div className="galeria">
        <Post usuario = 'Gustavo Ivinho' msg = 'Sobrevivendo'></Post>
        <Post usuario = 'Xeorxy' msg = 'Pensando Na'></Post>
        <Post usuario = 'Hi n' msg = 'todo dia um drama diferente'></Post>
        <Post usuario = 'Livinha' msg = 'Menina nem te conto'></Post>
        <Post usuario = 'Xony' msg = 'momito'></Post>
        <Post usuario = 'Kau' msg = 'Vou pra Mn hoje'></Post>
    </div>
    
}
export default Galeria;