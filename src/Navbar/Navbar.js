import React, { Component } from 'react'
import{MenuItems} from './MenuItems'
import './Navbar.css'
import { Link } from 'react-router-dom'

class Navbar extends Component
{
    state={clicked:false}
    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }
        render()
        {
           

            return(
                <nav className='NavbarItems'>
                    <h1 className='navbar-logo'>Portfolio</h1>
                    
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item,index)=>
                        {
                            return(
                                <li key={index}  className={item.cName} >
                                        
                                        <Link to={item.url}>
                                            <span className='linkName'>{item.title}</span>
                                        </Link>
                                </li>
                            )
                        }

                        )}
                       
                    </ul>
                </nav>
            )
        }
}

export default Navbar