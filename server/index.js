const express = require("express");
const app = express();
const ServerConfig = require("./config");
const ApiRoutes = require("./routes");
const cors = require("cors");
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use("/api", ApiRoutes );

app.get("/test", (_, res) => {
  res.json({ message: "Testing route is running" });
});

app.listen(ServerConfig.PORT, async () => {
  console.log(`Server is running on port ${ServerConfig.PORT}`);
});
