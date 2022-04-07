const express = require("express");
const app = express();
const employeeControllers = require("./controllers/employee");
const cors = require("cors");
const PORT = process.env.PORT || 8000;

///
app.use(cors());
app.use(express.json());
app.use("/employees", employeeControllers);
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
