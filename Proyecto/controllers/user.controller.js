// const cors = require("cors")
// const jwt = require("jsonwebtoken")
// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
const User = require("../models/user.model")


module.exports.createOne = (req, res) => {

    
        const userData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        }
    
        User.findOne({
            where:{
                email:req.body.email
            }
        })
        .then(user =>{
            if(!user){
                bcrypt.hash(req.body.password, 10, (err, hash)=>{
                    userData.password = hash
                    User.create(userData)
                    .then(user=>{
                        res.json({status: user.email+ ' Registrado'})
                    })
                    .catch(err=>{
                        res.send('ERROR' +  err)
                    })
                    
                })
            }else{
                res.json({error: "Usuario ya existente"})
            }
        })
        .catch(err=>{
            res.send('ERROR' +  err)
        })


    // if (!req.body) {
    //     return res.status(400).send({
    //         message: "Content can not be empty"
    //     });
    // }

    // const userData = new User({
    //     firstName: req.body.firstName,
    //     lastName: req.body.lastName,
    //     email: req.body.email,
    //     password: req.body.password
    // });

    // userData.save()
    //         .then(data => {
    //             res.send(data);
    //         }).catch(err => {
    //             res.send('ERROR '+ err)
    //         });

};

module.exports.login = (req, res) => {
    process.env.SECRET_KEY = 'secret'
    User.findOne({
        where:{
            email: req.body.email
        }
    })
    .then(user =>{
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY,{
                    expiresIn: 1440
                })
                res.send(token)
            }
        }else{
            res.status(400).json({error: 'El Usuario No Existe '})
        }
    })
    .catch(err =>{
        res.status(400).json({error: err})
    })

}

