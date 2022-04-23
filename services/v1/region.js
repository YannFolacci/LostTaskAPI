const Region = require('../../models/region');


module.exports = {
    // function : async (req, res, next) =>{},
    add : async (req, res, next) =>{
        const temp = {};
        
        ({
            name: temp.name,
            abbr: temp.abbr
        } = req.body);

        try {
            let region = await Region.create(temp);

            return res.status(201).json(region);
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    update : async (req, res, next) =>{
        try {
            let region = await Region.findOne({
                addr: req.params.addr
            });

            if (region) {
                Object.keys(temp).forEach((key) => {
                    if (!!temp[key]) {
                        region[key] = temp[key];
                    }
                });

                await region.save();
                return res.status(201).json(region);
            }

            return res.status(404).json('region_not_found');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    delete : async (req, res, next) =>{
        try {
            await Region.deleteOne({
                addr: req.params.addr
            });

            return res.status(201).json('delete_ok');
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    getAll : async (req, res, next) =>{
        try {
            let regions = await Region.find();
            res.status(200).json({
                status:"success",
                length:regions.length,
                data:{
                    regions: regions
                }
            });
        } catch (error) {
            return res.status(501).json(error);
        }
        
    },
    getOne : async (req, res, next) =>{
        console.log("get one region", req.params.addr)
        try {
            let region = await Region.findOne({abbr: req.params.addr}).exec();
            res.status(200).json({
                status:"success",
                length:region.length,
                data:{
                    region: region
                }
            });
        } catch (error) {
            return res.status(501).json(error);
        }
        
    },
}