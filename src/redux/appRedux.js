import { getAllTourism } from "../app/Services/productsService";

const APP_TITLE = "APP_TITLE";
const GET_ALL_TOURISM = "GET_ALL_TOURISM"

const stateInitial = {
  title: "Alojamiento Turismo",
};

const estadoInicialTurismo = {
  tourism: [],
};


export const appReducer = (state = stateInitial, action) => {
  console.log('action', action)
  switch (action.type) {
    case APP_TITLE:
      return {...state, title: action.payload};
    default:
      return state;
  }
};

export const tourismReducer = (state = estadoInicialTurismo, action) => {
  switch (action.type) {
    case GET_ALL_TOURISM:
      return {...state, tourism: action.payload};
    default:
      return state;
  }
};

export const setTitle = title => {
  return dispatch => {
    dispatch({
      type: APP_TITLE,
      payload: title
    });
  }
}

const getAllTourismAction = (turismo) => ({
  type: GET_ALL_TOURISM,
  payload: turismo,
});

export const allTourism = () => {
  return async (dispatch) => {
    try {
      const turismo = await getAllTourism();
      dispatch(getAllTourismAction(turismo));
    } catch (e) {
      console.log(e);
    }
  };
};