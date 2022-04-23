const Server = require('../../models/server');


module.exports = {
    // function : async (req, res, next) =>{},
    getAll : async (req, res, next) =>{
        try {
            let servers = await Server.find();
            res.status(200).json({
                status:"success",
                length:servers.length,
                data:{
                    servers: servers
                }
            });
        } catch (error) {
            return res.status(501).json(error);
        }
        
    },
    getOne : async (req, res, next) =>{
        try {
            let server = await Server.findOne({name: req.params.server}).exec();
            res.status(200).json({
                status:"success",
                length:server.length,
                data:{
                    server: server
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
            region: temp.region
        } = req.body);

        try {
            let server = await Server.create(temp);

            return res.status(201).json(server);
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    update : async (req, res, next) =>{
        const temp = {};

        ({
            name: temp.server,
        } = req.body);
        try {
            let server = await Server.findById(req.params.server);

            if (server) {
                Object.keys(temp).forEach((key) => {
                    if (!!temp[key]) {
                        server[key] = temp[key];
                    }
                });

                await server.save();
                return res.status(201).json(server);
            }

            return res.status(404).json('server_state_not_found');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    delete : async (req, res, next) =>{
        try {
            await Server.deleteOne({
                _id: req.params.server
            });

            return res.status(201).json('delete_ok');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
}