
import { GET_SERVICES} from "../Action/type";


const initialstate = {

  Services: [],
  
  ServiceDetail: [],
  loading: false,
  
}

const Services = (state = initialstate, action) => {

  // console.log( '>>>>>>>>>>>>>>>>Token from reducer.', action.payload );
  switch (action.type) {

    case GET_SERVICES:

      return { ...state, Services: action.Services }

    

    case 'LOADING':

      if (action.payload) {

        return {
          ...state,
          loading: action.payload,
          error: null,
          success: null,
        };
      }


      return { ...state, loading: action.payload };


  }

  return state;

}

export default Services;