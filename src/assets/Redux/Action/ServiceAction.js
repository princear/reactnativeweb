import {
  GET_SERVICES,
  COMPANY_LIST, 
} from "./type";
import { logistical } from '../../../logistical'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";
import { RemoveToken } from "./userAction";



export const GetServices = (navigation) => dispatch => {

  dispatch({
    type: 'LOADING',
    payload: true
  });

  console.log("All Services >>>>>>>>>> maintainevc");
  return new Promise(async (resolve, reject) => {

    const response = await logistical.get('/service-categories', navigation);

    if (response.status == '1') {

      dispatch({
        type: GET_SERVICES,
        Services: response.data.serviceCategory,
      });

      resolve(response);
      dispatch({
        type: 'LOADING',
        payload: false
      });

    }

    else if (response.message == 'Unauthenticated.') {
      Alert.alert('Session expired please login again ..')
      dispatch(RemoveToken('null'))

      AsyncStorage.removeItem('login');
      navigation.navigate('Auth');
    }
    else {
      console.log('errrrrrrrrrrrrrrr>>>>>>>>>>>>>>>')
      reject(response);
    }
  });
};

export const CompanyList = (Id, data, navigation) => dispatch => {

  // console.log( "All Services >>>>>>>>>> campany  ", data, );

  return new Promise(async (resolve, reject) => {

    const response = await logistical.get('/service-categories/' + Id, data);
    console.log(response, '-------------')

    // console.log( 'comapanies>>>>>>>>>>>>????????', response.data.companies );

    if (response.status == '1') {

      dispatch({
        type: COMPANY_LIST,
        Companies: response.data,
      });

      // navigation.navigate('Auth1');

      resolve(response);

    }
    else if (response.message == 'Unauthenticated.') {
      Alert.alert('Session expired please login again ..')
      dispatch(RemoveToken('null'))

      AsyncStorage.removeItem('login');
      navigation.navigate('Auth');
    }
    else {

      console.log('err', response.message)

      reject(response);

      dispatch({
        type: 'LOADING',
        payload: false
      });
    }
  });
};




