// this is the model

const { Schema, model } = require("./connection");

const employeeSchema = Schema(
  {
    name: String,
    title: String,
    image: String,
    phoneNumber: String,
    officeNumber: String,
    email: String,
  },
  {
    timestamps: true,
  }
);

const Employee = model("Employee", employeeSchema);
module.exports = Employee;
