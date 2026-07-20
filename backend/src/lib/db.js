import mongoose from "mongoose";

import {ENV} from "./env.js";

export const connectDB=async ()=>{
    try {
        console.log(ENV.DB_URL)
      const conn= await mongoose.connect(ENV.DB_URL);
      console.log("connected to mongodb",conn.connection.host);
    }
    catch(error){
      console.log("error connecting to mongodb",error);
      process.exit(1);  //0 means success, 1 means failure

    }
}