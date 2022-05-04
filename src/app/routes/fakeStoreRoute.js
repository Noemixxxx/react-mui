
const url = process.env.REACT_APP_URL;

const routes = {
  getAllTourism: () => url,
  getTourismById: (idtourism) => `${url}/${idtourism}`,
  createTourism: () => url,
  updateTourism: (idTourism) => `${url}/${idTourism}`,
  deleteTourism: (idTourism) => `${url}/${idTourism}`,
};

export default routes;