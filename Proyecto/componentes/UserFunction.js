import axios from 'axios'

export const register = newUSer =>{
    return axios
    .post('users/registers',{
        firstName: newUSer.firstName,
        lastName: newUSer.lastName,
        email: newUSer.email,
        password: newUSer.password
    })

    .then(res =>{console.log("REgistradpo")})
}

export const login = user =>{
    return axios
    .post('user/login',{
        email: user.email,
        password: user.password
    })
    .then(res=>{
        localStorage.setItem('usertoken',res.data)
    })
    .catch(err =>{
        console.log(err)
    })
}

