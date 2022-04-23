const ServerState = require('../../models/serverstate');


module.exports = {
    // function : async (req, res, next) =>{},
    getAll : async (req, res, next) =>{
        try {
            let serverStates = await ServerState.find();
            res.status(200).json({
                status:"success",
                length:serverStates.length,
                data:{
                    serverStates: serverStates
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
            let serverState = await ServerState.create(temp);

            return res.status(201).json(serverState);
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
            let serverState = await ServerState.findOne({
                id: req.params.id
            });

            if (serverState) {
                Object.keys(temp).forEach((key) => {
                    if (!!temp[key]) {
                        serverState[key] = temp[key];
                    }
                });

                await serverState.save();
                return res.status(201).json(serverState);
            }

            return res.status(404).json('server_state_not_found');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    delete : async (req, res, next) =>{
        try {
            await ServerState.deleteOne({
                _id: req.params.id
            });

            return res.status(201).json('delete_ok');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    

}