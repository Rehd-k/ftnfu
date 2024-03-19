import mongoose, { Connection } from "mongoose";

const MONGODB_URI: string = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

interface CachedConnection {
  conn: Connection | null;
  promise: Promise<Connection> | null;
}

let cached: CachedConnection = { conn: null, promise: null };

async function dbConnect(): Promise<Connection> {
  if (cached.conn) {
    console.log(`Allready connected to : ${MONGODB_URI}`)
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = (mongoose.connect(MONGODB_URI, opts) as unknown) as Promise<Connection>;
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  if (!cached.conn) {
    throw new Error("MongoDB connection not established.");
  } else {
    console.log(`Connected Extablished : ${MONGODB_URI}`)
  }

  return cached.conn;
}

export default dbConnect;
