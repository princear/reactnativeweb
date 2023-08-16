import { USER_LOGIN, GET_TOKEN, REMOVE_TOKEN, PROFILE_LOGIN, UPDATE_PROFILE_LOGIN } from "./type";
import { logistical } from '../../logistical'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, ToastAndroid } from "react-native";


export const RemoveToken = (data, navigation) => dispatch => {

  return new Promise(async (resolve, reject) => {

    dispatch({
      type: REMOVE_TOKEN,
      Token: data
    })

    // navigation.navigate('AuthCheck');
  })
}

export const UserLogin = (data, navigation) => dispatch => {

  dispatch({
    type: 'LOADING',
    payload: true
  });

  return new Promise(async (resolve, reject) => {

    const response = await logistical.post('/login', data);
    console.log('response???????&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&?', response, response.data);

    console.log('response????????', response, 'Token>>>>>>>>>>>>>>>>>', response.data.token);

    if (response.status == '1' && response.message == 'loggedin') {
      console.log('abbb')
      AsyncStorage.setItem("login", JSON.stringify(response.data.token));
      AsyncStorage.setItem("loginData", JSON.stringify(response.data.user.id));

      dispatch({
        type: USER_LOGIN,
        Userdata: response,
      });


      dispatch({
        type: GET_TOKEN,
        Token: response.data.token,
      });

      //   Alert.alert(response.response[0])
      resolve(response);

      // navigation.navigate('AuthCheck');



      navigation.navigate('MainHome', {
        OTP: response.data.user.otp,
        Id: response.data.user.id
      });

      dispatch({

        type: 'LOADING',
        payload: false

      });
    }

    else if (response.status == '0' && response.message == 'invalid_credentials') {

      Alert.alert(response.response[0])
      dispatch({

        type: 'LOADING',
        payload: false

      });
    }

    else {
      // Alert.alert(response.message)
      Alert.alert(response.response[0])
      dispatch({

        type: 'LOADING',
        payload: false

      });
      console.log('errrrrrrrrrrrrrrr>>>>>>>>>>>>>>>')
      reject(response);
    }
  });
};

export const ProfileData = (navigation) => dispatch => {
  dispatch({
    type: 'LOADING',
    payload: true

  });
  return new Promise(async (resolve, reject) => {

    const loginDataaa = await AsyncStorage.getItem('loginData');

    const response = await logistical.get('/get-profile' + '/' + loginDataaa);

    if (response.status == '1') {

      dispatch({
        type: PROFILE_LOGIN,
        profile: response.data.user,
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
      Alert.alert(response.response[0])
      dispatch({
        type: 'LOADING',
        payload: false

      });
      console.log('errrrrrrrrrrrrrrr>>>>>>>>>>>>>>>')
      reject(response);
    }
  });
};


export const UpdateProfileData = (data, navigation) => dispatch => {
  console.log('data===================>', data)
  dispatch({
    type: 'LOADING',
    payload: true

  });
  return new Promise(async (resolve, reject) => {

    dispatch({
      type: 'LOADING',
      payload: false

    });

    const response = await logistical.post('/update-profile', data);

    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>', response)

    if (response.status == '1' && response.message == 'Successfully Response') {
      // dispatch({
      //   type: UPDATE_PROFILE_LOGIN,
      //   updateProfile: response.data.user,
      // });

      dispatch(ProfileData())
      Alert.alert(response.response[0])
      ToastAndroid.showWithGravity(
        'updated successfully!',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );
      resolve(response);

    }

    else {
      Alert.alert(response.response[0])
      dispatch({
        type: 'LOADING',
        payload: false

      });
      console.log('errrrrrrrrrrrrrrr>>>>>>>>>>>>>>>')
      reject(response);
    }
  });
};
