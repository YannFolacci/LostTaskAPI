const mongoose = require('mongoose');

const clientOptions = {
    useNewUrlParser   : true,
    dbName            : 'apinode'
};

exports.initClientDbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNSTRING, clientOptions)
        console.log('Connected');
    } catch (error) {
        console.log(error);
        throw error;
    }
}
