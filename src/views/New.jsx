import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import showService from "../services/showService";

export default function New() {
  const initialState = {
    title: "",
    description: "",
    genre: "",
    launched: 0,
    image: "",
    creator: "",
    id: "",
  };

  const [newShow, setNewShow] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const show = await showService.createShow(newShow);
      navigate(`/shows/${show._id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setNewShow((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="newShow">
      <h2>Create a tv show</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={newShow.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={newShow.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Genre:
          <input
            type="text"
            name="genre"
            value={newShow.genre}
            onChange={handleChange}
          />
        </label>
        <label>
          Launched year:
          <input
            type="number"
            name="launched"
            value={newShow.launched}
            onChange={handleChange}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            value={newShow.image}
            onChange={handleChange}
          />
        </label>
        <label>
          Creator:
          <input
            type="text"
            name="creator"
            value={newShow.creator}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
