const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt    = require('jsonwebtoken');
const usertask = require('./usertask');

const SECRET_KEY = process.env.SECRET;

module.exports = {
    // function : async (req, res, next) =>{},

    add : async (req, res, next) =>{
        const temp = {};

        ({
            email: temp.email,
            password: temp.password
        } = req.body);

        Object.keys(temp).forEach((key) => (temp[key] == null) && delete temp[key]);

        try {
            let user = await User.create(temp);

            return res.status(201).json(user);
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    getAll: async (req, res, next) =>{
        console.log("test");
        try {
            let users = await User.find({});
    
            if (users) {
                return res.status(200).json(users);
            }
    
            return res.status(404).json('users_not_found');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    getById : async (req, res, next) =>{   
        console.log('get user by id')
        try {
            let user = await User.findById(req.params.id);
    
            if (user) {
                return res.status(200).json(user);
            }
    
            return res.status(404).json('user_not_found');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    update : async (req, res, next) =>{
        const temp = {};

        ({
            email: temp.email,
            password: temp.password
        } = req.body);

        try {
            let user = await User.findOne({
                email: req.params.email
            });

            if (user) {
                Object.keys(temp).forEach((key) => {
                    if (!!temp[key]) {
                        user[key] = temp[key];
                    }
                });

                await user.save();
                return res.status(201).json(user);
            }

            return res.status(404).json('user_not_found');
        } catch (error) {
            console.log(error)
            return res.status(501).json(error);
        }
    },
    delete : async (req, res, next) =>{
        try {
            await User.deleteOne({
                _id: req.params.id
            });
    
            return res.status(201).json('delete_ok');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    auth : async (req, res, next) =>{
        const {
            email,
            password
        } = req.body;
    
        try {
            let user = await User.findOne({
                email: email
            }, '-__v -createdAt -updatedAt').populate('mainCharacter', 'name');
    
            if (user) {
                bcrypt.compare(password, user.password, function (err, response) {
                    if (err) {
                        throw new Error(err);
                    }
                    if (response) {
                        delete user._doc.password;
    
                        const expireIn = 24 * 60 * 60;
                        const token = jwt.sign({
                                user: user
                            },
                            SECRET_KEY, {
                                expiresIn: expireIn
                            });
    
                        res.header('Authorization', 'Bearer ' + token);
    
                        return res.status(200).json('auth_ok');
                    }
    
                    return res.status(403).json('wrong_credentials');
                });
            } else {
                return res.status(404).json('user_not_found');
            }
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    setMain : async(req, res, next) => {
        //TODO
        return res.status(200).json('set_main');
    }
}