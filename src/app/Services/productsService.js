
import api from "../clients/api" 
import routes from "../routes/fakeStoreRoute" 

export const getAllTourism = async () => { 
    return api.get(routes.getAllTourism())
} 

export const getTourismById = async (idTourism) => {
    return api.get(routes.getTourismById(idTourism))
}

export const createTourism = async (Tourism) => { 
    return api.post(routes.createTourism(), Tourism)
}

export const updateTourism = async (idTourism, Tourism) => { 
    return api.patch(routes.updateTourism(idTourism), Tourism)
}

export const deleteTourism = async (idTourism) => { 
    return api.delete(routes.deleteTourism(idTourism))
}