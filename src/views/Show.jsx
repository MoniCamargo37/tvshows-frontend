import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Card from "../components/Card";
import showService from "../services/showService";

export default function Show() {
  const params = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getShow = useCallback(async () => {
    try {
      const data = await showService.getShow(params.id);
      setShow(data);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [params.id]);

  useEffect(() => {
    getShow();
  }, [getShow]);

  const handleDelete = async () => {
    try {
      await showService.deleteShow(params.id);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="showDetails">
      <h2>TV Show details</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong. Couldn't find your show</p>}
      {show && <Card key={show._id} show={show} />}
      <button onClick={() => navigate(`/edit/${params.id}`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
