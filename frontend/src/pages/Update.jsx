import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../lib/axios";

export default function Update() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axiosInstance.get(`noteRoutes/getNote/${id}`);
        setNote(res.data);
        setContent(res.data.content);
      } catch (err) {
        console.error("Error fetching note:", err);
      }
    };
    fetchNote();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const res = await axiosInstance.put(`noteRoutes/updateNote/${id}`, {
        content,
      });
      setNote(res.data);
      alert("Note updated successfully!");
      navigate(`/note/${id}`);
    } catch (err) {
      console.error("Error updating note:", err);
    }
  };

  return (
    <>
      <div>
        <h2>{note && note.title}</h2>
      </div>
      <div className="note-container">
        <label>Content</label>
        <textarea
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button className="upd_cont" onClick={handleUpdate}>
        Update Content
      </button>
      <button onClick={() => navigate(`/`)} className="Home_btn">
        Go_To_Home
      </button>
    </>
  );
}
