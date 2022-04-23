const Item = require('../../models/item');

module.exports = {
    // function : async (req, res, next) =>{},
    getAll : async (req, res, next) =>{

    },
    add : async (req, res, next) =>{
        const temp = {};
        
        ({
            name: temp.name,
            quantity: temp.quantity,
            active: temp.active,
        } = req.body);

        try {
            let item = await Item.create(temp);

            return res.status(201).json(item);
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    update : async (req, res, next) =>{
        const temp = {};
        
        ({
            name: temp.name,
            quantity: temp.quantity,
            active: temp.active,
        } = req.body);

        try {
            let item = await Item.findById(req.params.id);

            if (item) {
                Object.keys(temp).forEach((key) => {
                    if (!!temp[key]) {
                        item[key] = temp[key];
                    }
                });

                await item.save();
                return res.status(201).json(item);
            }

            return res.status(404).json('item_not_found');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    delete : async (req, res, next) =>{
        try {
            await Character.deleteOne({
                _id: req.params.id,
            });

            return res.status(201).json('delete_ok');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
}