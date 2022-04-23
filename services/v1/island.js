const Island = require('../../models/island');
const Task = require('../../models/task');


module.exports = {
    // function : async (req, res, next) =>{},
    getRelatedTasks : async (req, res, next) =>{
        try {
            lettasks = Task.find({type: req.params.id}).exec();
            res.status(200).json({
                status:"success",
                length:tasks.length,
                data:{
                    tasks: tasks
                }
            });
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    getAll : async (req, res, next) =>{
        try {
            let islands = await Island.find();
            res.status(200).json({
                status:"success",
                length:islands.length,
                data:{
                    islands: islands
                }
            });
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    add : async (req, res, next) =>{
        const temp = {};
        
        ({
            name: temp.name,
            ilevel: temp.ilevel,
        } = req.body);

        try {
            let island = await Island.create(temp);

            return res.status(201).json(island);
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    update : async (req, res, next) =>{
        const temp = {};
        
        ({
            name: temp.name,
            ilevel: temp.ilevel,
        } = req.body);

        try {
            let island = await Island.findById(req.params.server);

            if (island) {
                Object.keys(temp).forEach((key) => {
                    if (!!temp[key]) {
                        island[key] = temp[key];
                    }
                });

                await island.save();
                return res.status(201).json(island);
            }

            return res.status(404).json('task_type_not_found');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    delete : async (req, res, next) =>{
        try {
            await Island.deleteOne({
                _id: req.params.id
            });

            return res.status(201).json('delete_ok');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
}