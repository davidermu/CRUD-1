import {connect,connection} from 'mongoose';

const conn = {
    isConneted: false,
}

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

const dbConnect = async ()=>{
    if (conn.isConneted) return;

    const db = await connect(process.env.MONGOB_URL as string, options)

    conn.isConneted = db.connections[0].readyState;
    
    
}

connection.on("connected",()=>console.log("connected to db"));
connection.on("error", (err)=>console.log(err));

export default dbConnect;

