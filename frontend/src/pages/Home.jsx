import { useEffect, useState } from "react";
import "../index.css";
import axiosInstance from "../lib/axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  const getNotes = async () => {
    try {
      const response = await axiosInstance.get("/noteRoutes/getAllNote");
      setNotes(response.data);
    } catch (err) {
      console.error("Error fetching notes:", err);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      <div>
        <button onClick={()=>navigate("/create")} className="create-note">Create_Note</button>
      </div>
      <h2>Notes</h2>
      <div className="container">
        {notes.map((note) => (
          <div
            onClick={() => navigate(`/note/${note._id}`)}
            className="note"
            key={note._id}
          >
            {note.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
