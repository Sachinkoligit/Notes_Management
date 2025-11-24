import mongoose from "mongoose";

const Connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "ChatBot",
    });
    console.log("Db Connected Successfully..")
  } catch (err) {
    console.log("Error: ", err);
  }
};

export default Connection;
