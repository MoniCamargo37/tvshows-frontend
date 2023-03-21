import React, { useState, useEffect } from 'react'
import showService from '../services/showService'
import Card from '../components/Card';
import { Link } from 'react-router-dom'

export default function Home() {
  const [showList, setShowList] = useState([]);

  const getShows = async () => {
    try {
      const response = await showService.getShows();
      setShowList(response);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getShows();
  }, []);

  return (
    <>
    <div className='homeH2'>
    <h2>TV shows</h2>
    </div>
    <div className='homeShow'>
      {showList.map((show) => ( <Link to={`/shows/${show._id}`} key={show._id}>
          <Card key={show._id} show={{image:show.image, title:show.title }} link={`/shows/${show._id}`}/>
          </Link>
      ))}
    </div>
    </>
  )
}

