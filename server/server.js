const app = require("./index");
const connect = require("./config/db");
const cors = require("cors");

const PORT = process.env.PORT || 5500;

// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cors());

app.listen(PORT, async () => {
  await connect();
  console.log(`Listening on the port ${PORT}`);
});
