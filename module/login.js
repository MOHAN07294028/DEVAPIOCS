const express = require("express");
const mongoose = require("mongoose");
const { dbURL } = require("../config/dbConfig");
const { registerSchema } = require("../schema/register");
const router = express.Router();
mongoose.connect(dbURL);

router.post("/loginData", async (req, res) => {
  try {
    const { EmployeeId, Password } = req.body;

    if (!EmployeeId || !Password) {
      return res.status(400).send({
        status: false,
        result: "Invalid credentials",
      });
    }
    const employee = await registerSchema
      .findOne({ Username: EmployeeId })
      .populate("Gender Role");

    if (!employee) {
      return res.status(400).send({
        status: false,
        result: "Employee Id not found",
      });
    }

    if (Password != employee.Password) {
      return res.status(400).send({
        status: false,
        result: "Invalid credentialsp",
      });
    }

    const formattedEmployee = {
      ...employee.toObject(),
      Gender_id: employee.Gender._id,
      GenderLabel: employee.Gender.label,
      Role_id: employee.Role._id,
      RoleLabel: employee.Role.label,
      isLoginAuthKey: true,
    };

    delete formattedEmployee.Gender;
    delete formattedEmployee.Role;

    res.status(200).send({
      status: true,
      result: formattedEmployee,
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      result: "An error occurred",
    });
  }
});

module.exports = router;
