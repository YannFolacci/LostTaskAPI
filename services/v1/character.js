const Character = require('../../models/character');
const User = require('../../models/user');
const user = require('./user');
const userService = require('./user');


const SECRET_KEY = process.env.SECRET;

module.exports = {
    // function : async (req, res, next) =>{},

    add : async (req, res, next) =>{
        console.log("test")
        const temp = {};
        
        ({
            name: temp.name,
            tier: temp.tier,
            classe: temp.classe,
        } = req.body);
        temp.user= req.params.id;
        try {
            let userCharacter = await Character.findOne({user:req.params.id});
            let user = await User.findById(req.params.id)
            let character = await Character.create(temp);
            
            if(!userCharacter || req.body.isMain){
                console.log("main")
                user.mainCharacter = character._id;
                await user.save();
            }
            return res.status(201).json(character);
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    update : async (req, res, next) =>{
        const temp = {};
        
        ({
            name: temp.name,
            tier: temp.tier,
            classe: temp.classe,
            user: req.params.id
        } = req.body);

        try {
            let character = await Character.findOne({
                _id: req.params.character,
                user: req.params.id
            });

            if (character) {
                Object.keys(temp).forEach((key) => {
                    if (!!temp[key]) {
                        character[key] = temp[key];
                    }
                });

                await character.save();
                return res.status(201).json(character);
            }

            return res.status(404).json('character_not_found');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    delete : async (req, res, next) =>{
        try {
            await Character.deleteOne({
                _id: req.params.character,
                user: req.params.id
            });
    
            return res.status(201).json('delete_ok');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    getAll : async (req, res, next) =>{
        try {
            let userCharacters = await Character.find({user:req.params.id});
            res.status(200).json({
                status: "success",
                length: userCharacters.length,
                data:{
                    characters: userCharacters
                }
            });
        } catch (error) {
            return res.status(501).json(error);
        }
        
    },
    getOne : async (req, res, next) =>{
        try{
            let character = await Character.findOne({user:req.params.id, id:req.params.character})
            res.status(200).json({
                status: "success",
                length: character.length,
                data:{
                    character: character
                }
            });
        }catch(error){
            return res.status(501).json(error);
        }
    }

}