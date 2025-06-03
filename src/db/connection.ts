import { connect, disconnect } from "mongoose"
async function connectToMongodb() {
    try {
        await connect(process.env.MONGODB_URL)
    } catch (error) {
        console.log(error)
        throw new Error("Cannot connect to mongodb")
    }
}

async function disconnectToDatabase() {
    try {
        await disconnect()
    } catch (error) {
        console.log(error)
        throw new Error("cannot disconnect to database")
    }
}
export { connectToMongodb, disconnectToDatabase }