const mongoose = require("mongoose");
const db =
  "mongodb+srv://admin:admin123@expensetracker.qjjpr2z.mongodb.net/Expense_Tracker_DB?retryWrites=true&w=majority";

const dbConnect = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log(`error ${error.message}`);
  }
};

module.exports = dbConnect;
