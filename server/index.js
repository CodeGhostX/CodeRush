const express = require("express");
const app = express();
const ServerConfig = require("./config");
const ApiRoutes = require("./routes");
const { CodeExec } = require("./judge");

app.use(express.json());
app.use("/api", ApiRoutes);

app.get("/test", (_, res) => {
  res.json({ message: "Testing route is running" });
});

app.listen(ServerConfig.PORT, async () => {
  console.log(`Server is running on port ${ServerConfig.PORT}`);
});
