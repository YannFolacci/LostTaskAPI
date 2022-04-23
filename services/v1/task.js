const Task = require('../../models/task');


module.exports = {
    // function : async (req, res, next) =>{},
    getById : async (req, res, next) =>{
        try {
            let task = await Task.findById(req.params.id);
    
            if (task) {
                return res.status(200).json(task);
            }
    
            return res.status(404).json('task_not_found');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    getByLocation : async (req, res, next) =>{
        try {
            let tasks = await Task.find({
                location: req.body.island
            });
    
            res.status(200).json({
                status:"success",
                length:tasks.length,
                data:{
                    island: req.body.island,
                    tasks: tasks
                }
            });

        } catch (error) {
            return res.status(501).json(error);
        }
    },
    getAll : async (req, res, next) =>{
        try {
            let tasks = await Task.find();
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
    add : async (req, res, next) =>{
        const temp = {};
        
        ({
            name: temp.name,
            location: temp.island,
            type: temp.type
        } = req.body);

        try {
            let task = await Task.create(temp);

            return res.status(201).json(task);
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    update : async (req, res, next) =>{
        const temp = {};
        
        ({
            name: temp.name,
            location: temp.island,
            type: temp.type
        } = req.body);

        try {
            let task = await Task.findById(req.params.id);

            if (task) {
                Object.keys(temp).forEach((key) => {
                    if (!!temp[key]) {
                        task[key] = temp[key];
                    }
                });

                await task.save();
                return res.status(201).json(task);
            }

            return res.status(404).json('task_not_found');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    delete : async (req, res, next) =>{
        try {
            await Task.deleteOne({
                _id: req.params.id
            });
    
            return res.status(201).json('delete_ok');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
}