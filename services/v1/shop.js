const ShopItem = require('../../models/shopitem');


module.exports = {
    // function : async (req, res, next) =>{},
    getShop : async (req, res, next) =>{
        try {
            let activeShopItems = await ShopItem.find({
                active: true
            })
            res.status(200).json({
                status: "success",
                length: activeShopItems.length,
                data:{
                    activeShopItems: activeShopItems
                }
            });
        } catch (error) {
            return res.status(501).json(error);
        }
    },
    update : async (req, res, next) =>{
        console.log(req.body)
        // const temp = {};

        // ({
            
        // } = req.body);

        // try {
            // let user = await User.findOne({
            //     email: req.params.email
            // });

            // if (user) {
            //     Object.keys(temp).forEach((key) => {
            //         if (!!temp[key]) {
            //             user[key] = temp[key];
            //         }
            //     });

            //     await user.save();
            //     return res.status(201).json(user);
            // }

            return res.status(404).json('user_not_found');
        // } catch (error) {
        //     return res.status(501).json(error);
        // }
    },
}