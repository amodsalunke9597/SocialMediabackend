const mongoose = require("mongoose");

module.exports = async () => {
    const mongoUri =
        "mongodb+srv://amodsalunke:jucWiXagCtaaNdtW@cluster0.acackqc.mongodb.net/?retryWrites=true&w=majority";

    try {
        const connect = await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
