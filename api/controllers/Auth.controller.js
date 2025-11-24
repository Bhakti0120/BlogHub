import { handleError } from "../helpers/handleError.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const Register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      //User already registered.
      return next(handleError(409, "User already registered."));
    }

    const hashPassword = bcrypt.hashSync(password);
    ///register User
    const user = new User({
      name,
      email,
      password: hashPassword,
    });

    await user.save();

    res.status(200).json({
      success: true,
      message: "User registered successfully.",
    });
  } catch (error) {
      next(handleError(500,error.message));
  }
};
export const Login = async (req, res) => {};
