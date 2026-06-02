const mongoose = require("mongoose");
const dns = require("dns");

// Load environment variables from the .env file
require("dotenv").config();

// 🚨 DNS Override Fix: 
// Forces Node.js to use Google's DNS (8.8.8.8) to resolve MongoDB SRV records.
// This prevents 'ECONNREFUSED' errors on certain Windows network configurations.
dns.setServers(["8.8.8.8", "8.8.4.4"]);

/**
 * Connects the Express server to the MongoDB Atlas Cluster
 */
async function connectDB() {
    try {
        // Connect using the secure, hidden connection string from .env
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Successfully connected to MongoDB Database");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
        process.exit(1); // Exit the process with failure if DB connection fails
    }
}

module.exports = connectDB;