const mongoose = require("mongoose");

/*
    Config file for establishing connection to mongodb database
*/

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, { 
            useUnifiedTopology : true,
            useNewUrlParser:true,
        });
        console.log(`Database connected: ${conn}`); 
    }catch(e){
        console.log(`Failed to connect with error: ${e}`)
        process.exit()
    }
}
module.exports = connectDB;