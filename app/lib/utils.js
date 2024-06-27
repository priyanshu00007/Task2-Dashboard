import mongoose from 'mongoose';

const connection = {};

export const connectToDB = async () => {
  if (connection.isConnected) {
    return;
  }

  try {
    console.log("object is already connected", process.env.MONGO)
    const db = await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      tls: true ,
      tlsAllowInvalidCertificates: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB", connection);
    return
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    // throw new Error(error);
  }
};
