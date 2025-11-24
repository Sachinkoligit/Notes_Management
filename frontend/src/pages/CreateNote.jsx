import { useState } from "react";
import axiosInstance from "../lib/axios";
import { useNavigate } from "react-router-dom";

export default function CreateNote() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("noteRoutes/createNote", data);
      alert("Note created successfully!");
      setData({ title: "", content: "" });
      navigate("/");
    } catch (err) {
      console.error("Error creating note:", err);
    }
  };

  return (
    <div className="container1">
      <form onSubmit={handleSubmit}>
        <div className="container2">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
          />
        </div>

        <div className="container2">
          <label>Content</label>
          <textarea
            rows={5}
            name="content"
            value={data.content}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="create_btn">
          Create Note
        </button>
        <button onClick={() => navigate("/")} className="Home_btn">
          Go_to_home
        </button>
      </form>
    </div>
  );
}
