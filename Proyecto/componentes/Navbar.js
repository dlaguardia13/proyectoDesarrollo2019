import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Navbar extends Component {
    LogOut(e)
    {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    render() {
        const loginRegLink=(
        <ul className="navbar-nav">
            <li className="nav-item">
                <link to="/login" className="nav-link">
                    Login
                </link>
            </li>
            <li className="nav-item">
                <link to="/register" className="nav-link">
                    Register
                </link>
            </li>
        </ul>
        )
const userLink=(
    <ul className="navbar-nav">
        <li className="nav-item">
            <link to="/profile" className="nav-link">
                User
            </link>
        </li>
        <li className="nav-item">
            <a href="" onClick={this.LogOut.bind(this)}className="nav-link">
                LogOut
            </a>
        </li>
    </ul>
        )
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button className="navbar-toggler" 
                type="button"
                data-toggle="collapse"
                data-target="#navbar1"
                aria-controls="navbar1"
                aria-expanded="false"
                aria-label="Toggle navigation">
                    <span className="navbar-toggle-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <link to="/" className="nav-link">
                                HOME    
                            </link>                        
                            </li>
                    </ul>
                    {localStorage.usertoken ? userLink: loginRegLink}
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)