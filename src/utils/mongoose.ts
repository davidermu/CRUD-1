import {connect,connection} from 'mongoose';

const dbConnect = async ()=>{

    const db = await connect(process.env.MONGOB_URL)

    console.log(db.connections[0].readyState);
    
}

connection.on("connected",()=>console.log("connected to db"));
connection.on("error", (err)=>console.log(err));

export default dbConnect;

