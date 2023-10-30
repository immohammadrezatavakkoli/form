import connectDB from "../../utils/connectDB";
import User from "../../../models/User";

const validateRegistration = ({ 'First Name': firstName, 'Last Name': lastName, 'Password': password }) => {
  if (firstName.length < 3) return "The firstname must have at least 3 letters";
  if (lastName.length < 3) return "The lastname must have at least 3 letters";
  if (password.length < 8) return "Password must have at least 8 digits";
  return null;
};

export default async function handler(req, res) {
  await connectDB();

  switch (req.method) {
    case "POST":
      const validationError = validateRegistration(req.body);
      if (validationError) return res.status(422).json({ error: validationError });

      try {
        const { 'First Name': firstName, 'Last Name': lastName, 'Password': password } = req.body;

        const newUser = await User.create({
          firstName,
          lastName,
          password,
          // age: 24,
          // email: "",
        });
        await newUser.save();
        return res.status(201).json({ message: "Registration successful!" });
      } catch (error) {
        return res.status(500).json({ error: "Error connecting to MongoDB" });
      }

    case "GET":
      try {
        const users = await User.find();
        return res.status(200).json({ status: "success", data: users });
      } catch (error) {
        return res.status(500).json({ error: "Error retrieving data from the database" });
      }

    default:
      return res.status(405).json({ error: "Method Not Allowed" });
  }
}
