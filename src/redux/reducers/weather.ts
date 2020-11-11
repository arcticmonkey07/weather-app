const initialState = {
  cities: [],
};

interface ICity {
  id: number
  cityName: string
}

const weather = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CITY':
      return {
        ...state,
        cities: state.cities.concat(action.payload),
      };
    case 'DEL_CITY':
      return {
        ...state,
        cities: state.cities.filter((item: ICity) => item.id !== action.payload)
      }
    default:
      return state;
  }
};

export default weather;