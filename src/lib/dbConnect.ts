import mongoose from "mongoose"


type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("already connected to database");
        return
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "", {})
        console.log("new connection")
        connection.isConnected = db.connections[0].readyState

        console.log("DB IS CONNECTED")

    } catch(error){
        console.log("Databaase connection is failed")
        process.exit(1)
    }
}

export default dbConnect;