import jwt from "jsonwebtoken";
import users from "../Models/userModel.js";
export const login = async (req, res) => {
  const { email, image, city } = req.body;
  console.log(email, image, city);
  try {
    const existingUser = await users.findOne({ email });
    console.log("user", existingUser);
    if (!existingUser) {
      // User does not exist, create a new user
      const newUser = await users.create({ email, image });

      const token = jwt.sign(
        {
          email: newUser.email,
          id: newUser._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
      res.status(200).json({ result: newUser, token });
    } else {
      //   User already exists, generate token
      const token = jwt.sign(
        {
          email: existingUser.email,
          id: existingUser._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
      res.status(200).json({ result: existingUser, token });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ mess: "Something went wrong..." });
  }
};
