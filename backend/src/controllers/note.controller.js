import Note from "../models/note.model.js";

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    await Note.create({ title, content });
    res.status(201).json({ message: "Note Created Successfully" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getNote = async (req, res) => {
  try {
    const { id } = req.params;
    const data=await Note.findOne({ _id:id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getAllNote = async (req, res) => {
  try {
    const data = await Note.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const updateNote = async (req, res) => {
  try {
    const {id}=req.params;
    const { content } = req.body;
    const data=await Note.findByIdAndUpdate({_id:id},{content})
    res.status(201).json({ message: "Note updated Successfully" },data);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
