import axios from 'axios';

class ShowService {
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_BACKEND_URL}/show`,
    });
  }

  // Iteration 2: use this method
  getShows() {
    return this.api.get('/').then(({ data }) => data).catch(err => console.error(err));
  }
   // Iteration 3: create method
  getShow(id) {
    return this.api.get(`/${id}`).then(({ data }) => data).catch(err => console.error(err))
  }
  // Iteration 4: create method
  createShow(body) {
    return this.api.post('/', body).then(({ data }) => data).catch(err => console.error(err))
  }

     // Iteration 5: create method
  editShow(id, body) {
    return this.api.put(`/${id}`, body).then(({ data }) => data).catch(err => console.error(err))
  }
 // Iteration 3: create method
  deleteShow(id) {
    return this.api.delete(`/${id}`).then(({ data }) => data).catch(err => console.error(err))
  }
}

const showService = new ShowService();

export default showService;