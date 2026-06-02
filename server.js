const app = require("./src/app");
const connectDB = require("./src/db/db");

// 1. Establish Database Connection First
connectDB();

// 2. Start the Express Server
// Uses the port from .env if available, otherwise defaults to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});