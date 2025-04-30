const Form = require("../models/Form");

exports.getMyStatus = async (req, res) => {
  try {
    const userId = req.user._id; // user from token

    const forms = await Form.find({ user: userId }).sort({ createdAt: -1 }); // optional sort

    if (!forms || forms.length === 0) {
      return res.status(404).json({ message: "No forms found for this user" });
    }

    res.status(200).json(forms);
  } catch (error) {
    console.error("Error in getMyStatus:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
