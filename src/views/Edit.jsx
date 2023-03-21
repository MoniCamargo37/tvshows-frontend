import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import showService from "../services/showService";

export default function EditShow() {
  const params = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState({});
  const [setError] = useState(false);

  const getShow = async () => {
    try {
      const response = await showService.getShow(params.id);
      setShow(response);
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  useEffect(() => {
    getShow();
  }, [params.id]);

  const handleChange = (e) => {
    setShow((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await showService.editShow(params.id, show);
      navigate(`/shows/${params.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="editShow">
      <h2>Edit show</h2>
      <form onSubmit={handleSubmit}>
        <label>Show Title</label>
        <input
          type="text"
          name="title"
          required
          value={show.title}
          onChange={handleChange}
        />
        <label>Image</label>
        <input
          type="text"
          name="image"
          required
          value={show.image}
          onChange={handleChange}
        />
        <label>Creator name</label>
        <input
          type="text"
          name="creator"
          required
          value={show.creator}
          onChange={handleChange}
        />
        <label>Genre</label>
        <input
          type="text"
          name="genre"
          required
          value={show.genre}
          onChange={handleChange}
        />
        <label>Launched year</label>
        <input
          type="number"
          name="launched"
          required
          value={show.launched}
          onChange={handleChange}
        />
        <label>Description</label>
        <textarea
          name="description"
          required
          value={show.description}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
