import {connect,connection} from 'mongoose';
import { CLIENT_RENEG_LIMIT } from 'tls';

const conn = {
    isConnected: false
}
const dbConnect = async ()=>{
    if (conn.isConnected) return;

    const db = await connect(process.env.MONGOB_URL as string)

    conn.isConnected  =  db.connections[0].readyState 

    console.log(db.connection.db.databaseName);
}

connection.on("connected",()=>console.log("connected to db"));
connection.on("error", (err)=>console.log(err));

export default dbConnect;

