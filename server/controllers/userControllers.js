const User = require('../models/userModel');
const md5 = require('md5');
const validator = require('express-validator');
const jwt = require('jsonwebtoken');


const getUsersController = async (req, res) => {

    try {
        const allUsers = await User.find()
        res.status(200).send(allUsers)
    } catch (error) {
        console.log(error)
    }
}

const postUsersController = async (req, res) => {
    
    const error = validator.validationResult(req).errors;
    
    if(error.length > 0 )
    {
        return res.status(400).json({
            success: false,
            message: error.map(err => err.msg)
        });
    }

   try {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password),
    })

    const addedUser = await newUser.save()
    res.status(200).send(addedUser)
   } catch (error) {
       console.log(error);
   }
}

const signAccessToken = data => {
    return jwt.sign(data,process.env.SECRET_TOKEN, {expiresIn: '20000s'});
}

const userPostLogInController = (req, res) => {
    const {email, password} = req.body
    User.findOne({ email }).then(foundUser =>{
        if(foundUser)
        {
            if(foundUser.password === md5(password))
            {
                res.cookie( "cookie_Token",signAccessToken({ email }),
                        {
                            maxAge: 24 * 60 * 60,
                            httpOnly: true
                        }
                ).status(200).json({
                    success:true,
                    message:` user loged in` ,
                    token: signAccessToken({ email })
                })
                
            }
            else
            {
                res.status(404).json({
                    success: false,
                    message: 'password is not true'
                })
            }
        }
        else
        {
            res.status(404).json({
                success: false,
                message: 'user not found'
            })
        }
    })
}

const authorize = (req, res, next) =>
{
    const token = req.cookies.cookie_Token;
    if(!token)
    {
        return res.sendStatus(403).json({
            message: 'user logged out'
        });
    }
    try
    {
        const data = jwt.verify(token, SECRET_TOKEN);
        console.log(data);
        req.email = data.email;
        next();
    }
    catch
    {
        return res.sendStatus(403);
    }
}

const userLogoutController = (req, res) =>
{
    res.clearCookie("cookie_Token").status(200).json({
        success: true,
        message: 'user logged out'
    })
};


module.exports = {
    getUsersController,
    postUsersController,
    userPostLogInController,
    userLogoutController,
    authorize
};
