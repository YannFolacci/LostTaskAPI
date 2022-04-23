const Classe = require('../../models/classe');


const SECRET_KEY = process.env.SECRET;

module.exports = {
    // function : async (req, res, next) =>{},

    add : async (req, res, next) =>{
        const temp = {};
        
        ({
            name: temp.name,
        } = req.body);

        try {
            let classe = await Classe.create(temp);

            return res.status(201).json(classe);
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    update : async (req, res, next) =>{
        const temp = {};

        ({
            name: temp.classe,
        } = req.body);
        try {
            let classe = await Classe.findOne({
                _id: req.params.classe
            });

            if (classe) {
                Object.keys(temp).forEach((key) => {
                    if (!!temp[key]) {
                        classe[key] = temp[key];
                    }
                });

                await classe.save();
                return res.status(201).json(classe);
            }

            return res.status(404).json('classe_not_found');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    delete : async (req, res, next) =>{
        try {
            await Classe.deleteOne({
                _id: req.params.id
            });

            return res.status(201).json('delete_ok');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    getAll : async (req, res, next) =>{
        try {
            let classes = await Classe.find();
            res.status(200).json({
                status:"success",
                length:classes.length,
                data:{
                    classes:classes
                }
            });
        } catch (error) {
            return res.status(501).json(error);
        }
        
    }

}