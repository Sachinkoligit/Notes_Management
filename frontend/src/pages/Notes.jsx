import { useEffect, useState } from "react";
import axiosInstance from "../lib/axios"; // adjust path
import { useNavigate, useParams } from "react-router-dom";
import "../index.css";

export default function Notes() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axiosInstance.get(`noteRoutes/getNote/${id}`);
        setNote(res.data);
      } catch (err) {
        console.error("Error fetching note:", err);
      }
    };
    fetchNote();
  }, [id]);

  return (
    <div>
      {note ? (
        <>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <button
            onClick={() => navigate(`/update/${note._id}`)}
            className="update_btn"
          >
            Update
          </button>
          <button
            onClick={() => navigate(`/`)}
            className="Home_btn"
          >
            Go_To_Home
          </button>
        </>
      ) : (
        <p>Loading note...</p>
      )}
    </div>
  );
}
