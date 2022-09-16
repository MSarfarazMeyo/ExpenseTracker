const mongoose = require("mongoose");

const DB =
  "mongodb+srv://admin:admin123@expensetracker.qjjpr2z.mongodb.net/Expense_DB?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection start"))
  .catch((error) => console.log(error.message));
