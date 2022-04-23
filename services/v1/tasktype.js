const Tasktype = require('../../models/tasktype');
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
            let tasktypes = await Tasktype.find();
            res.status(200).json({
                status:"success",
                length:tasktypes.length,
                data:{
                    tasktypes: tasktypes
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
        } = req.body);

        try {
            let tasktype = await Tasktype.create(temp);

            return res.status(201).json(tasktype);
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    update : async (req, res, next) =>{
        const temp = {};
        
        ({
            name: temp.name,
        } = req.body);

        try {
            let tasktype = await Tasktype.findById(req.params.server);

            if (tasktype) {
                Object.keys(temp).forEach((key) => {
                    if (!!temp[key]) {
                        tasktype[key] = temp[key];
                    }
                });

                await tasktype.save();
                return res.status(201).json(tasktype);
            }

            return res.status(404).json('task_type_not_found');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    delete : async (req, res, next) =>{
        try {
            await Tasktype.deleteOne({
                _id: req.params.id
            });

            return res.status(201).json('delete_ok');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
}