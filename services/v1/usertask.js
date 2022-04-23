const UserTask = require('../../models/usertask');

module.exports = {
    // function : async (req, res, next) =>{},

    add : async (req, res, next) =>{
        const temp = {};

        ({
            task: temp.task,
            user: req.params.id,
            done: temp.done,
            timesdone: temp.timesdone
        } = req.body);

        Object.keys(temp).forEach((key) => (temp[key] == null) && delete temp[key]);

        try {
            let userTask = await UserTask.create(temp);

            return res.status(201).json(userTask);
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    update : async (req, res, next) =>{
        const temp = {};

        ({
            task: temp.task,
            user: req.params.id,
            done: temp.done,
            timesdone: temp.timesdone
        } = req.body);

        try {
            let userTask = await UserTask.findOne({
                user: req.params.id,
                task: req.params.task
            });

            if (userTask) {
                Object.keys(temp).forEach((key) => {
                    if (!!temp[key]) {
                        userTask[key] = temp[key];
                    }
                });

                await userTask.save();
                return res.status(201).json(userTask);
            }

            return res.status(404).json('user_task_not_found');
        } catch (error) {
            console.log(error)
            return res.status(501).json(error);
        }
    },
    delete : async (req, res, next) =>{
        try {
            await UserTask.deleteOne({
                user: req.params.id,
                task: req.params.task
            });
    
            return res.status(201).json('delete_ok');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    getById : async (req, res, next) =>{   
        try {
            let userTask = await UserTask.findOne({
                user : req.params.id,
                task : req.params.task,
            });
    
            if (userTask) {
                return res.status(200).json(userTask);
            }
    
            return res.status(404).json('user_task_not_found');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    getAll : async (req, res, next) =>{   
        try {
            let userTasks = await UserTask.find({
                user : req.params.id
            });
    
            if (userTasks) {
                return res.status(200).json(userTasks);
            }
    
            return res.status(404).json('user_task_not_found');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    check : async (req, res, next) =>{
        try {
            let userTask = await UserTask.findOne({
                user : req.params.id,
                task : req.params.task,
            });
    
            if (userTask && userTask.done == false) {
                userTask.done = true
                userTask.timesdone++
                await userTask.save();
                return res.status(200).json(userTask);
            }
    
            return res.status(404).json('user_task_not_found');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
}