import React, {Component} from 'react'
import {register} from './UserFunction'

class Register extends Component{
    constructor()
    {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
         this.setState()
         this.setState({[e.target.name]: e.target.value})       
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email, 
            password: this.state.password
        }

        register(user).then(res => {
            if(res)
            {
                this.props.history.push('/login')
            }
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div classname="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Registrar Usuario</h1>
                            <div className="form-group">
                                <label htmlFor="firstName">Nombre:</label>
                                <input type="text" className="form-control" name="firstName" placeholder="Ingresar Nombre"
                                value={this.state.firstName}
                                onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Apellido:</label>
                                <input type="text" className="form-control" name="password" placeholder="Ingresar Apellido"
                                value={this.state.lastName}
                                onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" className="form-control" name="email" placeholder="Ingresar Email"
                                value={this.state.email}
                                onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" className="form-control" name="password" placeholder="Ingresar Contraseña"
                                value={this.state.email}
                                onChange={this.onChange}/>
                            </div>    
                            <button type="submit" className="btn btn-lg btn-primary btn-block">REGISTRAR</button> 
                        </form>    
                    </div> 
                </div>
            </div>
        )
    }
}

export default Register