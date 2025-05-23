import app from "./app";
import { connectDB } from "./config/db.config";

//const PORT = process.env.PORT || 3000;
const PORT = parseInt(process.env.PORT || "3000", 10)

const startServer = async () => {
  await connectDB();

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
