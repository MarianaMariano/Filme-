import React from 'react';
import './menu.css';

class Menu extends React.Component{
    render(){
        return <section className='Menu'>
            <div>
                <h1>MasterFlix</h1>
                <div className='btn'>
                    <p>Açao</p>
                    <p>Comédia</p>
                    <p>Drama</p>
                    <p>Terror</p>
                </div>
                
            </div>
        </section>
    }
}


export default Menu;

