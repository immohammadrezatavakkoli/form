import connectDB from "../../utils/connectDB";
import User from "../../../models/User";

export default async function handler(req, res) {
    await connectDB();

    switch (req.method) {
        case "GET":
        try {
            const userId = req.query.userId; 
            const user = await User.findById(userId);
            return res.status(200).json({ status: "success", data: user });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Error retrieving data from the database" });
        }
    }
}